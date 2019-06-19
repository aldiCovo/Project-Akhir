import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Pop extends Component {
  render() {
    return (
      // <div>
      //   <div className="pop">
      //     <h1>Pop</h1>
      //   </div>
      // </div>
      <div>
      <div className="container-fluid row pop">
          <div className="col-3">
              <ul className="list-group">
                  <li className="list-group-item sidebarAccount">
                  <Link to={'/manageaccount/info'}><div>Account Info</div></Link>
                  </li>
                  <li className="list-group-item sidebarAccount">
                  <Link to={'/manageaccount/address'}><div>Address</div></Link>
                  </li>
                  <li className="list-group-item sidebarAccount">
                  <Link to={'/manageaccount/wishlist'}><div>Wishlist</div></Link>
                  </li>
              </ul>
          </div>
          <div className="col-7">
              <div>
                  {/* {this.checkInfo()} */}
                  Tes
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Pop;
