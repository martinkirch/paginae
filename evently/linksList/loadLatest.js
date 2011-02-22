function () {
	
	var self = this;
	
	$$(this).app.view('linksByDate', {
		descending : true,
		include_docs : true,
		limit : 20,
		
		success : function(data) {
			$(self).trigger('load', [{
				title : "Latest links",
				links : $.map(data.rows, function(row) { return row.doc; })
			}]);
		}
	});
}