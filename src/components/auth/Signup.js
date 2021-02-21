import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom'
import {signupValidation}  from '../../validator';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import swal from 'sweetalert';
import {SignupRequest} from '../../actions';
import HttpStatus from 'http-status-codes';
import Header from "../Commons/Header";
import Input from "../Commons/Input";
import Button from "../Commons/Botton"
import { TermsCheckbox } from "../Commons/TermsCheckbox";


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
  const [helperTexts, setHelperTexts] = useState([]);
  const [error, setError] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [check, setCheck] = useState(false);
  useEffect(() => {
    document.title = `wishBox::Signup`;
    if (email.trim() &&
      confirmPassword.trim() &&
      password.trim() &&
      name.trim() &&
      username.trim() &&
      phone.trim() &&
      state.trim() &&
      city.trim() &&
      street.trim() && 
      check === true
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [name, username, password, confirmPassword, email, phone, state, city, street, check]);

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
      setError(true);
      setHelperTexts(['passwords don\'t match'])
    } else {
      const fields = {name, username, password, email, phone, state, city, street};
      const {errors, isValid} = signupValidation(fields);

      if (isValid) {
        props.SignupRequest(fields, (res) => {
          if (res && res.status === HttpStatus.CREATED) {
            swal({
              title: "Welcome to wishbox!",
              text: "Your account has been created successfully!",
              icon: "success",
              button: "Continue",
            });
            return props.history.push('/dashboard');
          } else if (res && res.status === HttpStatus.UNPROCESSABLE_ENTITY) {
            setError(true);
            setHelperTexts(res.data.errors.map(error => (error.msg)))
          } else if (res && res.status === HttpStatus.INTERNAL_SERVER_ERROR) {
            setError(true);
            setHelperTexts([res.data.message])
          }
        })
      } else {
        setError(true);
        setHelperTexts(Object.values(errors))
      }
    }
  };

  return (
    <Fragment>
      <Header />
      <main>
        <div className="d-flex align-items-center h-100">
          <div
            id="side-frame"
            className="col-lg-5 col-xl-4 d-none d-lg-flex align-items-center h-100 px-0"></div>
          <div id="auth-frame" className="container">
            <div className="row">
              <div className="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 mt-sm-8 mb-sm-8">
                <form className="js-validate mt-5">
                  <div className="mb-7">
                    <h1 className="h3 text-primary font-weight-normal mb-0">
                      Welcome to{" "}
                      <span className="font-weight-semi-bold">WishBox</span>
                    </h1>
                    <p>Fill out the form to make your wish</p>
                  </div>

                  <div className="js-form-message form-group">
                    <Input
                      type={"text"}
                      label={"form-label"}
                      className={"form-control"}
                      placeholder={"Fullname"}
                      onChange={(e) => setName(e.target.value)}
                      text={"FULLNAME"}
                      name={"name"}
                    />
                  </div>

                  <div className="row">
                    <div className="js-form-message form-group col-6">
                      <Input
                        type={"email"}
                        label={"form-label"}
                        className={"form-control"}
                        placeholder={"Email"}
                        onChange={(e) => setEmail(e.target.value)}
                        text={"EMAIL ADDRESS"}
                        name={"name"}
                      />
                    </div>

                    <div className="js-form-message form-group col-6">
                      <Input
                        type={"text"}
                        label={"form-label"}
                        className={"form-control"}
                        placeholder={"Username"}
                        onChange={(e) => setUsername(e.target.value)}
                        text={"USERNAME"}
                        name={"username"}
                      />
                    </div>
                  </div>

                  <div className="js-form-message form-group">
                    <Input
                      type={"text"}
                      label={"form-label"}
                      className={"form-control"}
                      placeholder={"Phone Number"}
                      onChange={(e) => setPhone(e.target.value)}
                      text={"PHONE NUMBER"}
                      name={"phone"}
                    />
                  </div>

                  <div className="row">
                    <div className="js-form-message form-group col-6">
                      <Input
                        type={"text"}
                        label={"form-label"}
                        className={"form-control"}
                        placeholder={"State"}
                        onChange={(e) => setState(e.target.value)}
                        text={"STATE"}
                        name={"state"}
                      />
                    </div>

                    <div className="js-form-message form-group col-6">
                      <Input
                        type={"text"}
                        label={"form-label"}
                        className={"form-control"}
                        placeholder={"City"}
                        onChange={(e) => setCity(e.target.value)}
                        text={"CITY"}
                        name={"city"}
                      />
                    </div>
                  </div>

                  <div className="js-form-message form-group">
                    <Input
                      type={"text"}
                      label={"form-label"}
                      className={"form-control"}
                      placeholder={"Street"}
                      onChange={(e) => setStreet(e.target.value)}
                      text={"STREET"}
                      name={"street"}
                    />
                  </div>

                  <div className="js-form-message form-group">
                    <Input
                      type={"password"}
                      label={"form-label"}
                      className={"form-control"}
                      placeholder={"Password"}
                      onChange={(e) => setPassword(e.target.value)}
                      text={"PASSWORD"}
                      name={"password"}
                    />
                  </div>

                  <div className="js-form-message form-group">
                    <Input
                      type={"password"}
                      label={"form-label"}
                      className={"form-control"}
                      placeholder={"Confirm Password"}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      text={"CONFIRM PASSWORD"}
                      name={"confirmPassword"}
                    />
                    <div>
                      <ul>
                        {error
                          ? helperTexts.map((text) => (
                              <li style={{ color: "red" }}>{text}</li>
                            ))
                          : ""}
                      </ul>
                    </div>
                  </div>

                  <TermsCheckbox
                    onchange={() => setCheck(!check)}
                    page="signup"
                  />

                  <div className="row align-items-center mb-5">
                    <div className="col-5 col-sm-6">
                      <span className="small text-muted">
                        Already have an account?
                      </span>
                      <Link className="small" to="/">
                        Sign In
                      </Link>
                    </div>

                    <div className="col-7 col-sm-6 text-right">
                      <Button
                        type="submit"
                        className="btn btn-primary transition-3d-hover"
                        onSubmit={onSubmit}
                        disabled={btnDisabled}>
                        Get Started
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default connect(null, {SignupRequest})(withRouter(Signup));
