function (newDoc, existingDoc, userCtx) {
	
	// TODO
	
	function validate(object, message) {
		if (!object) {
			throw({forbidden : message});
		}
	}
	
	// deletions
	if (newDoc._deleted) {
		return;
	}
	
	if (existingDoc && newDoc.type != existingDoc.type) {
		throw({forbidden : "Document's \"type\" field can't be changed."});
	}
	
	switch (newDoc.type) {
		case "link" :
			validate(newDoc.created_at, "Creation timestamp is not set.");
			break;
		default :
			throw({forbidden : "Invalid \"type\" field."});
			break;
	}
}