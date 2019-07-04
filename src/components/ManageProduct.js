import React, { Component } from "react";
import axios from '../config/axios'
import cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { onUploadProduct } from "../actions";


import {onUploadProduct, onUpdateProduct, getProducts, deletProduct} from '../actions/product'
// import {onUploadProduct, onUpdateProduct, getProducts, deletProduct} from '../actions/index'

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  CustomInput
} from "reactstrap";

const cookie = new cookies();

class ManageProduct extends Component {
 
  state = {
    //products: [],
    //stocks: [],
    selectedId: 0,
    // product_image: []
  };

  // Fungsi Edit
  onEditProduct = id => {
    this.setState({ selectedId: id });
  };

  onSaveItem = id => {
    
      const editStock = this.editStock.value;
      const editArtist = this.editArtist.value;
      const editTittle = this.editTittle.value;
      const editGenre = this.editGenre.value;
      const editDesk = this.editDesc.value;
      const editHarga = parseInt(this.editPrice.value);
      const editGambar = this.editImg.files[0]; // diisi devault value gimana????

      this.props.onUpdateProduct(
        id, 
        editStock,
        editArtist,
        editTittle,
        editGenre,
        editDesk,
        editHarga,
        editGambar
  
      )
        .then(() => {
          //this.getProduct()
          this.onGetProduct();
          
          // this.props.getProducts()
          // this.setState({ selectedId: 0 })
        }).then(() => {
          this.onSetState()
        });

    //}
  };

  // // Fungsi Delet
  // onDeleteProduct = id => {
  //   axios.delete(`http://localhost:1996/products/${id}`).then(res => {
  //     this.getProduct();
  //   });
  // };


  // Fungsi Delet
  onDeleteProduct = async id => {
    await this.props.deletProduct(id)
      
      this.onGetProduct();
    
}

  
  // Fungsi Add Produk
  onAddProduct = () => {
    const product_stock = this.stock.value;
    const product_artist = this.artist.value;
    const product_tittle = this.tittle.value;
    const product_genre = this.genre.value;
    const product_desc = this.desc.value;
    const product_price = parseInt(this.price.value);
    const product_image = this.image.files[0];

    console.log(product_artist);
    console.log(product_tittle);
    console.log(product_genre);
    console.log(product_desc);
    console.log(product_price);
    console.log(product_image);

    this.props.onUploadProduct(
      product_stock,
      product_artist,
      product_tittle,
      product_genre,
      product_desc,
      product_price,
      product_image
    );
  };

  //axios.post pake fungsion
  
  // Ini jalan sekali setelah proses render pertama kali
  componentDidMount() {
    //this._isMounted = true;
    //this.getProduct();
    this.onGetProduct();
    this.onSetState()
  }
  
  //Fn Get Product
  onGetProduct = () => {
    this.props.getProducts()
   
  }

  onSetState = () => {
    this.setState({ /*products: res.data,*/ selectedId: 0 }); // .data adalah tempat data sebenarnya yg disediakan redux / this.setState adalah function untuk set ulang perubahan ke state kemudian otomatis fn render akan dijalankan lagi
  }

  


