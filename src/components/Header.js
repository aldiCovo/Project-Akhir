//import React from "react";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { onLogoutUser } from "../actions";

class Header extends Component {
  render() {
    // console.log(this.props.user);

    const { user } = this.props;
    if (user.username === "") {
      return (
        // header baru
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <Link class="navbar-brand" to="/">
              Navbar
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
                  <Link class="nav-link" to="/">
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
                {/* <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    <i class="fas fa-search" />
                  </button>
                </form> */}
                <li class="nav-item">
                  <Link class="nav-link" to="/">
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

        // Header lama
        // <div>
        //   <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-3 fixed-top ">
        //     <div className="container">
        //       <Link className="navbar-brand" to="/">
        //         <span className="font-weight-bolder font-italic">
        //           <u>CIRCLELINE</u>
        //         </span>
        //         <sub>
        //           <span className="font-italic"> records</span>
        //         </sub>
        //       </Link>
        //       <button
        //         className="navbar-toggler"
        //         data-toggle="collapse"
        //         data-target="#navbarNav2"
        //       >
        //         <span className="navbar-toggler-icon" />
        //       </button>

        //       <div className="collapse navbar-collapse row p-2" id="navbarNav2">
        //         <form className="input-group col-12 col-md-7 ml-auto">
        //           <input
        //             type="text"
        //             className="form-control mr-2"
        //             placeholder="Search"
        //           />

        //           <button className="btn btn-outline-success">
        //             <i class="fas fa-search" />
        //           </button>
        //         </form>
        //         <ul className="navbar-nav ml-auto">
        //           <li className="nav-item mx-auto">
        //             <Link to="/" className="nav-link text-light">
        //               Product
        //             </Link>
        //           </li>
        //           <li className="nav-item mx-auto">
        //             <Link to="/register" className="nav-link text-light">
        //               Register
        //             </Link>
        //           </li>
        //           <li className="nav-item mx-auto">
        //             <Link to="/login" className="nav-link text-light ">
        //               Login
        //             </Link>
        //           </li>
        //         </ul>
        //         {/* <ul className="navbar-nav ml-auto col-12 col-md-5">
        //           <li className="nav-item mt-2">
        //             <Link className="nav-a" to="/">
        //               All Product
        //             </Link>
        //           </li>
        //           <li className="nav-item m-1">
        //             <Link className="nav-a" to="/register">
        //               <button className="btn btn-primary">Register</button>

        //             </Link>
        //           </li>
        //           <li className="nav-item m-1">
        //             <Link className="nav-a" to="/login">
        //               <button className="btn btn-success">Login</button>
        //             </Link>
        //           </li>
        //         </ul> */}
        //       </div>
        //     </div>
        //   </nav>
        // </div>
      );
    } else {
      return (
        // Header baru
        <div>
          <Redirect to="/" />
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="#">
              Navbar
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
                  <Link class="nav-link" to="#">
                    {/* --Home-- */}
                    <i class="fas fa-home" />{" "}
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
                {/* <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  <i class="fas fa-search" />
                </button>
              </form> */}
                <li class="nav-item">
                  <Link class="nav-link" to="">
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
                    Hallo {user.username}
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

        //Header Lama
        // <div>
        //   <Redirect to="/" />
        //   <nav className="navbar navbar-expand-md navbar-light bg-dark mb-3 fixed-top">
        //     <div className="container">
        //       <Link className="navbar-brand" to="/">
        //         <span className="font-weight-bolder font-italic">
        //           <u>CIRCLELINE</u>
        //         </span>
        //         <sub>
        //           <span className="font-italic"> records</span>
        //         </sub>
        //       </Link>
        //       <button
        //         className="navbar-toggler"
        //         data-toggle="collapse"
        //         data-target="#navbarNav2"
        //       >
        //         <span className="navbar-toggler-icon" />
        //       </button>

        //       <div className="collapse navbar-collapse row p-2" id="navbarNav2">
        //         <form className="input-group col-12 col-md-7 ml-auto">
        //           <input
        //             type="text"
        //             className="form-control mr-2"
        //             placeholder="Search"
        //           />
        //           <button className="btn btn-outline-success">
        //             <i class="fas fa-search" />
        //           </button>
        //         </form>
        //         <ul className="navbar-nav ml-auto col-12 col-md-5">
        //           <li className="nav-item mt-2">
        //             <Link className="nav-link text-light" to="/">
        //               Product
        //             </Link>
        //           </li>
        //           <li className="nav-item mt-2">
        //             <Link className="nav-link text-light" to="/">
        //               Cart
        //             </Link>
        //           </li>
        //           <li className="nav-item dropdown mt-2">
        //             <Link
        //               to="/asd"
        //               className="nav-link dropdown-toggle text-light"
        //               data-toggle="dropdown"
        //             >
        //               Hallo {user.username}
        //             </Link>
        //             <div className="dropdown-menu">
        //               <Link to="/manageproduct" className="dropdown-item">
        //                 Manage Product
        //               </Link>
        //               <Link to="/" className="dropdown-item">
        //                 Link 2
        //               </Link>
        //               <button
        //                 onClick={this.props.onLogoutUser}
        //                 className="dropdown-item"
        //               >
        //                 Logout
        //               </button>
        //             </div>
        //           </li>
        //           {/* <li className="nav-item m-1">
        //                             <Link className="nav-link" to="/register"><button className="btn btn-primary">Register</button></Link>
        //                         </li>
        //                         <li className="nav-item m-1">
        //                             <Link className="nav-link" to="/login"><button className="btn btn-success">Login</button></Link>
        //                         </li> */}
        //         </ul>
        //       </div>
        //     </div>
        //   </nav>
        // </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { user: state.auth };
};
export default connect(
  mapStateToProps,
  { onLogoutUser }
)(Header);
