import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input,Row, FormText } from 'reactstrap';
import {connect} from "react-redux"
import cookies from "universal-cookie";
import {  Link, Redirect } from "react-router-dom";

import {editUserData, editUserAddress, addAddress, getUser, getUserAddress} from '../actions/index'

const cookie = new cookies();

class ManageProfile extends Component {
  state = {
    profile : 0
  }
  componentDidMount(){
    this.props.getUser()
    this.props.getUserAddress()
  }

  // componentDidUpdate(){
  //   this.props.getUser()
  //   this.props.getUserAddress()
  // }
  // Save Data User yang sudah di Edit
  onSaveEditUser = () => {
    

    const username = this.username.value;
    const first_name = this.first_name.value;
    const last_name = this.last_name.value;
    const email = this.email.value;
    const password = this.password.value;
    const avatar = this.image.files[0]

    
    
    console.log("Username : " + email);
    console.log("Password : " + password);
    this.props.editUserData(
        username,
        first_name,
        last_name,
        email,
        password,
        avatar
      
    );
    this.props.getUser()
  };

  // Add data User jika user belum input addres
  onAddAddressClick = () => {
    const location_name = this.location.value;
    const street = this.street.value;
    const city = this.city.value;
    const province = this.province.value;
    const country = this.country.value;
    const postal_code = this.postalCode.value;
    const phone = this.phoneNumber.value;
    
    
    console.log("Location : " + location_name);
    console.log("Street : " + street);
    this.props.addAddress(
      location_name,
      street,
      city,
      province,
      country,
      postal_code,
      phone,
      
    );
    //this.props.getUserAddress()
    this.setState({ profile: 1 });
  };

  onSaveEditAddress = () => {

    
    const location_name = this.location.value;
    const street = this.street.value;
    const city = this.city.value;
    const province = this.province.value;
    const country = this.country.value;
    const postal_code = this.postalCode.value;
    const phone = this.phoneNumber.value;
    
    console.log("Location : " + location_name);
    console.log("Street : " + street);
    console.log(this.props.newAddress);
    
    this.props.editUserAddress (
      location_name,
      street,
      city,
      province,
      country,
      postal_code,
      phone
      
    );
    this.props.getUserAddress()
    //this.setState({ profile: 1 });

  };

