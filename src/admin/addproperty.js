import React, { Component } from "react";
import Header from "../user/common/header";
import "../user/style/home/home.scss";
import { Form, Button } from "react-bootstrap";

class addproperty extends Component {
  render() {
    return (
      <div className="container-home">
        <Header />
        <h2>Add Property</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name Property </Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label> City</Form.Label>
            <Form.Control as="select">
              <option>Tangerang</option>
              <option>Jakarta</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Address</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price </Form.Label>
            <Form.Control type="number" placeholder="Enter price" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type of rent</Form.Label>
            <Form.Control as="select">
              <option>-- Pilih --</option>
              <option>Day</option>
              <option>Year</option>
              <option>Month</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Amenities </Form.Label>
            {["radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Furnished"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Pet Allowed"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Shared Acoomodation "
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label> Bathrooms</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label> Badrooms</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
            </Form.Control>
          </Form.Group>
          <Button style={{backgroundColor:"#5A57AB",marginTop:"20px",width:"100%",color:"white",fontSize:"20px",fontWeight:"800"}} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default addproperty;
