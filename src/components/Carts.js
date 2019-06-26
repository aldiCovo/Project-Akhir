import axios from "axios";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import cookies from "universal-cookie";
import CheckOut from "./CheckOut";
import { connect } from "react-redux";

import {deleteCart} from '../actions/cart'
//import { editUserAddress, addAddress, getUserAddress} from '../actions/address'
import { getUser} from '../actions/user'


const cookie = new cookies();

class Carts extends Component {

  state = {
    keranjang: [],
    flag: false,
    //flag: true
    addressCart: []
  }

 // Ini jalan sekali setelah proses render pertama kali
 componentDidMount = async () => {
  await this.getCart();
  console.log('did mount')
  this.props.getUser()
 }

 test = () => {
   this.setState({keranjang: []})
 }
 
 getCart = async() => {

    
  const id = cookie.get("idLogin");
  console.log(id);
  
  var res = await axios.get(`http://localhost:2020/getCart/${id}`)
    
      console.log(res.data);

     return this.setState({ keranjang: res.data }); // .data adalah tempat data sebenarnya yg disediakan redux / this.setState adalah function untuk set ulang perubahan ke state kemudian otomatis fn render akan dijalankan lagi
    
  

};


getAddres = async () => {
  const userId = cookie.get("idLogin");
  console.log(userId);
  
  var res = await axios.get(`http://localhost:2020/getuserAddress/${userId}`)
    
      console.log(res.data);

     return this.setState({ addressCart: res.data }); 
}


// Fungsi Delet
onDeleteCart = async id => {
 await this.props.deleteCart(id)
 this.getCart()
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
        <td>{item.product_stock}</td>
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
              this.onDeleteCart(item.id);
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
    console.log(this.state.keranjang);
    
  this.setState({
    flag: !this.state.flag
  });
  this.getAddres()
};


  // Yang dirender pertama
  render() {

    const id = cookie.get("idLogin");
    console.log(this.state.keranjang);
    
    console.log(id);
    console.log(this.state.keranjang.length);

    if (id) {
      if (this.state.keranjang.length !== 0) { 

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
          
              
           
              <div className="container">
            <h1 className="display-4 text-center">Cart List</h1>
            <table className="table table-hover mb-5">
              <thead>
                <tr>
                  <th scope="col">CART ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">TITTLE</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">PICTURE</th>
                  <th scope="col">STOCK</th>
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
            {this.state.flag ? <CheckOut test={this.test} carts={this.state.keranjang} alamat={this.state.addressCart} /> : null}
          </div>
       
          
            
          </div>
      </div>
    
         
  </div>
            
    
) 
 } else{
    // return null
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
       
       <div className="container text-center">
         <h5 className="display-2 text-primary">
           <p className="text-success">Your Cart Is Empty</p>
           <p>Please Shooping</p>
           <p className="lead">
               Don't have mony ? <Link to="/allproduct">Shpe here!</Link>
             </p>
         </h5>
       </div>
        
          
    
       
         
       </div>
   </div>
 
      
</div>
        )


}
    } else {
           // return <Redirect to='/'/>
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
          
          <div className="container text-center">
            <h1 className="display-2 text-primary">
              <p className="text-success">You are not Login</p>
              <p>Please Login</p>
              <p className="lead">
                  Don't have account ? <Link to="/register">Sign Up!</Link>
                </p>
            </h1>
          </div>
          </div>
      </div>   
  </div>
           )
    }
  }
}




//export default Carts;
export default connect(
  null,
  {deleteCart, getUser}
)(Carts);

