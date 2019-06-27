import React, { Component } from "react";
import axios from '../config/axios'
import cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { onUploadProduct } from "../actions";


import {onUploadProduct, onUpdateProduct, getProducts, deletProduct} from '../actions/product'
// import {onUploadProduct, onUpdateProduct, getProducts, deletProduct} from '../actions/index'


const cookie = new cookies();

class ManageProduct extends Component {
 
  state = {
    selectedId: 0,
    dataTransOpc:[],
    dataTransProd:[]
  };

  // Fungsi Edit
  onEditProduct = id => {
    this.setState({ selectedId: id });
  };

  onSaveItem = async id => {
      const opcId = id
      console.log(id);

      const formData = new FormData()
      const bukti_trv = this.image.files[0];
      formData.append('bukti_trv', bukti_trv)
      

      var res = await axios.patch(`http://localhost:2020/postBuktiTrf/${opcId}`,formData,{
        
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      })
        // .then(() => {
          console.log(res);
          //this.setState({ dataTransOpc: res.data });
           this.getAllDataTransOpc()
          this.setState({  selectedId: 0 })
          //return this.setState({ dataTransOpc : res.data})
          //this.getAllDataTransOpc();
        // })
  };

  


  

  
  

 
  
  // Ini jalan sekali setelah proses render pertama kali
  componentDidMount() {
    
    
    this.onSetState()
    this.getAllDataTransOpc()
    this.getAllDataTransProd()
  }
  
  

  //GET ALL DATA TRANSAKTION OPC PER USER
  getAllDataTransOpc = async () => {
    
    const userId = cookie.get('idLogin')
    var res = await axios.get(`http://localhost:2020/getAllDataTransUser/opc/${userId}`)
      
        console.log(res.data);
  
       return this.setState({ dataTransOpc: res.data }); 
  }

  //GET ALL DATA TRANSAKTION OPC PER USER
  getAllDataTransProd = async () => {
    const userId = cookie.get('idLogin')
    var res = await axios.get(`http://localhost:2020/getAllDataTransUser/product/${userId}`)
      
        console.log(res.data);
  
       return this.setState({ dataTransProd: res.data }); 
  }

