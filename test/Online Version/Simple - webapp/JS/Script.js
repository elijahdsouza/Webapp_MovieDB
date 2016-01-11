
function getComment() { 
	var xhr = new XMLHttpRequest();
	var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/htmlcomments";
	xhr.open("GET", uri, true);
	xhr.onload = function() {
		var version_d = document.getElementById("show_result");
		version_d.innerHTML = xhr.responseText;
	}
	xhr.send(null);
}

window.onload = getComment();

function postComment() {
	var xhr = new XMLHttpRequest();
	var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/comment?name=" + document.getElementById('usernamebox').value;
	console.log(uri);
	xhr.open("POST", uri, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onload = function() {
		var version_d = document.getElementById("show_result");
		version_d.innerHTML = xhr.responseText;
		getComment();
	}
	xhr.send("\"" + document.getElementById('Comments').value + "\"");
}

function validateForm() {
	var x = document.forms["myForm"]["username"].value;
	if (x == null || x == "") {
		alert("Name must be filled out");
		return false;
	}
	var y = document.forms["myForm"]["password"].value;
	if (y == null || y == "") {
		alert("Name must be filled out");
		return false;
		if (!y >= 6) {
			alert("Password must be atleast 6 characters");
		}
	}
}

function postRegister() {
	//alert("hi post ");
	var xhr = new XMLHttpRequest();

	var user = document.getElementById("usernamebox").value;
	var password = document.getElementById("password").value;
	var address = document.getElementById("address").value;

	if (user == null || user == "")
		alert("please enter username");
	else if (password == null || password == "")
		alert("please enter password");
	else if (address == null || address == "")
		alert("please enter address");
	else {
		// if (validateForm()) {
		// alert("S1 here ");
		var uri = "http://redsox.tcs.auckland.ac.nz/BC/Open/Service.svc/register";
		xhr.open("POST", uri, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Accept", "application/json");
		xhr.send(JSON.stringify({
			Address: address,
			Name: user,
			Password: password,
		}));
		xhr.onload = function() {
			var message = document.getElementById("message");
			message.innerHTML = "Registered, Username: " + user;
			// alert("hi post ");
		}

	}
}