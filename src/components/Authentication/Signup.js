import React, {useState, useEffect, Fragment} from 'react';
import {validateFormInput}                    from '../../validator';
import {connect}                              from 'react-redux';
import {withRouter}                           from 'react-router-dom';
import swal                                   from 'sweetalert';
import {SignupRequest}                        from '../../actions';


function Signup (props) {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("");
  const [city, setCity] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [loading, setLoading] = React.useState(false);


  useEffect(() => {
    if (email.trim() && password.trim() && confirmPassword.trim()) {
      // setHelperText('')
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, confirmPassword]);

  /**
   * This method validates the input from the state object
   * and chcecks if its valid and makes an api call to the backend
   *
   * @param {any} event
   * @memberof SigninForm
   * @returns {void}
   */
  const onSubmit = (event) => {
    event.preventDefault();
    if (password.trim() !== confirmPassword.trim()) {
      console.log('error');

      setError(true);
      setHelperText('passwords don\'t match')
    } else {
      const fields = {name, username, password, email, phone, state, city, street};
      const {errors, isValid} = validateFormInput(fields);

      if (isValid) {
        props.SignupRequest(fields)
          .then((res) => {
            console.log(res);
            this.props.history.push('/');
          })
          .catch((err) => {
            console.log(err)
          });
      } else {
        swal({
          title: "Oops!, sorry all fields are required",
          icon: "warning"
        });
      }
    }
  };


  return (
    <Fragment>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top logo-nav">
          <a className="brand" href="#">WishBox</a>
        </nav>
      </header>
      <main>
        <div className="d-flex align-items-center h-100">
          <div id="side-frame" className="col-lg-5 col-xl-4 d-none d-lg-flex align-items-center h-100 px-0"></div>
          <div id="auth-frame" className="container">
            <div className="row">
              <div className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 mt-sm-8 mb-sm-8">
                <form className="js-validate mt-5">
                  <div className="mb-7">
                    <h1 className="h3 text-primary font-weight-normal mb-0">Welcome to <span
                      className="font-weight-semi-bold">WishBox</span></h1>
                    <p>Fill out the form to make your wish</p>
                  </div>

                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="full-name">FULL NAME</label>
                    <input type="text" className="form-control" name="name" id="full-name" placeholder="Full Name"
                           aria-label="Full Name" required data-msg="Please enter your full name."
                           data-error-class="u-has-error" data-success-class="u-has-success"
                           onChange={(e) => setName(e.target.value)}/>
                  </div>

                  <div className="row">
                    <div className="js-form-message form-group col-6">
                      <label className="form-label" htmlFor="email">EMAIL ADDRESS</label>
                      <input type="email" className="form-control" name="email" id="email" placeholder="Email address"
                             aria-label="Email address" required data-msg="Please enter a valid email address."
                             data-error-class="u-has-error" data-success-class="u-has-success"
                             onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="js-form-message form-group col-6">
                      <label className="form-label" htmlFor="username">USERNAME</label>
                      <input type="text" className="form-control" name="username" id="username" placeholder="Username"
                             aria-label="username" required data-msg="Please enter your username."
                             data-error-class="u-has-error" data-success-class="u-has-success"
                             onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                  </div>

                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="phone">PHONE</label>
                    <input type="number" className="form-control" name="phone" id="phone" placeholder="Phone"
                           aria-label="phone" required data-msg="Please enter your phone number."
                           data-error-class="u-has-error" data-success-class="u-has-success"
                           onChange={(e) => setPhone(e.target.value)}/>
                  </div>

                  <div className="row">
                    <div className="js-form-message form-group col-6">
                      <label className="form-label" htmlFor="state">STATE</label>
                      <input type="text" className="form-control" name="state" id="state" placeholder="State"
                             aria-label="state" required data-msg="Please enter your state."
                             data-error-class="u-has-error" data-success-class="u-has-success"
                             onChange={(e) => setState(e.target.value)}/>
                    </div>

                    <div className="js-form-message form-group col-6">
                      <label className="form-label" htmlFor="city">CITY</label>
                      <input type="text" className="form-control" name="city" id="city" placeholder="City"
                             aria-label="city" required data-msg="Please enter your city."
                             data-error-class="u-has-error" data-success-class="u-has-success"
                             onChange={(e) => setCity(e.target.value)}/>
                    </div>
                  </div>

                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="street">STREET</label>
                    <input type="text" className="form-control" name="street" id="street" placeholder="Street"
                           aria-label="street" required data-msg="Please enter your street."
                           data-error-class="u-has-error" data-success-class="u-has-success"
                           onChange={(e) => setStreet(e.target.value)}/>
                  </div>

                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="password">PASSWORD</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="********"
                           aria-label="********" required data-msg="Your password is invalid. Please try again."
                           data-error-class="u-has-error" data-success-class="u-has-success"
                           onChange={(e) => setPassword(e.target.value)}/>
                  </div>

                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"
                           placeholder="********" aria-label="********" required
                           data-msg="Password does not match the confirm password." data-error-class="u-has-error"
                           data-success-class="u-has-success"
                           onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <div> {error ? helperText : ''}</div>
                  </div>

                  <div className="js-form-message mb-5">
                    <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
                      <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox"
                             required
                             data-msg="Please accept our Terms and Conditions." data-error-class="u-has-error"
                             data-success-class="u-has-success"/>
                      <label className="custom-control-label" htmlFor="termsCheckbox">
                        <small>
                          I agree to the
                          <a className="link-muted" href="terms.html">Terms and Conditions</a>
                        </small>
                      </label>
                    </div>
                  </div>

                  <div className="row align-items-center mb-5">
                    <div className="col-5 col-sm-6">
                      <span className="small text-muted">Don't have an account?</span>
                      <a className="small" href="signin.html">Sign up</a>
                    </div>

                    <div className="col-7 col-sm-6 text-right">
                      <button type="submit"
                              className="btn btn-primary transition-3d-hover"
                              onClick={onSubmit}
                              disabled={isButtonDisabled}>Get Started
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default connect(null, {SignupRequest})(withRouter(Signup));
