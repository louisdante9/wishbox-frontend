import Validator from 'validator';
import isEmpty   from 'lodash/isEmpty';

/**
 *
 * @desc this functtion handles validation for signin form
 *
 * @param {any} inputData
 * @returns {Object}
 */
export const validateFormInput = ({email, password}) => {
  const errors = {};
  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  }
  if (!Validator.isEmail(email)) {
    errors.invalidEmail = 'Invalid email';
  }
  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export const checkIfEmpty = (obj) => {
  for (const key in obj) {
    if (obj[key] === "")
      return true;
  }
  return false;
};