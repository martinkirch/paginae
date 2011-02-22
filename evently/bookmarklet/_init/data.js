function () {
	var href = document.location.href;
	var currentHostURL = href.substring( 0, href.indexOf('/', 8) );
	
	return {
		href : "javascript:(function(){var d=document,z=d.createElement('ifr'+'ame'),b=d.body;try{if(!b)throw(0);z.setAttribute('src','" + currentHostURL + "/paginae/_design/paginae/saving_iframe.html?url='+window.btoa(window.location.href)+'&title='+window.btoa(document.title));b.appendChild(z);s=z.style;s.position='fixed';s.top=s.left=25;s.width='7em';s.height='3em';setTimeout(function(){b.removeChild(z)},3000);}catch(e){alert('Please%20wait%20until%20the%20page%20has%20loaded.');}})();void(0);"
	}
}