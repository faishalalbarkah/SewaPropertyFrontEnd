import React, { Component } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import Header from "./common/header";
import "./style/home/home.scss";

class produkdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showcheck: false,
    };
  }

  Show = () => {
    this.setState({
      showcheck: true,
    });
  };

  Close = () => {
    this.setState({
      showcheck: false,
    });
  };
  render() {
    return (
      <>
        <div className="container-home">
          <Header />
          <div className="container-produkdetail">
            <Row className="wrapper-image-detail-produk">
              {" "}
              <img
                style={{ height: "350px" }}
                src={require("./assets_user/detailproduk1.png")}
              />
              <Row style={{ paddingRight: "0" }}>
                <Col style={{ paddingRight: "0" }}>
                  <img
                    style={{ height: "250px", width: "100%" }}
                    src={require("./assets_user/detailproduk2.png")}
                  />
                </Col>
                <Col style={{ paddingRight: "0", paddingLeft: "0" }}>
                  <img
                    style={{ height: "250px", width: "100%" }}
                    src={require("./assets_user/detailproduk3.png")}
                  />
                </Col>
                <Col style={{ paddingLeft: "0", paddingRight: "0" }}>
                  <img
                    style={{ height: "250px", width: "100%" }}
                    src={require("./assets_user/detailproduk4.png")}
                  />
                </Col>
              </Row>
            </Row>
            <h1 style={{ marginTop: "25px", marginBottom: "25px" }}>
              House Astina
            </h1>
            <Row>
              <Col>
                <h4>Rp. 9.000.000 / Year</h4>
                <p>
                  Jl. Elang IV Permata Residence Bintaro, Pondok Aren, Tangerang
                  Selatan
                </p>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <p>3 / Bedrooms</p>
                    <img src={require("./assets_user/bedrooms.png")} />
                  </Col>
                  <Col>
                    <p>3 / Bathrooms</p>
                    <img src={require("./assets_user/bathrooms.png")} />
                  </Col>
                  <Col>
                    <p>Area</p>
                    <h5>1800 sqft</h5>
                  </Col>
                </Row>
              </Col>
            </Row>
            <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>
              Description
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button
              style={{
                float: "right",
                backgroundColor: "#5A57AB",
                marginRight: "40px",
                marginBottom: "40px",
                width: "150px",
                height: "40px",
                color: "white",
                borderRadius: "5px",
              }}
              type="submit"
              onClick={this.Show}
            >
              Book Now
            </button>
          </div>
        </div>

        <Modal show={this.state.showcheck} onHide={this.Close}>
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
              How Long you will stay
            </p>
          </div>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Check in</Form.Label>
                <input className="form-control"  type="date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Check out</Form.Label>
                <input className="form-control" type="date" />
              </Form.Group>
              <Button style={{marginTop:"10px",backgroundColor:"#5A57AB",width:'100%'}} type="submit">
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default produkdetail;
