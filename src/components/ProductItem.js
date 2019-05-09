import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  render() {
    // distruct ==> objek item yang dibuat yang di akses dengan memasukan this.props nya ke dalam item
    const { item } = this.props;
    return (
      <div
        className="card col-4 mt-3 "
        style={{ width: "18rem" }}
        key={item.id}
      >
        <img src={item.src} className="card-img-top-center" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.tittle}</h5>

          <p className="card-title">Artist : {item.artist}</p>
          {/* <p className="card-text">{item.desc}</p> */}

          <p className="card-text">Genre : {item.genre}</p>

          <p className="card-text">Price : Rp. {item.price} </p>
          <input className="form-control" type="number" />
          <Link to={"/detailproduct/" + item.id}>
            <button className="btn btn-secondary btn-block btn-sm my-2">
              Detail
            </button>
          </Link>
          <button className="btn btn-primary btn-block btn-sm my-2">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
