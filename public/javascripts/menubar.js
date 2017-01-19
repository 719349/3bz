let updateMenu = function() {
	let user = sessionStorage.getItem('user');

	if (user !== null) {
		let link = document.getElementById('user');
		link.innerText = 'Hello ' + user + ' :)';
		link.href = '../pages/user';

		let registrationButton = document.getElementById('register');
		registrationButton.parentElement.removeChild(registrationButton);
	}
}

window.addEventListener('load', updateMenu);
