import React, { Component } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Container,
  Form,
  Dropdown,
} from "react-bootstrap";
import "../style/home/home.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showlogin: false,
      showregister: false,
    };
  }

  ShowLogin = () => {
    this.setState({
      showlogin: true,
    });
  };

  ShowRegister = () => {
    this.setState({
      showregister: true,
    });
  };

  CloseLogin = () => {
    this.setState({
      showlogin: false,
    });
  };

  CloseRegister = () => {
    this.setState({
      showregister: false,
    });
  };

  ClickHereLogin = () => {
    this.setState({
      showlogin: false,
    });
    this.setState({
      showregister: true,
    });
  };

  ClickHereRegister = () => {
    this.setState({
      showregister: false,
    });
    this.setState({
      showlogin: true,
    });
  };
  render() {
    return (
      <>
        {/* <div className="Container"> */}
        <Row className="header">
          {/* <div className="header "> */}
          <Col className="header-left">
            {/* <div className="header-left "> */}
            <img
              className="header-left-logo"
              src={require("../assets_user/Logo.PNG")}
            />
            {/* </div> */}
          </Col>
          <Col className="header-center">
            {/* <div className="header-center "> */}
            <div className="header-pembungkus-search">
              <input
                className="header-search"
                type="text"
                placeholder="Daerah...."
              />
              <div className="wrapper-header-search-logo">
                <img
                  className="header-center-logo-search"
                  src={require("../assets_user/Vector.png")}
                />
              </div>
            </div>
            {/* </div> */}
          </Col>
          <Col className="header-right">
            {/* <div className="header-right "> */}
            {/* <div className="header-signin" onClick={this.ShowLogin}>
              <p className="Text-sigin">Sign in</p>
            </div>
            <div className="header-signup" onClick={this.ShowRegister}>
              <p className="Text-signup">Sign up</p>
            </div> */}
            <div className="wrapper-img-after-login">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  className="btn-success"
                  id="dropdown-basic"
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50px",
                    }}
                    src={require("../assets_user/afterlogin-image.jpg")}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="/Profile">
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Item href="#/action-2">My Booking</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">History</Dropdown.Item>
                  <div
                    style={{
                      height: "2px",
                      width: "100%",
                      backgroundColor: "#C3C4CB",
                    }}
                  />
                  <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* </div> */}
          </Col>
          {/* </div> */}
        </Row>

        {/* //Register */}
        <Modal show={this.state.showregister} onHide={this.CloseRegister}>
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
              Sign Up
            </p>
          </div>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>List As</Form.Label>
                  <select className="form-control">
                    <option>-- Pilih --</option>
                    <option>Tenant</option>
                    <option>Customer</option>
                  </select>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Gender</Form.Label>
                  <select className="form-control">
                    <option>-- Pilih --</option>
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" placeholder="No. Phone" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    backgroundColor: "#5A57AB",
                  }}
                >
                  Save Changes
                </Button>
                <p style={{ textAlign: "center", marginTop: "5px" }}>
                  already have an account?{" "}
                  <Link onClick={this.ClickHereRegister}>Klik here</Link>
                </p>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Login */}
        <Modal show={this.state.showlogin} onHide={this.CloseLogin}>
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
              Sign In
            </p>
          </div>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group>
                <Button
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    backgroundColor: "#5A57AB",
                  }}
                >
                  Save Changes
                </Button>
                <p style={{ textAlign: "center", marginTop: "5px" }}>
                  Don't have an account?{" "}
                  <Link onClick={this.ClickHereLogin}>Klik here</Link>
                </p>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Header;
