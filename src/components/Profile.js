// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
// import cookies from 'universal-cookie'
// import { 
//     Jumbotron,
//     Button, } from 'reactstrap';

// import axios from '../config/axios'

// import {getUser} from '../actions/index'

// const cookie = new cookies()

// class Profile extends Component {
    

//     componentDidMount() {
        
//         this.props.getUser()
//     }


//     fileUpload = async (id) => {
//         var formData = new FormData()
//         var imagefile = this.gambar
//         formData.append("avatar", imagefile.files[0])
        
//         try {
//             await axios.post(`/users/${id}/avatar`, formData, {
//                 headers: {
//                 'Content-Type': 'multipart/form-data'
//                 }
//             })
//             this.getProfile(id)
//         } catch (e) {
//             console.log(e.response.data);
            
//         }
          

//     }

//     render(){
//        if(this.props.newUser.length !==0) {
       
//             var {username, first_name, last_name, email, password} = this.props.newUser[0]
//          }
        
//         if(cookie.get('masihLogin') !== undefined){
            
//                 //const {name, age, email} = this.state.data.user
//                 return(
//                     <div className="container mt-5">
//                         <Jumbotron >
//                             <img  src={this.state.data.photo} alt={this.state.data.user.name} key={new Date()}/>
                            
//                             <div className="custom-file">
//                                 <input type="file" id="myfile" multiple="multiple"  ref={input => this.gambar = input}/>
//                             </div>
//                             <Button color="primary" onClick={() => this.fileUpload(this.props.id)}>Upload</Button>
//                         </Jumbotron>
//                     </div>
//                 )
         
                
//             //return <h1>Loading</h1>
//         }

//         return <Redirect to='/login'/>
        
        
//     }
// }

// const mapStateToProps = state => {
//     return {user: state.auth, newUser: state.auth.users}
// }

// export default connect(
//     mapStateToProps,
//     {getUser}
//   )(Profile);
 