  onSetState = () => {
    this.setState({  selectedId: 0 }); // .data adalah tempat data sebenarnya yg disediakan redux / this.setState adalah function untuk set ulang perubahan ke state kemudian otomatis fn render akan dijalankan lagi
  }

  

// RENDER PERTAMA
  renderListPaid = () => {
    return this.state.dataTransOpc.map(item => {
      //this.getProdImg(item.product_image)
      // item berisi objek { id, name, desc, price, src }
      //if (this.state.dataTransOpc.length !== 0){
        if (item.payment_stat === "paid") {
          // Kondisi saat tekan tombol uploads
          if (item.id !== this.state.selectedId) {
            //kondisi saat normal atau tidak tekan tombol edit
            return (
              <tr key={item.id}>
                <td>{item.opc_id}</td>
                <td>{item.pemesan}</td>
                <td>{item.penerima}</td>
                <td>{item.cart_value}</td>
                <td>{item.kurir}</td>
                <td>{item.shipment}</td>
                <td>{item.bank}</td>
                <td>{item.no_rek}</td>
                <td>{item.grand_tot}</td>
                <td>{item.payment_stat}</td>
                <td>{item.shipment_stat}</td>
                {/* <td>
                </td>  */}
                <td>
                  <button
                    // onClick={() => {
                    //   this.onEditProduct(item.id);
                    // }}
                    className="btn btn-success mr-2"
                  >
                    Paid
                  </button>
                 
                </td>
              </tr>
            );
          } else {
            //kondisi saat tekan tombol edit
            return (
              <tr key={item.id}>
                <td>{item.opc_id}</td>
                <td>{item.pemesan}</td>
                <td>{item.penerima}</td>
                <td>{item.cart_value}</td>
                <td>{item.kurir}</td>
                <td>{item.shipment}</td>
                <td>{item.bank}</td>
                <td>{item.no_rek}</td>
                <td>{item.grand_tot}</td>
                <td>
                {/* <div className="custom-file"> */}
                      <input type="file" id="myfile" multiple="multiple"  ref={input => this.image = input}/>
                {/* </div> */}
                </td>
                {/* <td>
                  
                </td>
                <td>
               
                </td> */}
                <td>
                  <button
                    onClick={() => {
                      this.onSaveItem(item.id);
                    }}
                    className="btn btn-danger mb-2"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      this.setState({ selectedId: 0 });
                    }}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            );
          }
        } 

      // } else {
      //   return(
          
          
      //     <h2>YOUR CARTS HAS BEEN PAID ALL</h2>
      //   )
      // }
     
      
    });
  };


  // Render Status Waiting
  renderListWaiting = () => {
    return this.state.dataTransOpc.map(item => {
      //this.getProdImg(item.product_image)
      // item berisi objek { id, name, desc, price, src }
      if (item.payment_stat === "waiting" || item.payment_stat === "reupload") {
        if (item.id !== this.state.selectedId) {
          //kondisi saat normal atau tidak tekan tombol edit
          return (
            <tr key={item.id}>
              <td>{item.opc_id}</td>
              <td>{item.pemesan}</td>
              <td>{item.penerima}</td>
              <td>{item.cart_value}</td>
              <td>{item.kurir}</td>
              <td>{item.shipment}</td>
              <td>{item.bank}</td>
              <td>{item.no_rek}</td>
              <td>{item.grand_tot}</td>
              <td>{item.payment_stat}</td>
              <td>{item.shipment_stat}</td>
              {/* <td>
              </td>  */}
              <td>
                <button
                  onClick={() => {
                    this.onEditProduct(item.id);
                  }}
                  className="btn btn-primary mr-2"
                >
                 Upload
                </button>
               
              </td>
            </tr>
          );
        } else {
          //kondisi saat tekan tombol edit
          return (
            <tr key={item.id}>
              <td>{item.opc_id}</td>
              <td>{item.pemesan}</td>
              <td>{item.penerima}</td>
              <td>{item.cart_value}</td>
              <td>{item.kurir}</td>
              <td>{item.shipment}</td>
              <td>{item.bank}</td>
              <td>{item.no_rek}</td>
              <td>{item.grand_tot}</td>
              <td>
              {/* <div className="custom-file"> */}
                    <input type="file" id="myfile" multiple="multiple"  ref={input => this.image = input}/>
              {/* </div> */}
              </td>
              {/* <td>
                
              </td>
              <td>
             
              </td> */}
              <td>
                <button
                  onClick={() => {
                    this.onSaveItem(item.id);
                  }}
                  className="btn btn-primary mb-2"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    this.setState({ selectedId: 0 });
                  }}
                  className="btn btn-danger"
                >
                  Cancel
                </button>
              </td>
            </tr>
          );
        }
      } 
      
    });
  };


  renderList2 = () => {
    console.log(this.state.dataTransProd);
    
    return this.state.dataTransProd.map(item => {
      
     // if (item.id !== this.state.selectedId) {
       
        return (
          <tr key={item.id}>
            <td>{item.orders_id}</td>
            <td>{item.username}</td>
            <td>{item.product_artist}</td>
            <td>{item.product_tittle}</td>
          
            <td><img src={`http://localhost:2020/showProdImg/${item.product_image}`} alt={item.product_tittle} className="list"></img></td>
            <td>{item.product_price}</td>
            <td>{item.qty}</td>
            <td>{item.total_price}</td>
            
          
           
          </tr>
        );
     
    });
  };

  // Yang dirender pertama
  render() {
    //var userCookie = cookie.get("masihLogin");
    //console.log(userCookie);

    const id = cookie.get('idLogin')
    //if (cookie.get("masihLogin") !== undefined) {
     
      
    if (id !== undefined) {
      return (
        <div className="container manageproduct">
          <h1 className="display-4 text-center">DATA TRANSSACTION USER</h1>
          <h1 className="display-4 text-center">WAITING FOR PAYMENT</h1>
          <table className="table table-hover mb-5">
            <thead>
              <tr>
                <th scope="col">OPC ID</th>
                <th scope="col">PEMESAN</th>
                <th scope="col">PENERIMA</th>
                <th scope="col">BARANG</th>
                <th scope="col">KURIR</th>
                <th scope="col">ONGKIR</th>
                <th scope="col">BANK</th>
                <th scope="col">NO REK</th>
                <th scope="col">TAGIHAN</th>
                <th scope="col">PAY STAT</th>
                <th scope="col">SHIP STAT</th>
                {/* <th scope="col">TRF</th> */}
                {/* <th scope="col">ACTION</th> */}
              </tr>
            </thead>
            <tbody>{this. renderListWaiting()}</tbody>
          </table>
          <br/>

          <br/>
          <h1 className="display-4 text-center">DATA TRANSSACTION USER</h1>
          <h1 className="display-4 text-center">PAID</h1>
          <table className="table table-hover mb-5">
            <thead>
              <tr>
                <th scope="col">OPC ID</th>
                <th scope="col">PEMESAN</th>
                <th scope="col">PENERIMA</th>
                <th scope="col">BARANG</th>
                <th scope="col">KURIR</th>
                <th scope="col">ONGKIR</th>
                <th scope="col">BANK</th>
                <th scope="col">NO REK</th>
                <th scope="col">TAGIHAN</th>
                <th scope="col">PAY STAT</th>
                <th scope="col">SHIP STAT</th>
                {/* <th scope="col">TRF</th> */}
                {/* <th scope="col">ACTION</th> */}
              </tr>
            </thead>
            <tbody>{this.renderListPaid()}</tbody>
          </table>
          <br/>
        
          <br/>
          <h1 className="display-4 text-center">ALL TRANSSACTION PER USER PER PRODUCT</h1>
          <table className="table table-hover mb-5">
            <thead>
              <tr>
                <th scope="col">OPC ID</th>
                <th scope="col">USERNAME</th>
                <th scope="col">PRODUCT ARTIST</th>
                <th scope="col">PRODUCT TITTLE</th>
                <th scope="col">IMAGE</th>
                <th scope="col">PRODUCT PRICE</th>
                <th scope="col">QTY</th>
                <th scope="col">SUB TOTAL</th>
              </tr>
            </thead>
           
            <tbody>{this.renderList2()}</tbody>
          </table>
           
        </div>
      );
    } else {
     return (<Redirect to="/" />);
      
    }
  }
}


const mapStateToProps = state =>{
  return {
      user: state.auth.users.username , products: state.auth.products
  }
}


export default connect(
  mapStateToProps,
   {onUploadProduct, onUpdateProduct, getProducts, deletProduct} 
)(ManageProduct)