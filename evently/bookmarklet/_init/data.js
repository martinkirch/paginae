function () {
	var href = document.location.href;
	var currentHostURL = href.substring( 0, href.indexOf('/', 8) );
	
	return {
		href : "javascript:(function(){var d=document,z=d.createElement('ifr'+'ame'),b=d.body;if(!b)throw(0);z.setAttribute('src','" + currentHostURL + "/paginae/_design/paginae/saving_iframe.html?url='+encodeURIComponent(window.location.href)+'&title='+encodeURIComponent(document.title));b.appendChild(z);s=z.style;s.position='fixed';s.top=s.left=25;s.width='7em';s.height='3em';setTimeout(function(){b.removeChild(z)},3000);})();void(0);"
	}
}
