let pageSetup = function () {
	console.log('Loaded');
	window.setTimeout(function(){
		window.location = "../pages/confirmation";
	}, 5000);
};

window.addEventListener('load', pageSetup);
