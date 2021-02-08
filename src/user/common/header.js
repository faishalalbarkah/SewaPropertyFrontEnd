import React, { Component } from "react";
import { Modal, Button, Row, Col, Container, Form } from "react-bootstrap";
import "../style/home/home.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showlogin: false,
    };
  }

  ShowLogin = () => {
    this.setState({
      showlogin: true,
    });
  };

  CloseLogin = () => {
    this.setState({
      showlogin: false,
    });
  };
  render() {
    return (
      <>
        {/* <div className="Container"> */}
        <Container>
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
              <div className="header-signin" onClick={this.ShowLogin}>
                <p className="Text-sigin">Sign in</p>
              </div>
              <div className="header-signup">
                <p className="Text-signup">Sign up</p>
              </div>
              {/* <div className="wrapper-img-after-login">
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              src={require("../assets_user/afterlogin-image.jpg")}
            />
          </div> */}
              {/* </div> */}
            </Col>
            {/* </div> */}
          </Row>
          {/* //Signin */}
        </Container>
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
                  Don't have an account? <Link>Klik here</Link>
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
