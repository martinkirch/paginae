function (e, data) {
	
	data.links = $.map(data.links, function(link) {
		var created_at = new Date(link.created_at);
		link.created_at = created_at.toLocaleDateString();
		return link;
	});
	
	return data;
}