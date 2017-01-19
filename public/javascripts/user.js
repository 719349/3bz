let setUp = function() {
	let user = sessionStorage.getItem('user');

	if (user !== null) {
		let link = document.getElementById('userName');
		link.innerText = 'Hello ' + user + ' :)';
	}
}

window.addEventListener('load', setUp);
