import React from 'react';

export const TermsCheckbox = ({onchange, page}) => {
    console.log(page, 'page!!!')
return (
  <div className="js-form-message mb-5">
    <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
      <input
        type="checkbox"
        className="custom-control-input"
        name="termsCheckbox"
        id="termsCheckbox"
        onChange={onchange}
      />
      {page === 'signup' && <label className="custom-control-label" htmlFor="termsCheckbox">
        <small>
          I agree to the
          <a className="link-muted" href="terms.html">
            Terms and Conditions
          </a>
        </small>
      </label>}
    </div>
  </div>
);
}