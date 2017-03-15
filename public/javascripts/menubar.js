let updateMenu = function() {
	let user = sessionStorage.getItem('user');
	let link = document.getElementById('user');
	let logout = document.getElementById('logout');

	logout.addEventListener('click', function () {
		sessionStorage.removeItem('user');
		link.innerText = 'My account';
		link.href = '../pages/user';
		logout.style.display = 'none';
	});

	if (user !== null) {
		link.innerText = 'Hello ' + user + ' :)';
		link.href = '../pages/user';
		logout.style.display = 'inline-block';
	}
	else {
		logout.style.display = 'none';
	}
};

window.addEventListener('load', updateMenu);
