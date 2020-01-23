import React, {useState, useEffect, Fragment} from 'react';
import {validateFormInput}                    from '../../validator';
import {connect}                              from 'react-redux';
import {withRouter}                           from 'react-router-dom';
import swal                                   from 'sweetalert';
import {SigninRequest}                        from '../../actions';

function Signin (props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (email.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

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

    const {errors, isValid} = validateFormInput({email, password});

    if (isValid) {
      let obj = {email, password};
      props.SigninRequest(obj)
        .then(() => {
          props.history.push('/');
        })
        .catch((err) => {
          setError(true);
          swal({
            title: "Oops!, sorry username or password is wrong",
            icon: "warning"
          });
          console.log(err)
        });
    } else {
      let errorMessage = {icon: "warning"};

      if (errors.invalidEmail) {
        errorMessage.title = errors.invalidEmail;
      } else errorMessage.title = "Oops!, sorry all fields are required";

      swal(errorMessage);

      return errors
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
                    <label className="form-label" htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email address"
                           aria-label="Email address" required data-msg="Please enter a valid email address."
                           data-error-class="u-has-error" data-success-class="u-has-success"
                           onChange={(e) => setEmail(e.target.value)}/>
                  </div>

                  <div className="js-form-message form-group">
                    <label className="form-label" htmlFor="password">PASSWORD</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="********"
                           aria-label="********" required data-msg="Your password is invalid. Please try again."
                           data-error-class="u-has-error" data-success-class="u-has-success"
                           onChange={(e) => setPassword(e.target.value)}/>
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

export default connect(null, {SigninRequest})(withRouter(Signin));
