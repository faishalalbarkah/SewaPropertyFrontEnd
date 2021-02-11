import React, { Component } from "react";
import Header from "./common/header";
import { Row, Col } from "react-bootstrap";

class booking extends Component {
  render() {
    return (
      <div className="container-home">
        <Header />
        <Row className="body">
          <div className="body-booking">
            <div className="wrapper-booking">
              <Row className="wrapper-booking-header">
                <Col>
                  <img src={require("./assets_user/Logo.PNG")} />
                </Col>
                <Col>
                  <h1>Booking</h1>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default booking;
