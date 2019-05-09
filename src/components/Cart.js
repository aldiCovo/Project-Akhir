import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//import { onLogoutUser } from "../action";
//import { onLoginClick } from "../action";

//import "../css/cart.css";
//import closeIcon from "./icons/cross.png";
//import Footer from "./Footer";

class Cart extends Component {
  render() {
    const { user } = this.props;

    if (user.username === "") {
      return (
        <div>
          <div className="container cart">
            <div className="row">
              {/* Cart List */}
              <div className="col-6">
                <div className="cartTitle p-2 text-center">Shopping Bag</div>
                <div className="cartBodyTitle border-bottom border-dark mt-3 row">
                  <div className="col-3 my-2" />
                  <div className="col-5 my-2">Item</div>
                  <div className="col-3 my-2 text-left">Price</div>
                  <div className="col-1 my-2 text-left">Remove</div>
                </div>
                <div className="cartBody border-bottom border-dark mt-3 row">
                  <div className="col-3">
                    <img
                      src="https://instagram.fcgk12-1.fna.fbcdn.net/vp/04396045afcc8817462ccd9b5a1d1101/5D2E79BE/t51.2885-15/e35/53845889_288226355408996_5928603537322301668_n.jpg?_nc_ht=instagram.fcgk12-1.fna.fbcdn.net"
                      alt="img"
                      className="m-1"
                    />
                  </div>
                  <div className="col-5 my-1">
                    <div>Artist : RIHANNA</div>
                    <div>Tittle : GOOD GIRL GONE BAD</div>
                    <div>Genre : Pop</div>
                    <div>320212302019</div>
                    <div className="mt-5">
                      <a href="#">Move to Wishlist</a>
                    </div>
                  </div>
                  <div className="col-3 my-1 text-left">Rp 425000</div>
                  {/* <div className="col-1 my-1 closeIcon">
                    <a href="#">
                      <img className="ml-4" src={closeIcon} alt="close" />
                    </a>
                  </div> */}
                </div>
              </div>
              {/* Checkout */}
              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <div className="cartTitle p-2 text-center">
                      logged in as Aldi Lukito
                    </div>
                    <div className="borderCheckoutLogin mt-4 border-dark">
                      <div className="pb-2">{user.email}</div>
                      {/* Total and Grandtotal */}
                      <div className="cartBodyTitle mt-3 row">
                        <div className="col-5 my-2">
                          <div>total</div>
                          <div>shipping estimation</div>
                          <div>duties and taxes</div>
                          <div className="mt-4 orderTotal">order total</div>
                        </div>
                        <div className="col-5 mr-auto text-right">
                          <div>Rp 350000</div>
                          <div>Rp 20000</div>
                          <div>Incl.</div>
                          <div>---</div>

                          <div className="mt-4 orderTotal">Rp 350000</div>
                        </div>
                      </div>

                      <div className="mt-4 px-5 mx-5 mb-4 text-center">
                        <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark">
                          checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">{/* <Footer /> */}</div>
        </div>
      );
    }
    return (
      <div>
        <div className="container cart">
          <div className="row">
            {/* Cart List */}
            <div className="col-6">
              <div className="cartTitle p-2 text-center">Shopping Bag</div>
              <div className="cartBodyTitle border-bottom border-dark mt-3 row">
                <div className="col-4 my-2" />
                <div className="col-4 my-2">Item</div>
                <div className="col-3 my-2 text-left">Price</div>
                <div className="col-1 my-2 text-left">Remove</div>
              </div>
              <div className="cartBody border-bottom border-dark mt-3 row">
                <div className="col-4">
                  <img
                    src="https://instagram.fcgk12-1.fna.fbcdn.net/vp/04396045afcc8817462ccd9b5a1d1101/5D2E79BE/t51.2885-15/e35/53845889_288226355408996_5928603537322301668_n.jpg?_nc_ht=instagram.fcgk12-1.fna.fbcdn.net"
                    alt="img"
                    className="m-1"
                  />
                </div>
                <div className="col-4 my-1">
                  <div>Artist : RIHANNA</div>
                  <div>Tittle : GOOD GIRL GONE BAD</div>
                  <div>Genre : Pop</div>
                  <div>320212302019</div>
                  <div className="mt-3">
                    <a href="#">Move to Wishlist</a>
                  </div>
                </div>
                <div className="col-3 my-1 text-left">Rp 425000</div>
                {/* <div className="col-1 my-1 closeIcon">
                <a href="#">
                  <img className="ml-4" src={closeIcon} alt="close" />
                </a>
              </div> */}
              </div>
            </div>
            {/* Checkout */}
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <div className="cartTitle p-2 text-center">
                    logged in as Aldi Lukito
                  </div>
                  <div className="borderCheckoutLogin mt-4 border-dark">
                    <div className="checkoutLogin2 text-center mt-2 pt-2 px-5 mx-5">
                      <div className="pb-2">{user.email}</div>
                      {/* Total and Grandtotal */}
                      <div className="cartBodyTitle mt-3 row">
                        <div className="col-3 my-2" />
                        <div className="col-5 my-2">
                          <div>total</div>
                          <div>shipping estimation</div>
                          <div>duties and taxes</div>
                          <div className="mt-4 orderTotal">order total</div>
                        </div>
                        <div className="col-2 my-2 text-right">
                          <div>Rp 350000</div>
                          <div>Rp 20000</div>
                          <div>Incl.</div>
                          <div className="mt-4 orderTotal">Rp 350000</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 px-5 mx-5 mb-4 text-center">
                      <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark">
                        checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">{/* <Footer /> */}</div>
      </div>
    );
  }
}

const mps = state => {
  return { user: state.auth };
};

// export default connect(
//   mps,
//   { onLogoutUser, onLoginClick }
// )(Cart);
export default connect(
  mps,
  null
)(Cart);
