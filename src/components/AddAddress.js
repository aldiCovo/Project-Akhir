import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import cookies from 'universal-cookie'

import { Col, Button, Form, FormGroup, Label, Input,Row, FormText } from 'reactstrap';

import axios from '../config/axios'

//import {getUserAddress, addAddress} from '../actions/index'
import {getUserAddress, addAddress} from '../actions/address'

const cookie = new cookies()

class AddAddress extends Component {
    
   

    state = {
        address : 0
      }

    componentDidMount() {
        
        this.props.getUserAddress()
    }


    // Add data User jika user belum input addres
  onAddAddressClick = () => {
    const location_name = this.location.value;
    const street = this.street.value;
    const city = this.city.value;
    const province = this.province.value;
    const country = this.country.value;
    const postal_code = this.postalCode.value;
    const phone = this.phoneNumber.value;
    const penerima = this.penerima.value;
    
    
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
    

    render(){

       if(this.props.newAddress.length === this.state.address) {
        const id = cookie.get('idLogin')
        if(id){
            
               
            return(
//                      {/* FORM ADDRESS  */}
    
    <div className="addaddress container  bg-transparent text-dark manageprofile rounded col-5">
    <h3>Add Your Address</h3>
   <p>Click form box to add</p>
   <Form>
     {/* <Row form>
       <Col md={6}> */}
        <FormGroup>
              <Label for="exampleUsername">Penerima</Label>
              <Input
                innerRef={input => {
                  this.penerima = input;
                }}
                type="text"
                name="location"
                id="exampleLocation"
                placeholder="Nama Penerima"
              />
            </FormGroup>
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
     
     {/* <Button onClick={this.onSaveEditAddress}>Update</Button> */}
     <Button onClick={this.onAddAddressClick}>Add</Button>
     {/* {this.onErrorRegister()} */}
    
   </Form>
 </div>
            )
     
            
        //return <h1>Loading</h1>
    } else {
        return <Redirect to='/login'/>
    }
         } else {
            return <Redirect to='/manageprofile'/>
         }
         
        

       
        
        
    }
}

const mapStateToProps = state => {
    return {user: state.auth, newAddress: state.auth.address}
}

export default connect(
    mapStateToProps,
    {getUserAddress, addAddress}
  )(AddAddress);
 