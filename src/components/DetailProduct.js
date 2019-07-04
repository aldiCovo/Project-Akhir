import React, { Component } from "react";
import axios from "axios";

class DetailProduct extends Component {
  state = {
    //product: {},
    productDetail: []
  };

  componentDidMount = async() => {
    
    await this.getDetailProduct()

    
  }

  getDetailProduct = async () => {

    const idproduct = parseInt(this.props.match.params.asdfg);
    console.log(idproduct);
    
    console.log(this.props);

    var res = await axios.get(`http://localhost:2020/getProduct/${idproduct}` )
       
    return this.setState({ productDetail: res.data[0] });
      
      
  
  }

  render() {
    let product = this.state.productDetail;
    
    return (
        <div className="prodDetail container container-fluid">
      <div className="card" key={product.id}>
        <div className="card-header">{product.product_tittle}</div>
        <div className="card-body">
          <img src={`http://localhost:2020/showProdImg/${product.product_image}`} alt={product.product_tittle} />
          <h5 className="card-title">Artist : {product.product_artist}</h5>
          {/* <p className="card-text">Artist : {item.product_artist}</p> */}
          <p className="card-text">Genre : {product.product_genre}</p>
          {/* <p className="card-text">Description : {product.product_desc}</p> */}
          <p className="card-text">Description : </p>
          <p className="card-text">{product.product_desc}</p>
          <p className="card-text">Price: Rp.{product.product_price}</p>
          
  
           <input 
              min={0}
             ref={input => (this.jumlah = input)}
            className="form-control" type="number" />

          <button 
            //  onClick={() => {
            //   this.onAddToCart(product.id);
            // }}
            className="btn btn-primary btn-block btn-sm my-2">
              Add to Cart
            </button>

          {/* <a href="/allproduct" className="btn btn-block btn-primary">
            Add to Cart
          </a> */}
        </div>
      </div>
      </div>
    );
  }
}

export default DetailProduct;