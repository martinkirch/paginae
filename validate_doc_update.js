function (newDoc, existingDoc, userCtx) {
	
	// TODO
	
	function validate(object, message) {
		if (!object) {
			throw({forbidden : message});
		}
	}
	
	function constant(field) {
		if (existingDoc && newDoc[field] != existingDoc[field]) {
			throw({forbidden : "Document's \"" + field + "\" field can't be changed."});
		}
	}
	
	// deletions
	if (newDoc._deleted) {
		return;
	}
	
	constant('type');
	
	switch (newDoc.type) {
		case "link" :
			validate(newDoc.created_at, "Creation timestamp is not set.");
			constant('created_at');
			validate(newDoc.title, "Link title is not set.");
			constant('title');
			validate(newDoc.url, "Creation timestamp is not set.");
			constant('url');
			break;
		default :
			throw({forbidden : "Invalid \"type\" field."});
			break;
	}
}