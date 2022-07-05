const Validator = require("validator");
const validText = require('./valid-text');

//add in username instead of email for validation for login 

module.exports = function(data) {
	let errors = {};	
	data.email = validText(data.email) ? data.email : "";
	data.password = validText(data.password) ? data.password : "";

	if(!Validator.isEmail(data.email)){
		errors.email = "Email is invalid";
	}

	if(Validator.isEmpty(data.email)){
		errors.email = "Email field is required ";
	}

	if(Validator.isEmpty(data.password)){
		errors.password = "Password field is Required ";
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0
	};

}