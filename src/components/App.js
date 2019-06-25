import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import cookies from "universal-cookie";

import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { keepLogin } from "../actions/auth";
import { connect } from "react-redux";
import ManageProduct from "./ManageProduct";
import Kebijakan from "./Kebijakan";
import Pop from "./Pop";
import Rock from "./Rock";
import Jazz from "./Jazz";
import Country from "./Country";
import Carts from "./Carts";
import AllProduct from "./AllProduct";
//import Cart from "./Cart";
import CheckOut from "./CheckOut";
import ManageProfile from "./MangeProfile";
import AddAddress from "./AddAddress";
import DataTransaksiAdmin from "./DataTransaksiAdmin";
import DataTransaksiUser from "./DataTransaksiUser";
import DetailProduct from "./DetailProduct";
// import PaymentNotif from "./PaymentNotif";

const cookie = new cookies();

class App extends React.Component {
  // Fungtion Manage Product for user who login
  // onUserLogin = () => {
  //   if (this.props.user !== "") {
  //     return <Route path="/manageproduct" component={ManageProduct} />;
  //   }
  // else{

  // }
  // };

  // life cycle hook / method
  componentDidMount() {
    // akan dijalankan sekali ketika component di render

    // mengambil value yang disimpan pada file cookie masihLogin
    var userIdCookie = cookie.get("idLogin");
    var userNameCookie = cookie.get("usernameLogin");
    var firstNameCookie = cookie.get("first_nameLogin");
    var lastNameCookie = cookie.get("last_nameLogin");
    var emailCookie = cookie.get("emailLogin");
    if (userIdCookie && userNameCookie && firstNameCookie && lastNameCookie && emailCookie) {
      console.log("cookie ada");
      // function keepLogin akan me-loginkan ulang username yg tersimpan pada file cookie
      this.props.keepLogin(userIdCookie, userNameCookie, firstNameCookie, lastNameCookie, emailCookie);
    }
    // var userCookie = cookie.get("masihLogin");
    // if (userCookie !== undefined) {
    //   console.log("cookie ada");
    //   // function keepLogin akan me-loginkan ulang username yg tersimpan pada file cookie
    //   this.props.keepLogin(userCookie);
    // }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* {this.onUserLogin()} */}
          <Route path="/manageproduct" component={ManageProduct} />
          {/* <Route path="/allproduct" component={ManageProduct} /> */}
          <Route path="/kebijakan" component={Kebijakan} />
          <Route path="/pop" component={Pop} />
          <Route path="/rock" component={Rock} />
          <Route path="/jazz" component={Jazz} />
          <Route path="/country" component={Country} />
          <Route path="/carts" component={Carts} />
          <Route path="/allproduct" component={AllProduct} />
          {/* <Route path="/cart" component={Cart} /> */}
          <Route path="/checkout" component={CheckOut} />
          <Route path="/manageprofile" component={ManageProfile} />
          <Route path="/addaddress" component={AddAddress} />
          <Route path="/datatransaksiadmin" component={DataTransaksiAdmin} />
          <Route path="/datatransaksiuser" component={DataTransaksiUser} />
          <Route path="/detailproduct/:asdfg" component={DetailProduct} />
          {/* <Route path="/paymentnotif" component={PaymentNotif} /> */}
          {/* <Route path="/detailproduct/:asdfg" component={DetailProduct} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.auth.username };
};

// const mapStateToProps = state => {
//   return { user: state.auth.users.username };
// };

export default connect(
  mapStateToProps,
  { keepLogin }
)(App);
