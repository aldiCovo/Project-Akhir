//import React from "react";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import cookies from "universal-cookie";

//import { onLogoutUser } from "../actions";
import { onLogoutUser } from "../actions/auth";
import { getUser } from "../actions/user";

const cookie = new cookies();

class Header extends Component {

  componentDidMount(){
    this.props.getUser()
    
  }

  render() {
    console.log(this.props.user);
    
    //const last = cookie.get('last_nameLogin')
    const id = cookie.get('idLogin')
    //const username = cookie.get('usernameLogin')
    if(this.props.newUser.length !==0) {
      var {username} = this.props.newUser[0]
    } else {
      var {username} = this.props.user
    }
    
    //if (cookie.get("masihLogin") !== undefined) {
    if (!id) {
      return (
        <div>
          <nav class="navbar navbar-expand-lg  fixed-top text-light">
            <Link class="navbar-brand" to="/">
              <h5 class="display-5">
                <span className="font-weight-bolder font-italic ">
                  <u>CIRCLELINE</u>
                </span>
                <sub>
                  <span className="font-italic "> records</span>
                </sub>
              </h5>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    {/* --Home-- */}
                    <i class="fas fa-home" />
                    <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/allproduct">
                    All Product
                  </Link>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                <nav class="navbar navbar-light bg-light">
                  <form class="form-inline">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        {/* search */}
                        <span class="input-group-text" id="basic-addon1">
                          <i class="fas fa-search" />
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </nav>

                <li class="nav-item">
                  <Link class="nav-link" to="/carts">
                    <i class="fas fa-shopping-cart" />{" "}
                    <span class="badge badge-danger">4</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">
                    Register
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <Redirect to="/" />
          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light"> */}
          <nav class="navbar navbar-expand-lg  fixed-top text-light">
            <Link class="navbar-brand" to="/">
              <h5 class="display-5">
                <span className="font-weight-bolder font-italic ">
                  <u>CIRCLELINE</u>
                </span>
                <sub>
                  <span className="font-italic "> records</span>
                </sub>
              </h5>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    {/* --Home-- */}
                    <i class="fas fa-home" />
                    <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/allproduct">
                    All Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/manageprofile">
                    Manage Profile
                  </Link>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ">
                <nav class="navbar navbar-light bg-light">
                  <form class="form-inline">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        {/* search */}
                        <span class="input-group-text" id="basic-addon1">
                          <i class="fas fa-search" />
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </nav>
                {/* --Cart-- */}
                <li class="nav-item">
                  <Link class="nav-link" to="/carts">
                    <i class="fas fa-shopping-cart" />{" "}
                    <span class="badge badge-danger">4</span>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="/asd"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hallo {username} 
                  </Link>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/manageproduct">
                      Manage Product
                    </Link>
                    <Link class="dropdown-item" to="/">
                      Another action
                    </Link>
                    <div class="dropdown-divider" />
                    <button
                      class="dropdown-item"
                      onClick={this.props.onLogoutUser}
                    >
                      Logout
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { user: state.auth, newUser: state.auth.users };
};
export default connect(
  mapStateToProps,
  { getUser,onLogoutUser }
)(Header);
