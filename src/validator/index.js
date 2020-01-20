import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/**
 * 
 * @desc this functtion handles validation for signin form
 * 
 * @param {any} inputData 
 * @returns {void}
 */
export const validateFormInput = (inputData) => {  
  const errors = {};
  if (Validator.isEmpty(inputData.email)) {
    errors.username = 'Email field is required';
  }
  if (Validator.isEmpty(inputData.password)) {
    errors.password = 'Password field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
export const checkIfEmpty = (obj) => {
  for (var key in obj) {
      if (obj[key] == "")
          return true;
  }
  return false;
}