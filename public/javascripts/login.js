let setUp = function () {
	let form = document.getElementById('loginForm');
	form.addEventListener('submit', function(e){
		e.preventDefault();
		let auth = {user: 'adeola', password: 'jollof'};
		let formElements = e.target.getElementsByTagName('input');
		let status = document.getElementById('loginStatus');

		if (formElements[0].value === auth.user
			&& formElements[1].value === auth.password
		) {
			status.innerText = 'Valid user';
			status.classList.add('valid');
			status.classList.remove('invalid');
			sessionStorage.user = formElements[0].value;
		} else {
			status.innerText = 'User password combination not recognised';
			status.classList.add('invalid');
			status.classList.remove('valid');
		}
	});
};

window.addEventListener('load', setUp);
