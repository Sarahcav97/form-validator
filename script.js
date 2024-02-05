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

function checkEmail(input) {
	var re = /\S+@\S+\.\S+/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
	//return re.test(String(email).toLowerCase());
}

function checkRequired(inputArr) {
	inputArr.forEach(function (input) {
		if (input.value === '') {
			showError(input, `${input.id} is required`);
		} else {
			showSuccess(input);
		}
	});
}
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${input.id} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${input.id} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	}
}
form.addEventListener('submit', function (e) {
	e.preventDefault();
	checkRequired([username, email, password, passwordConfirm]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 20);
	checkEmail(email);
	checkPasswordsMatch(password, passwordConfirm);
});

// form.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	if (username.value === '') {
// 		showError(username, 'Username is required');
// 	} else {
// 		showSuccess(username);
// 	}
// 	if (email.value === '') {
// 		showError(email, 'Email is required');
// 	} else if (!isValidEmail(email.value)) {
// 		showError(email, 'Email is not valid');
// 	} else {
// 		showSuccess(email);
// 	}
// 	if (password.value === '') {
// 		showError(password, 'Password is required');
// 	} else {
// 		showSuccess(password);
// 	}
// 	if (passwordConfirm.value === '') {
// 		showError(passwordConfirm, 'Password is required');
// 	} else {
// 		showSuccess(passwordConfirm);
// 	}
// });
