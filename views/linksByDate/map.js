function (doc) {
	if (doc.type == 'link') {
		emit(doc.created_at, null);
	}
}