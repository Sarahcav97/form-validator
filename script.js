const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');

function showError(input, message) {
	const formElements = input.parentElement;
	formElements.className = 'formElements error';
	const small = formElements.querySelector('small');
	small.innerHTML = message;
}
function showSuccess(input) {
	const formElements = input.parentElement;

	formElements.className = 'formElements success';
}

function isValidEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(String(email).toLowerCase());
}
form.addEventListener('click', function (e) {
	e.preventDefault();
	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}
	if (email.value === '') {
		showError(email, 'Email is required');
	} else if (!isValidEmail(email.value)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
	}
	if (password.value === '') {
		showError(password, 'Password is required');
	} else {
		showSuccess(password);
	}
	if (passwordConfirm.value === '') {
		showError(passwordConfirm, 'Password is required');
	} else {
		showSuccess(passwordConfirm);
	}
});