  render() {
    console.log(this.props.newUser);
    //console.log(this.props.newAddress);

    if(this.props.newUser.length !==0) {
      var {username, first_name, last_name, email, avatar} = this.props.newUser[0]
    }

    // Jika address sudah ada isinya
    if(this.props.newAddress.length !== this.state.profile) {
      var {location_name, street, city, province, country, postal_code, phone } = this.props.newAddress[0]
      // var {location_name, street, city, province, country, postal_code, phone } = this.props.newAddress[0].data
      // var {location_name, street, city, province, country, postal_code, phone } = this.props.newAddress
      // var {location_name, street, city, province, country, postal_code, phone } = this.props.newAddress[0].config.data
    
    
      if (cookie.get("idLogin") !== undefined) {
        return (
          <div>
            <div className="row imgmanageprofile">
            <div className="col-4 offset-5" >
            <div class="" style={{width: "18rem"}}>
            <img class="card-img-top" src={`http://localhost:2020/showAvatar/${avatar}`}  alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
    
     
    
   </div>
  
            </div>
            </div>
         
          <div className="row">
           <div className="container mt-5">
                         
                      </div>
          <div className="container  bg-transparent text-dark manageprofile rounded col-5">
           <h3>Your Profile</h3>
          <p>Click form box to edit</p>
          <Form>
            {/* <Row form>
              <Col md={6}> */}
              <FormGroup>
                  <Label for="exampleFirst">Username</Label>
                  <Input
                    innerRef={input => {
                      this.username = input;
                    }}
                    type="text"
                    name="username"
                    id="exampleUsername"
                    defaultValue={username}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
  
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleFirst">First Name</Label>
                  <Input
                    innerRef={input => {
                      this.first_name = input;
                    }}
                    type="text"
                    name="firstname"
                    id="exampleFirst"
                    defaultValue={first_name}
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleLast" >Last Name   </Label>
                  <Input
                    innerRef={input => {
                      this.last_name = input;
                      
                    }}
                    type="text"
                    name="password"
                    id="exampleLast"
                    defaultValue={last_name}
                    
                  />
                   
                </FormGroup>
              {/* </Col>
            </Row> */}
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    innerRef={input => {
                      this.email = input;
                    }}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    defaultValue={email}
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    innerRef={input => {
                      this.password = input;
                    }}
                    type="password"
                    name="password"
                    id="examplePassword"
                    //defaultValue={password}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
            
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleDate">Brith Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    defaultValue="date placeholder"
                  />
                </FormGroup>
                
              </Col>
              
            </Row>
  
             <FormGroup>
            {/* <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Chose file to add or replace fhoto
            </FormText> */}
            <div className="custom-file">
                                  <input type="file" id="myfile" multiple="multiple"  ref={input => this.image = input}/>
                              </div>
                              
              <p>Chose file to add or replace fhoto</p>
            
                              {/* <Button color="primary" onClick={() => this.fileUpload(this.props.id)}>Upload</Button> */}
          </FormGroup>
  
           
           
            
            <br />
            <Button onClick={this.onSaveEditUser}>Save</Button>
            {/* {this.onErrorRegister()} */}
           
          </Form>
        </div>
  
  
  
          {/* FORM ADDRESS  */}
        
        <div className="container  bg-transparent text-dark manageprofile rounded col-5">
           <h3>Your Address</h3>
          <p>Click form box to edit</p>
          <Form>
            {/* <Row form>
              <Col md={6}> */}
              <FormGroup>
                  <Label for="exampleUsername">Location</Label>
                  <Input
                    innerRef={input => {
                      this.location = input;
                    }}
                    type="text"
                    name="location"
                    id="exampleLocation"
                    defaultValue={location_name}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
  
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleFirst">Street</Label>
                  <Input
                    innerRef={input => {
                      this.street = input;
                    }}
                    type="text"
                    name="street"
                    id="exampleStreet"
                    defaultValue={street}
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input
                    innerRef={input => {
                      this.city = input;
                    }}
                    type="text"
                    name="city"
                    id="exampleCity"
                    defaultValue={city}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleEmail">Province</Label>
                  <Input
                    innerRef={input => {
                      this.province = input;
                    }}
                    type="text"
                    name="province"
                    id="exampleProvince"
                    defaultValue={province}
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleCountry">Country</Label>
                  <Input
                    innerRef={input => {
                      this.country = input;
                    }}
                    type="text"
                    name="country"
                    id="exampleCountry"
                    defaultValue={country}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="examplePostalCode">Postal Code</Label>
                  <Input
                    innerRef={input => {
                      this.postalCode = input;
                    }}
                    type="text"
                    name="postalCode"
                    id="examplePostalCode"
                    defaultValue={postal_code}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="examplePhoneNumber">Phone Number</Label>
                  <Input
                    innerRef={input => {
                      this.phoneNumber = input;
                    }}
                    type="text"
                    name="phoneNumber"
                    id="examplePhoneNumber"
                    defaultValue={phone}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
            
           
            
            <br />
            
            <Button onClick={this.onSaveEditAddress}>Update</Button>
            {/* <Button onClick={this.onAddAddressClick}>Add</Button> */}
            {/* {this.onErrorRegister()} */}
           
          </Form>
        </div>
          </div>
          </div>
      );
      }else {
        return <Redirect to='/home'/>
      
    }
    
    // Jika addres belum ada isinya
     }  else {

      
      if (cookie.get("idLogin") !== undefined) {
        return (
          <div>
            <div className="row imgmanageprofile">
            <div className="col-4 offset-5" >
            <div class="" style={{width: "18rem"}}>
            <img class="card-img-top" src={`http://localhost:2020/showAvatar/${avatar}`}  alt="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
    
     
    
   </div>
  
            </div>
            </div>
         
          <div className="row">
           <div className="container mt-5">
                         
                      </div>
          <div className="container  bg-transparent text-dark manageprofile rounded col-5">
           <h3>Your Profile</h3>
          <p>Click form box to edit</p>
          <Form>
            {/* <Row form>
              <Col md={6}> */}
              <FormGroup>
                  <Label for="exampleFirst">Username</Label>
                  <Input
                    innerRef={input => {
                      this.username = input;
                    }}
                    type="text"
                    name="username"
                    id="exampleUsername"
                    defaultValue={username}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
  
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleFirst">First Name</Label>
                  <Input
                    innerRef={input => {
                      this.first_name = input;
                    }}
                    type="text"
                    name="firstname"
                    id="exampleFirst"
                    defaultValue={first_name}
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleLast" >Last Name   </Label>
                  <Input
                    innerRef={input => {
                      this.last_name = input;
                      
                    }}
                    type="text"
                    name="password"
                    id="exampleLast"
                    defaultValue={last_name}
                    
                  />
                  
                </FormGroup>
              {/* </Col>
            </Row> */}
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    innerRef={input => {
                      this.email = input;
                    }}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    defaultValue={email}
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    innerRef={input => {
                      this.password = input;
                    }}
                    type="password"
                    name="password"
                    id="examplePassword"
                    //defaultValue={password}
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
            
            <Row form>
              <Col md={3}>
                <FormGroup>
                  <Label for="exampleDate">Brith Date</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    defaultValue="date placeholder"
                  />
                </FormGroup>
                
              </Col>
              
            </Row>
  
             <FormGroup>
            {/* <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Chose file to add or replace fhoto
            </FormText> */}
            <div className="custom-file">
                                  <input type="file" id="myfile" multiple="multiple"  ref={input => this.image = input}/>
                              </div>
                              
              <p>Chose file to add or replace fhoto</p>
            
                              {/* <Button color="primary" onClick={() => this.fileUpload(this.props.id)}>Upload</Button> */}
          </FormGroup>
  
           
           
            
            <br />
            <Button onClick={this.onSaveEditUser}>Save</Button>
            {/* {this.onErrorRegister()} */}
           
          </Form>
        </div>
  
  
  
  
        
        <div className="container  bg-transparent text-dark manageprofile rounded col-5">
           <h3>Your Address</h3>
          <p>Click form box to edit</p>
          <Form>
            {/* <Row form>
              <Col md={6}> */}
              <FormGroup>
                  <Label for="exampleUsername">Location</Label>
                  <Input
                    innerRef={input => {
                      this.location = input;
                    }}
                    type="text"
                    name="location"
                    id="exampleLocation"
                    placeholder="Location Name"
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
  
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleFirst">Street</Label>
                  <Input
                    innerRef={input => {
                      this.street = input;
                    }}
                    type="text"
                    name="street"
                    id="exampleStreet"
                    placeholder="Street"
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input
                    innerRef={input => {
                      this.city = input;
                    }}
                    type="text"
                    name="city"
                    id="exampleCity"
                    placeholder="City"
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
            {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleEmail">Province</Label>
                  <Input
                    innerRef={input => {
                      this.province = input;
                    }}
                    type="text"
                    name="province"
                    id="exampleProvince"
                    placeholder="Province"
                  />
                </FormGroup>
              {/* </Col>
              </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="exampleCountry">Country</Label>
                  <Input
                    innerRef={input => {
                      this.country = input;
                    }}
                    type="text"
                    name="country"
                    id="exampleCountry"
                    placeholder="Country"
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="examplePostalCode">Postal Code</Label>
                  <Input
                    innerRef={input => {
                      this.postalCode = input;
                    }}
                    type="text"
                    name="postalCode"
                    id="examplePostalCode"
                    placeholder= "Postal Code"
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
              {/* <Row form>
              <Col md={6}> */}
                <FormGroup>
                  <Label for="examplePhoneNumber">Phone Number</Label>
                  <Input
                    innerRef={input => {
                      this.phoneNumber = input;
                    }}
                    type="text"
                    name="phoneNumber"
                    id="examplePhoneNumber"
                    placeholder="Phone number"
                  />
                </FormGroup>
              {/* </Col>
            </Row> */}
            
           
            
            <br />
            
            
            {/* <Button onClick={this.onAddAddressClick}>Add</Button> */}
            <Link class="nav-link" to="/addaddress">
                    Add Address
                  </Link>
            {/* {this.onErrorRegister()} */}
           
          </Form>
        </div>
          </div>
          </div>
      );
      }else {
        return <Redirect to='/home'/>
      
    }

    }



   
    
  }
}

const mapStateToProps = state => {
    return { user: state.auth, newUser: state.auth.users, newAddress: state.auth.address };
  };


  export default connect(
    mapStateToProps,
    {getUser, getUserAddress, addAddress, editUserData, editUserAddress}
  )(ManageProfile);
 


