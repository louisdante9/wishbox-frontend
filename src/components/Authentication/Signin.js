import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validateFormInput } from "../../validator";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import swal from "sweetalert";
import { SigninRequest } from "../../actions";
import Button from "../Commons/Botton";
import Input from "../Commons/Input";
import Header from "../Commons/Header";
import { TermsCheckbox } from "../Commons/TermsCheckbox";

function Signin(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);


  useEffect(() => {
    if (email.trim() && password.trim()) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
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
    const { errors } = validateFormInput({ email, password });
    if (errors.invalidEmail) {
      let errorMessage = { icon: "warning" };
      errors.invalidEmail
        ? (errorMessage.title = errors.invalidEmail)
        : (errorMessage.title = "Oops!, You seem to have missed some fields");
      swal(errorMessage);
    }

    let obj = { email, password };
    props.SigninRequest(obj).then(({role}) => {
        if (role === "admin" || role === "superadmin") {
          props.history.push("/admin/dashboard");
        }
        props.history.push("/dashboard");
      })
      .catch((err) => {
        swal({
          title: "Oops!, sorry username or password is wrong",
          icon: "warning",
        });
        return err
      });
  };
  return (
    <>
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
                    <p>Sign in to make a wish.</p>
                  </div>

                  <div className="js-form-message form-group">
                    <Input
                      type={"email"}
                      label={"form-label"}
                      className={"form-control"}
                      placeholder={"Email address"}
                      onChange={(e) => setEmail(e.target.value)}
                      text={"EMAIL ADDRESS"}
                      name={"email"}
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

                  <TermsCheckbox />
                 

                  <div className="row align-items-center mb-5">
                    <div className="col-5 col-sm-6">
                      <span className="small text-muted">
                        Don't have an account?
                      </span>
                      <Link className="small" to="/signup">
                        Sign up
                      </Link>
                    </div>

                    <div className="col-7 col-sm-6 text-right">
                      <Button
                        type="submit"
                        className="btn btn-primary transition-3d-hover"
                        onSubmit={onSubmit}
                        disabled={btnDisabled}
                        text={"Get Started"}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default connect(null, { SigninRequest })(withRouter(Signin));
