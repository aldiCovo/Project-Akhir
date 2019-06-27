import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import cookies from "universal-cookie";

const cookie = new cookies();

class ProductItem extends Component {

  state = {
    cek: false
  };

  
  onEditProduct = id => {
    this.props.onUpdateProduct(id)
  };

   //Fungsi Add Prodact to Cart
  onAddToCart = prodId => {
    const userId = cookie.get('idLogin')
    //console.log(this.props.username);
    console.log(userId);

    const jml = parseInt(this.jumlah.value);
    // const prdId = res1.data[0].id
    // const qtyNew =  parseInt(res.data[0].qty) + parseInt(this.jumlah.value); 
    // const ssSt1 =  parseInt(res1.data[0].product_stock) -  qtyNew
    // const ssSt2 = parseInt(res1.data[0].product_stock) -  jml
    //const username = this.props.state.username;
    if (userId) {
    // if (this.props.username !== "") {
      axios
        .get(`http://localhost:2020/getProduct/${prodId}`)
        .then(res1 => {
          console.log(res1.data);
          
          axios
            .get(`http://localhost:2020/getCart/user/${userId}/prod/${prodId}`)
            .then(res => {
              console.log(res.data);
              if (res.data.length !== 0) {
                const qtyNew =
                  parseInt(res.data[0].qty) + parseInt(this.jumlah.value);
               
                //axios.patch(`http://localhost:2020/carts/${userId}`, {
                //axios.patch(`http://localhost:2020/carts/${res.data[0].id}`, {
                axios.patch(`http://localhost:2020/updateCart/cartId/${prodId}`, {
                  // productId: res.data[0].productId,
                  product_id: res1.data[0].id,
                 
                  user_id: userId,
                  qty: qtyNew,
                  sisa_stock: parseInt(res1.data[0].product_stock) -  qtyNew
                  
                }).then(res=>{
                  axios.patch(`http://localhost:2020/updateProd/${prodId}/product_image`,{
                    product_stock : parseInt(res1.data[0].product_stock) -  qtyNew
                  })

                })
              } else {
                // else if (res.data.length > 0 && this.props.username !== "") {
                axios
                  .post(" http://localhost:2020/addCart", {
                    // productId: res.data[0].productId,
                    product_id: res1.data[0].id,
                    //user_id: res1.data[0].user_id,
                    user_id: userId,
                    qty: jml,
                    sisa_stock: parseInt(res1.data[0].product_stock) -  jml
                  })

                  .then(res => {
                    console.log(res.data);
                  }).then(res=>{
                    axios.patch(`http://localhost:2020/updateProd/${res1.data[0].id}/product_image`,{
                      product_stock : parseInt(res1.data[0].product_stock) -  jml
                    })
  
                  })

                // } else {
              }
            });
        });
    } else {
      this.setState({ cek: !this.state.cek });
    }
  };

  render() {
    // distruct ==> objek item yang dibuat yang di akses dengan memasukan this.props nya ke dalam item
    const id = cookie.get('idLogin')
    const { item } = this.props;
    if(id){

      return (
        <div
          className="card col-3 m-1"
          style={{ width: "18rem" }}
          key={item.id}
        >
          <img src={`http://localhost:2020/showProdImg/${item.product_image}`} className="card-img-top-center" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.product_tittle}</h5>
  
            <p className="card-title">Artist : {item.product_artist}</p>
            {/* <p className="card-text">{item.desc}</p> */}
  
            <p className="card-text">Genre : {item.product_genre}</p>
  
            <p className="card-text">Stock : {item.product_stock}</p>
  
            <p className="card-text">Price : Rp. {item.product_price} </p>
            <input 
              min={0}
             ref={input => (this.jumlah = input)}
            className="form-control" type="number" />
            <Link to={"/detailproduct/" + item.id}>
              <button className="btn btn-secondary btn-block btn-sm my-2">
                Detail
              </button>
            </Link>
            <button 
             onClick={() => {
              this.onAddToCart(item.id);
            }}
            className="btn btn-primary btn-block btn-sm my-2">
              Add to Cart
            </button>
          </div>
        </div>
      );
    } else {

      return (
        <div
          className="card col-3 m-1"
          style={{ width: "18rem" }}
          key={item.id}
        >
          <img src={`http://localhost:2020/showProdImg/${item.product_image}`} className="card-img-top-center" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.product_tittle}</h5>
  
            <p className="card-title">Artist : {item.product_artist}</p>
            {/* <p className="card-text">{item.desc}</p> */}
  
            <p className="card-text">Genre : {item.product_genre}</p>
  
            <p className="card-text">Stock : {item.product_stock}</p>
  
            <p className="card-text">Price : Rp. {item.product_price} </p>
            <input 
             ref={input => (this.jumlah = input)}
            className="form-control" type="number" />
            <Link to={"/detailproduct/" + item.id}>
              <button className="btn btn-secondary btn-block btn-sm my-2">
                Detail
              </button>
            </Link>
            <Link to="/login">
            <button 
            //  onClick={() => {
            //   this.onAddToCart(item.id);
            // }}
            className="btn btn-primary btn-block btn-sm my-2">
              Add to Cart
            </button>
            </Link>
          </div>
        </div>
      );

    }
  }
}

export default ProductItem;
