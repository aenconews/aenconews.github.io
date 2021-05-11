function send() {
	hideSuccess();
	hideError();

	let isValid = validateForm();
	if (!isValid) {
		return;
	}

	disableSubmit();

	var data = getFormData();
	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/form.php');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = function() {
		if (xhr.status === 200) {
			onComplete();
		} else {
			onError();
		}
	};
	xhr.send(data);
}

function onComplete() {
	resetForm();
	showSuccess();
	enableSubmit();
}

function onError() {
	showError();
	enableSubmit();
}

function showError() {
	var ele = document.getElementById('msg-err');
	if (ele) {
		ele.style.display = 'block';
	}
}

function showSuccess() {
	var ele = document.getElementById('msg-ok');
	if (ele) {
		ele.style.display = 'block';
	}
}

function hideError() {
	var ele = document.getElementById('msg-err');
	if (ele) {
		ele.style.display = 'none';
	}
}

function hideSuccess() {
	var ele = document.getElementById('msg-ok');
	if (ele) {
		ele.style.display = 'none';
	}
}

function disableSubmit() {
	var ele = document.getElementById('submit');
	if (ele) {
		ele.value = 'Sending...';
		ele.disabled = true;
	}
}

function enableSubmit() {
	var ele = document.getElementById('submit');
	if (ele) {
		ele.value = 'Submit';
		ele.disabled = false;
	}
}

function getFormData() {
	var eles = ['name','email','subject','message'];
	var data = '';
	for (var i = 0; i < eles.length; i++) {
		var ele = document.getElementById(eles[i]);
		if (ele) {
			if (data !== '') {
				data += '&';
			}
			data += eles[i] + '=' + ele.value;
		}
	}
	return data;
}

function resetForm() {
	var eles = ['name','email','subject','message'];
	for (var i = 0; i < eles.length; i++) {
		var ele = document.getElementById(eles[i]);
		if (ele) {
			ele.value = '';
		}
	}
}

function validateForm() {
	var eles = ['name','email','message'];
	for (var i = 0; i < eles.length; i++) {
		var ele = document.getElementById(eles[i]);
		let isValid = false;
		if (ele) {
			isValid = ele.checkValidity();
			if (!isValid) {
				ele.reportValidity();
				return false;
			}
		}
	}
	return true;
}