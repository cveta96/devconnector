const Validator = require('validator');
const isEmpty = require('./is-empty'); 

module.exports = function validateLoginInput(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Checking for password length 
    if( !Validator.isLength(data.password, { min: 6, max: 30}) ){
        errors.password = "Password must be between 6 and 30 characters";
    }

    // Checking out if input is an empty string and if email is valid     
    if( !Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    if( Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }
    
    if( Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }

};