import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { onRegisterClick } from "../actions";
//import { onSetTimeOut } from "../actions";

class Register extends Component {
  onErrorRegister = () => {
    if (this.props.error !== "") {
      //setTimeout(this.props.onSetTimeOut, 3000);
      return (
        <div className="alert alert-danger danger mt-2">{this.props.error}</div>
      );
    } else if (this.props.success !== "") {
      //setTimeout(this.props.onSetTimeOut, 3000);
      return (
        <div className="alert alert-primary primary mt-2">
          {this.props.success}
          {this.onSuccesRegisterToLogin()}
        </div>
      );
    }
  };
  // fungsi untuk melempar halaman registrasi jika berhasil ke halaman login
  onSuccesRegisterToLogin = () => {
    return <Redirect to="/login" />;
  };

  onSubmitClick = () => {
    const user = this.username.value;
    const email = this.email.value;
    const pass = this.password.value;
    //const confpass = this.confirmpassword.value;
    // console.log("Username : " + user);
    // console.log("Password : " + pass);
    this.props.onRegisterClick(user, email, pass /*, confpass*/);
  };
  render() {
    return (
      <div className="woyo">
        <div class="col-lg-4 offset-4 mt-5">
          <div class="card bg-light text-center card-form">
            <div class="card-body">
              <h3>Sign Up Today</h3>
              <p>Please fill out this form to register</p>

              <div className="form-group">
                <form className="input-group">
                  <input
                    ref={input => {
                      this.username = input;
                    }}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                </form>
              </div>

              <div className="form-group">
                <form className="input-group">
                  <input
                    ref={input => {
                      this.email = input;
                    }}
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </form>
              </div>
              <div className="form-group">
                <form className="input-group">
                  <input
                    ref={input => {
                      this.password = input;
                    }}
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Pasword"
                  />
                </form>
              </div>
              {/* <div className="form-group">
                <form className="input-group">
                  <input
                    ref={input => {
                      this.confirmpassword = input;
                    }}
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confrim Password"
                  />
                </form>
              </div> */}

              <button
                className="btn btn-primary btn-block"
                onClick={this.onSubmitClick}
              >
                Register
              </button>
              {this.onErrorRegister()}
              <p className="lead">
                Do You Have Account Bro? <Link to="/login">Sign Up!</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    success: state.auth.success
  };
};

export default connect(
  mapStateToProps,
  { onRegisterClick /*, onSetTimeOut*/ }
)(Register);