  renderList = () => {
    return this.props.products.map(item => {
      //this.getProdImg(item.product_image)
      // item berisi objek { id, name, desc, price, src }
      if (item.id !== this.state.selectedId) {
        //kondisi saat normal atau tidak tekan tombol edit
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.product_stock}</td>
            <td>{item.product_artist}</td>
            <td>{item.product_tittle}</td>
            <td>{item.product_genre}</td>
            <td>{item.product_desc}</td>
            <td>{item.product_price}</td>
            
            {/* <td>{this.imageList}</td> */}
            <td><img src={`http://localhost:2020/showProdImg/${item.product_image}`} alt={item.product_tittle} className="list"></img></td>
            <td>
              <button
                onClick={() => {
                  this.onEditProduct(item.id);
                }}
                className="btn btn-primary mr-2"
              >
                Edit
              </button>
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
      } else {
        //kondisi saat tekan tombol edit
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editStock = input;
                }}
                type="text"
                defaultValue={item.product_stock}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editArtist = input;
                }}
                type="text"
                defaultValue={item.product_artist}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editTittle = input;
                }}
                type="text"
                defaultValue={item.product_tittle}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editGenre = input;
                }}
                type="text"
                defaultValue={item.product_genre}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editDesc = input;
                }}
                type="text"
                defaultValue={item.product_desc}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editPrice = input;
                }}
                type="text"
                defaultValue={item.product_price}
              />
            </td>
            {/* <td>
              <input
                className="form-control"
                ref={input => {
                  this.editImg = input;
                }}
                type="text"
                defaultValue={item.src}
              />
            </td> */}
            <td>
            <input type="file" id="myfile" multiple="multiple" 
            // defaultValue={item.product_image}  
            ref={input => this.editImg = input}/>
            </td>
        {/* <FormGroup>
          
          <div className="custom-file">
                <input type="file" id="myfile" multiple="multiple" defaultValue={item.product_image}  ref={input => this.editImg = input}/>
          </div>
             
        </FormGroup> */}
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

  // Yang dirender pertama
  render() {
    //var userCookie = cookie.get("masihLogin");
    //console.log(userCookie);

    const id = cookie.get('idLogin')
    const usernameAdmin = cookie.get('usernameLogin')
    //if (cookie.get("masihLogin") !== undefined) {
     // if(this.props.user !==""){
    if (usernameAdmin === "admin789") {
    // if (id === 10) {
      return (
        <div className="container manageproduct">
          <h1 className="display-4 text-center">Manage Product</h1>
          <table className="table table-hover mb-5">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">STOCK</th>
                <th scope="col">ARTIST</th>
                <th scope="col">TITTLE</th>
                <th scope="col">GENRE</th>
                <th scope="col">DESC</th>
                <th scope="col">PRICE</th>
                <th scope="col">PICTURE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
          <h1 className="display-4 text-center">Input Product</h1>
          
           <div className="container  bg-transparent text-dark inputProd rounded">
          <Form>
          <Row form>
            <Col md={2}>
            <FormGroup>
                <Label for="exampleStock">Stock</Label>
                <Input
                  innerRef={input => {
                    this.stock = input;
                  }}
                  type="number"
                  name="stock"
                  id="exampleStock"
                  placeholder="Stock"
                />
              </FormGroup>
            </Col>
           
         
          </Row>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleArtist">Artist</Label>
                <Input
                  innerRef={input => {
                    this.artist = input;
                  }}
                  type="text"
                  name="artist"
                  id="exampleArtist"
                  placeholder="Artist"
                />
                 
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleTittle">Tittle</Label>
                <Input
                  innerRef={input => {
                    this.tittle = input;
                  }}
                  type="text"
                  name="tittle"
                  id="exampleTittle"
                  placeholder="Tittle"
                />
              </FormGroup>
                
            </Col>
          </Row>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleFirst">Genre</Label>
                <Input
                  innerRef={input => {
                    this.genre = input;
                  }}
                  type="text"
                  name="genre"
                  id="exampleGenre"
                  placeholder="Genre"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="examplePrice">Price</Label>
                <Input
                  innerRef={input => {
                    this.price = input;
                  }}
                  type="number"
                  name="price"
                  id="examplePrice"
                  placeholder="Price"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={12}>
            <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input 
              innerRef={input => {
                  this.desc = input;
              }} 
              type="textarea" 
              name="text" id="exampleText" 
              placeholder="Description" 
              />
        </FormGroup>
            </Col>
            

          </Row>
          
          <Row form>
            <Col md={2}>
              
              <FormGroup>
          
          <div className="custom-file">
                                <input type="file" id="myfile" multiple="multiple"  ref={input => this.image = input}/>
                            </div>
                            
           
          
                            {/* <Button color="primary" onClick={() => this.fileUpload(this.props.id)}>Upload</Button> */}
        </FormGroup>
            </Col>
          </Row>
         
          
          <br />
          <button
                    className="btn btn-outline-warning"
                   
                       onClick={this.onAddProduct}
                  >
                    Add Product
                  </button>
         
        </Form>
        </div>
        </div>
      );
    } else {
     return (<Redirect to="/" />);
      // return null
      
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
