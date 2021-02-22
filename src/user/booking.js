import React, { Component } from "react";
import Header from "./common/header";
import { Row, Col } from "react-bootstrap";

class booking extends Component {
  render() {
    return (
      <div className="container-home">
        <Header />
        <Row className="body">
          <div className="card-booking">
            <div className="wrapper-booking">
              <div className="Container-booking">
                <Row className="wrapper-booking-header">
                  <Col>
                    <img src={require("./assets_user/Logo.PNG")} />
                  </Col>
                  <Col>
                    <h1>
                      Booking <br /> <h5>Saturday, 20 March 2020</h5>
                    </h1>
                  </Col>
                </Row>
                <Row className="wrapper-booking-body">
                  <Col>
                    <h3>House Astina</h3>
                    <p>
                      Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
                      Tangerang Selatan
                    </p>
                    <div className="badge-payment">
                      <p className="title-payment">Waiting Payment</p>
                    </div>
                  </Col>
                  <Col>
                    <Row className="wrapper-booking-center">
                      <Col className="wrapper-Checkin-Checkout">
                        <div>
                          <h5>Check-in</h5>
                          <p>20 March 2020</p>
                        </div>

                        <div
                          style={{
                            textAlign: "center",
                            marginTop: "-10px",
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            border: "1px solid #5A57AB",
                          }}
                        ></div>
                        <div
                          style={{
                            border: "1px solid black",
                            width: "1px",
                            height: "50px",
                            marginLeft: "7px",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#5A57AB",
                          }}
                        ></div>
                        <h5>Check-out</h5>
                        <p>20 March 2020</p>
                      </Col>
                      <Col className="wrapper-Amenities-Typeofrent">
                        <h5>Amenities</h5>
                        <p>Furnished</p>
                        <div style={{ height: "72px" }}></div>
                        <h5>Type of Rent</h5>
                        <p>Year</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <div className="wrapper-upload">
                      <img src={require("./assets_user/payment.png")} />
                      <p>Upload Payment Proof</p>
                      <button
                        style={{
                          backgroundColor:'#5A57AB',
                          width: "140px",
                          height: "35px",
                          color:"white",
                          fontSize:"18px"
                        }}
                      >
                        Payment
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row className="wrapper-booking-footer">
                  <Col md={1}><h5>No</h5></Col>
                  <Col><h5>Full Name</h5></Col>
                  <Col><h5>Gender</h5></Col>
                  <Col><h5>Phone</h5></Col>
                  <Col md={3}></Col>
                </Row>
                <div style={{ border: "1px solid #959595" }}></div>
                <Row className="wrapper-booking-title">
                  <Col md={1}>1</Col>
                  <Col>Faishal al barkah</Col>
                  <Col>Laki-laki</Col>
                  <Col>08591215136</Col>
                  <Col md={3}><h5>Long Term Rent : 1 Year</h5></Col>
                </Row>
                <div style={{ border: "1px solid #959595" }}></div>
                <Row className="wrapper-booking-total">
                  <Col md={1}></Col>
                  <Col> </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col md={3}>
                    <h5>Total : Rp.3.000.000</h5>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>

         {/* <Row className="body">
          <div className="card-booking">
            <div className="wrapper-booking">
              <div className="Container-booking">
                <Row className="wrapper-booking-header">
                  <Col>
                    <img src={require("./assets_user/Logo.PNG")} />
                  </Col>
                  <Col>
                    <h1>
                      Booking <br /> <h5>Saturday, 20 March 2020</h5>
                    </h1>
                  </Col>
                </Row>
                <Row className="wrapper-booking-body">
                  <Col>
                    <h3>House Astina</h3>
                    <p>
                      Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
                      Tangerang Selatan
                    </p>
                    <div className="badge-payment">
                      <p className="title-payment">Waiting Payment</p>
                    </div>
                  </Col>
                  <Col>
                    <Row className="wrapper-booking-center">
                      <Col className="wrapper-Checkin-Checkout">
                        <div>
                          <h5>Check-in</h5>
                          <p>20 March 2020</p>
                        </div>

                        <div
                          style={{
                            textAlign: "center",
                            marginTop: "-10px",
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            border: "1px solid #5A57AB",
                          }}
                        ></div>
                        <div
                          style={{
                            border: "1px solid black",
                            width: "1px",
                            height: "50px",
                            marginLeft: "7px",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "15px",
                            width: "15px",
                            borderRadius: "50%",
                            backgroundColor: "#5A57AB",
                          }}
                        ></div>
                        <h5>Check-out</h5>
                        <p>20 March 2020</p>
                      </Col>
                      <Col className="wrapper-Amenities-Typeofrent">
                        <h5>Amenities</h5>
                        <p>Furnished</p>
                        <div style={{ height: "72px" }}></div>
                        <h5>Type of Rent</h5>
                        <p>Year</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <div className="wrapper-upload">
                      <img src={require("./assets_user/payment.png")} />
                      <p>Upload Payment Proof</p>
                      <button
                        style={{
                          backgroundColor:'#5A57AB',
                          width: "140px",
                          height: "35px",
                          color:"white",
                          fontSize:"18px"
                        }}
                      >
                        Payment
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row className="wrapper-booking-footer">
                  <Col md={1}><h5>No</h5></Col>
                  <Col><h5>Full Name</h5></Col>
                  <Col><h5>Gender</h5></Col>
                  <Col><h5>Phone</h5></Col>
                  <Col md={3}></Col>
                </Row>
                <div style={{ border: "1px solid #959595" }}></div>
                <Row className="wrapper-booking-title">
                  <Col md={1}>1</Col>
                  <Col>Faishal al barkah</Col>
                  <Col>Laki-laki</Col>
                  <Col>08591215136</Col>
                  <Col md={3}><h5>Long Term Rent : 1 Year</h5></Col>
                </Row>
                <div style={{ border: "1px solid #959595" }}></div>
                <Row className="wrapper-booking-total">
                  <Col md={1}></Col>
                  <Col> </Col>
                  <Col></Col>
                  <Col></Col>
                  <Col md={3}>
                    <h5>Total : Rp.3.000.000</h5>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row> */}
      </div>
    );
  }
}

export default booking;
