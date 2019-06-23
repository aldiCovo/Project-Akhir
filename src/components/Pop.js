import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import cookies from "universal-cookie";
import CheckOut from "./CheckOut";

const cookie = new cookies();

class Pop extends Component {

  state = {
    keranjang: [],
    flag: false,
    //flag: true
  }

 // Ini jalan sekali setelah proses render pertama kali
 componentDidMount = async () => {
  await this.getCart();
 }
 
 getCart = async() => {

    
  const id = cookie.get("idLogin");
  console.log(id);
  
  var res = await axios.get(`http://localhost:2020/getCart/${id}`)
    
      console.log(res.data);

     return this.setState({ keranjang: res.data }); // .data adalah tempat data sebenarnya yg disediakan redux / this.setState adalah function untuk set ulang perubahan ke state kemudian otomatis fn render akan dijalankan lagi
    
  

};


// Fungsi Delet
onDeleteProduct = id => {
  axios.delete(`http://localhost:1996/carts/${id}`).then(res => {
    this.getCart();
  });
};


renderList = () => {
  return this.state.keranjang.map(item => {
    // item berisi objek { id, name, desc, price, src }

    return (
      <tr key={item.id}>
        {/* <td>{item.productId}</td> */}
        <td>{item.id}</td>
        <td>{item.first_name}</td>
        <td>{item.product_tittle}</td>
        <td>Rp {item.product_price.toLocaleString()}</td>
        <td>
          <img className="list" src={`http://localhost:2020/showProdImg/${item.product_image}`} alt={item.desc} />
        </td>
        <td>{item.qty}</td>
        <td>
          {/* <button
              onClick={() => {
                this.onEditProduct(item.id);
              }}
              className="btn btn-primary mr-2"
              >
              Edit
            </button> */}
          <button
            onClick={() => {
              this.onDeleteProduct(item.id);
            }}
            className="btn btn-danger"
            >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};

onCheckOut = () => {
  this.setState({
    flag: !this.state.flag
  });
};

  render() {

    const id = cookie.get("idLogin");
    console.log(this.state.keranjang);
    
    console.log(id);
    console.log(this.state.keranjang.length);


    return (
      
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
              <div className="container">
            <h1 className="display-4 text-center">Cart List</h1>
            <table className="table table-hover mb-5">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">DESC</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">PICTURE</th>
                  <th scope="col">QTY</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>{this.renderList()}</tbody>
            </table>

            <button
              className="btn btn-primary btn-sm m-center"
              onClick={() => {
                this.onCheckOut();
              }}
            >
              Chekout
            </button>
             {/* sebelum ? itu kondisi, jika kondisi terpenuhi maka jalankan sebelum : jika tidak terpenuhi jalankan setelah tanda tanya  */}
            {this.state.flag ? <CheckOut carts={this.state.keranjang} /> : null}
          </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default Pop;
