import React, { Component } from "react";
import Etalase from "./Etalase";

class AllProduct extends Component {
  render() {
    return (
      <div>
        <h1>All Product</h1>
        <div className="container">
          <Etalase />
        </div>
      </div>
    );
  }
}

export default AllProduct;
