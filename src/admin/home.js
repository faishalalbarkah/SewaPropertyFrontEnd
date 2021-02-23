import React, { Component } from "react";
import Header from "../user/common/header";
import "../user/style/home/home.scss";
import { Table, Row, Col, Modal, Button } from "react-bootstrap";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  Show = () => {
    this.setState({
      show: true,
    });
  };

  Close = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <>
        <div className="container-home">
          <Header />
          <h1>Income Transaction</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>User</th>
                <th>Type of rent </th>
                <th>Bukti trf</th>
                <th>Status payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>babang isal</td>
                <td>Year</td>
                <td>
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={require("../user/assets_user/payment.png")}
                  />
                </td>
                <td>
                  <p
                    style={{
                      color: "#0ACF83",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    Approve
                  </p>
                </td>
                <td>
                  <img
                    style={{ margin: "15px" }}
                    onClick={this.Show}
                    src={require("../user/assets_user/Vector.png")}
                  />

                  <img src={require("../user/assets_user/delete.png")} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        {/* // Modal */}
        <Modal show={this.state.show} onHide={this.Close}>
          <div style={{ width: "100%", height: "70px" }}>
            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
                color: "#000000",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              Status Edit
            </p>
          </div>
          <Modal.Body style={{ width: "100%" }}>
            <Row className="body">
              <div className="card-booking">
                <div className="wrapper-booking">
                  <div className="Container-booking">
                    <Row className="wrapper-booking-header">
                      <Col>
                        <img src={require("../user/assets_user/Logo.PNG")} />
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
                          Jl. Elang IV Perum Permata Bintaro Residence, Pondok
                          Aren, Tangerang Selatan
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
                          <img
                            src={require("../user/assets_user/payment.png")}
                          />
                          <p>Upload Payment Proof</p>
                        </div>
                      </Col>
                    </Row>
                    <Row className="wrapper-booking-footer">
                      <Col md={1}>
                        <h5>No</h5>
                      </Col>
                      <Col>
                        <h5>Full Name</h5>
                      </Col>
                      <Col>
                        <h5>Gender</h5>
                      </Col>
                      <Col>
                        <h5>Phone</h5>
                      </Col>
                      <Col md={3}></Col>
                    </Row>
                    <div style={{ border: "1px solid #959595" }}></div>
                    <Row className="wrapper-booking-title">
                      <Col md={1}>1</Col>
                      <Col>Faishal al barkah</Col>
                      <Col>Laki-laki</Col>
                      <Col>08591215136</Col>
                      <Col md={3}>
                        <h5>Long Term Rent : 1 Year</h5>
                      </Col>
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
                    <button
                      style={{
                        backgroundColor: "#0ACF83",
                        width: "140px",
                        height: "35px",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      Approve
                    </button>
                    <button
                      style={{
                        backgroundColor: "#FF0742",
                        width: "140px",
                        height: "35px",
                        color: "white",
                        fontSize: "18px",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default home;
