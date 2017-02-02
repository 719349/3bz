let setUp = function () {
	let loginForm = document.getElementById('loginForm');
	let registrationForm = document.getElementById('registrationForm');

	loginForm.addEventListener('submit', function(e){
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

	registrationForm.addEventListener('submit', function(e){
		e.preventDefault();
		let formElements = e.target.getElementsByTagName('input');
		let status = document.getElementById('regStatus');
		if (formElements[4].value === formElements[5].value) {
			console.log('They match');
			status.classList.add('valid');
			status.classList.remove('invalid');
			status.innerText = 'Valid password';
		} else {
			console.log('They do not match');
			status.classList.add('invalid');
			status.classList.remove('valid');
			status.innerText = 'Passwords do not match';
		}
		// console.log(formElements);
	});
};

window.addEventListener('load', setUp);
