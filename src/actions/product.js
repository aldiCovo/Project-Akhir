import axios from "../config/axios";
import cookies from "universal-cookie";

const cookie = new cookies();


// UPLOAD PRODUCT TO DB
export const onUploadProduct = (
  
    product_stock,
    product_artist,
    product_tittle,
    product_genre,
    product_desc,
    product_price,
    product_image
  ) => {
    
    return async dispatch => {
      try {
  
        const formData = new FormData()
  
        formData.append('product_stock', product_stock)
        formData.append('product_artist', product_artist)
        formData.append('product_tittle', product_tittle)
        formData.append('product_genre', product_genre)
        formData.append('product_desc', product_desc)
        formData.append('product_price', product_price)
        
        if (product_image) {
        formData.append('product_image', product_image)
        }
  
        //const userId = cookie.get("idLogin")
        const res = await axios.post(`/postProd`,formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
        //console.log(res);
  
        // if(res.data[0].username){
          return dispatch ({
            type: 'ADD_PRODUCTS',
            payload: res
           })
        // }
        
      } catch (e) {
        console.log(e);
        
      }
    }
  };


  // EDIT PRODUCT
export const onUpdateProduct = (
    id, 
    editStock,
    editArtist,
    editTittle,
    editGenre,
    editDesk,
    editHarga,
    editGambar
  ) => {
    return async (dispatch) => {
      try {
  
        const formData = new FormData()
  
        formData.append('product_stock', editStock)
        formData.append('product_artist', editArtist)
        formData.append('product_tittle', editTittle)
        formData.append('product_genre', editGenre)
        formData.append('product_desc', editDesk)
        formData.append('product_price', editHarga)
        formData.append('product_image', editGambar)
        
  
       
        const res = await axios.patch(`/updateProd/${id}/product_image`,formData, {
       
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })
        console.log(res);
  
        //if(res.data[0].username){
          return dispatch ({
            type: "EDIT_PRODUCT",
            payload: res
          })
        //}
        
      } catch (e) {
        console.log(e);
        
      }
    }
  
  
  }


  // GET ALL PRODUCTS
export const getProducts = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/getProduct')
  
            return dispatch({
                type: 'ADD_PRODUCTS',
                payload: res
            })
        } catch (e) {
            console.log(e);
            
        }
    }
  }


  // DELETE PRODUCT
export const deletProduct = id => {
    console.log(id);
    return async dispatch => {
    try{
      
       await axios.delete(`/delete/products/${id}`)
      }catch (e) {
        console.log(e); 
    } 
  } 
  }