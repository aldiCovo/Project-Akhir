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
      const payment_stat = this.edit_pay_stat.value;
      console.log(payment_stat);
      const shipment_stat = this.edit_ship_stat.value;
      console.log(shipment_stat);
      

      var res = await axios.patch(`http://localhost:2020/updateStatDataTrans/opc/${opcId}`,{
        
        payment_stat ,
        shipment_stat 

      })
        // .then(() => {
          console.log(res.data);
          this.setState({ dataTransOpc: res.data });
          this.setState({  selectedId: 0 })
          //return this.setState({ dataTransOpc : res.data})
          //this.getAllDataTransOpc();
        // })
  };


  // PAID STAT
  onPaidStat = async id => {
      const opcId = id
      console.log(id);
      const payment_stat = "paid"
     

      var res = await axios.patch(`http://localhost:2020/updateStatDataTrans/opc/${opcId}`,{
        
        payment_stat ,
       

      })
        
          console.log(res.data);
          this.setState({ dataTransOpc: res.data });
         
  };


  // REUPLOAD STAT
  onReuploadStat = async id => {
      const opcId = id
      console.log(id);
      const payment_stat = "reupload"
     

      var res = await axios.patch(`http://localhost:2020/updateStatDataTrans/opc/${opcId}`,{
        
        payment_stat ,
       

      })
        
          console.log(res.data);
          this.setState({ dataTransOpc: res.data });
         
  };

  


  

  
 

 
  
  // Ini jalan sekali setelah proses render pertama kali
  componentDidMount() {
    
    
    this.onSetState()
    this.getAllDataTransOpc()
    this.getAllDataTransProd()
  }
  
  

  //GET ALL DATA TRANSAKTION OPC
  getAllDataTransOpc = async () => {
    
    var res = await axios.get(`http://localhost:2020/getAllDataTrans/opc`)
      
        console.log(res.data);
  
       return this.setState({ dataTransOpc: res.data }); 
  }

  //GET ALL DATA TRANSAKTION OPC
  getAllDataTransProd = async () => {
    
    var res = await axios.get(`http://localhost:2020/getAllDataTrans/product`)
      
        console.log(res.data);
  
       return this.setState({ dataTransProd: res.data }); 
  }

  onSetState = () => {
    this.setState({  selectedId: 0 }); // .data adalah tempat data sebenarnya yg disediakan redux / this.setState adalah function untuk set ulang perubahan ke state kemudian otomatis fn render akan dijalankan lagi
  }

  

// RENDER PERTAMA
  renderList = () => {
    return this.state.dataTransOpc.map(item => {
      //this.getProdImg(item.product_image)
      // item berisi objek { id, name, desc, price, src }
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
            <td><a href={`http://localhost:2020/showBuktiTrf/${item.bukti_trv}`}>
            <img src={`http://localhost:2020/showBuktiTrf/${item.bukti_trv}`} alt="belum trf" className="list"></img></a>
            </td>
            {/* <td><img src={`http://localhost:2020/showBuktiTrf/${item.bukti_trv}`} alt={item.product_tittle} className="list"></img></td> */}
            <td>
              <div className="d-block">
              <button
                onClick={() => {
                  //this.onEditProduct(item.id);
                  this.onReuploadStat(item.id)
                }}
                className="btn btn-danger mr-2"
              >
                reject
              </button>
              <button
                onClick={() => {
                  //this.onEditProduct(item.id);
                  this.onPaidStat(item.id)
                }}
                className="btn btn-success mr-2"
              >
               paid
              </button>
              {/* <button
                onClick={() => {
                  this.onEditProduct(item.id);
                }}
                className="btn btn-primary mr-2"
              >
                Edit
              </button> */}
              </div>
             
             
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
              <input
                className="form-control"
                ref={input => {
                  this.edit_pay_stat = input;
                }}
                type="text"
                defaultValue={item.payment_stat}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.edit_ship_stat = input;
                }}
                type="text"
                defaultValue={item.shipment_stat}
              />
            </td>
            <td>
            <img src={`http://localhost:2020/showBuktiTrf/${item.bukti_trv}`} alt={item.product_tittle} className="list"></img>
            </td>
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
          
            <td><img src={`http://localhost:2020/showBuktiTrf/${item.product_image}`} alt={item.product_tittle} className="list"></img></td>
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
     // if(this.props.user !==""){
    if (id !== undefined) {
      return (
        <div className="container manageproduct">
          <h1 className="display-4 text-center">DATA TRANSSACTION JOURNAL</h1>
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
                <th scope="col">TRF</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
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