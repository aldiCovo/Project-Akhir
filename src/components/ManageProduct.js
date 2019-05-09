import React, { Component } from "react";
import axios from "axios";
import cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import { onUploadProduct } from "../actions";

const cookie = new cookies();

class ManageProduct extends Component {
  _isMounted = false;
  state = {
    products: [],
    selectedId: 0
  };

  // Fungsi Edit
  onEditProduct = id => {
    this.setState({ selectedId: id });
  };
  onSaveItem = id => {
    const nama = this.editName.value;
    const jenis = this.editGenre.value;
    const desk = this.editDesc.value;
    const harga = parseInt(this.editPrice.value);
    const sumber = this.editImg.value;
    axios
      .put("http://localhost:1996/products/" + id, {
        name: nama,
        genre: jenis,
        desc: desk,
        price: harga,
        src: sumber
      })
      .then(() => {
        this.getProduct();
      });
  };

  // Fungsi Delet
  onDeleteProduct = id => {
    axios.delete(`http://localhost:1996/products/${id}`).then(res => {
      this.getProduct();
    });
  };

  // Fungsi Add Produk
  onAddProduct = () => {
    const namaArtist = this.artist.value;
    const namaTittle = this.tittle.value;
    const genreProd = this.genre.value;
    const deskripsi = this.desc.value;
    const harga = this.price.value;
    const gambar = this.pict.value;

    console.log(namaArtist);
    console.log(namaTittle);
    console.log(genreProd);
    console.log(deskripsi);
    console.log(harga);
    console.log(gambar);

    this.onUploadProduct(
      namaArtist,
      namaTittle,
      genreProd,
      deskripsi,
      harga,
      gambar
    );
  };

  //axios.post pake fungsion
  onUploadProduct = (
    namaArtist,
    namaTittle,
    genreProd,
    deskripsi,
    harga,
    gambar
  ) => {
    axios
      .post(" http://localhost:1996/products", {
        artist: namaArtist,
        tittle: namaTittle,
        genre: genreProd,
        desc: deskripsi,
        price: harga,
        src: gambar
      })
      .then(res => {
        this.getProduct();
      });
  };

  // Ini jalan sekali setelah proses render pertama kali
  componentDidMount() {
    //this._isMounted = true;
    this.getProduct();
  }
  // componentWillUnmount() {
  //   this._isMounted = false;
  // }

  getProduct = () => {
    axios.get("http://localhost:1996/products").then(res => {
      this.setState({ products: res.data, selectedId: 0 }); // .data adalah tempat data sebenarnya yg disediakan redux / this.setState adalah function untuk set ulang perubahan ke state kemudian otomatis fn render akan dijalankan lagi
    });
  };

  renderList = () => {
    return this.state.products.map(item => {
      // item berisi objek { id, name, desc, price, src }
      if (item.id !== this.state.selectedId) {
        //kondisi saat normal atau tidak tekan tombol edit
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.artist}</td>
            <td>{item.tittle}</td>
            <td>{item.genre}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>
              <img className="list" src={item.src} alt={item.name} />
            </td>
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
                  this.editArtist = input;
                }}
                type="text"
                defaultValue={item.artist}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editTittle = input;
                }}
                type="text"
                defaultValue={item.tittle}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editGenre = input;
                }}
                type="text"
                defaultValue={item.genre}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editDesc = input;
                }}
                type="text"
                defaultValue={item.desc}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editPrice = input;
                }}
                type="text"
                defaultValue={item.price}
              />
            </td>
            <td>
              <input
                className="form-control"
                ref={input => {
                  this.editImg = input;
                }}
                type="text"
                defaultValue={item.src}
              />
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

  // Yang dirender pertama
  render() {
    //var userCookie = cookie.get("masihLogin");
    //console.log(userCookie);
    if (cookie.get("masihLogin") !== undefined) {
      return (
        <div className="container">
          <h1 className="display-4 text-center">Manage Product</h1>
          <table className="table table-hover mb-5">
            <thead>
              <tr>
                <th scope="col">ID</th>
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
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">ARTIST</th>
                <th scope="col">TITTLE</th>
                <th scope="col">GENRE</th>
                <th scope="col">DESC</th>
                <th scope="col">PRICE</th>
                <th scope="col">PICTURE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">
                  <input
                    ref={input => (this.artist = input)}
                    className="form-control"
                    type="text"
                    placeholder="Artist Name"
                  />
                </th>
                <th scope="col">
                  <input
                    ref={input => (this.tittle = input)}
                    className="form-control"
                    type="text"
                    placeholder="Album Name"
                  />
                </th>
                <th scope="col">
                  <input
                    ref={input => (this.genre = input)}
                    className="form-control"
                    type="text"
                    placeholder="Genre"
                  />
                </th>
                <th scope="col">
                  <input
                    ref={input => (this.desc = input)}
                    className="form-control"
                    type="text"
                    placeholder="Description"
                  />
                </th>
                <th scope="col">
                  <input
                    ref={input => (this.price = input)}
                    className="form-control"
                    type="text"
                    placeholder="Price"
                  />
                </th>
                <th scope="col">
                  <input
                    ref={input => (this.pict = input)}
                    className="form-control"
                    type="text"
                    placeholder="Link Image"
                  />
                </th>
                <th scope="col">
                  <button
                    className="btn btn-outline-warning"
                    onClick={this.onAddProduct}
                  >
                    Add
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default /*connect(
  mapStateToProps,
  { onUploadProduct }
)*/ ManageProduct;
