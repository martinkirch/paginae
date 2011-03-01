function () {
	$('.message', self).html("Syncing...");
	
	var host = $('#host', this).val();
	var db = $('#db', this).val();
	
	var self = this;
	var options = {
		
		success : function() {
			$('.message', self).html("Done !");
			setTimeout(function () {
				$('.message', self).html("");
			}, 3000);
			$(self).trigger('replicated');
		},
		
		error : function(status, code, message) {
			$('.message', self).html("Error !");
			alert(message);
		}
	};
	
	$.couch.replicate($$(this).app.db.name, host + '/' + db, options);
}