import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "../style/home/home.scss";

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
        <div className="header">
          <div className="header-left">
            <img
              className="header-left-logo"
              src={require("../assets_user/Logo.PNG")}
            />
          </div>
          <div className="header-center">
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
          </div>
          <div className="header-right">
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
          </div>
        </div>
        {/* //Signin */}
        <Modal show={this.state.showlogin} onHide={this.CloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.CloseLogin}>
              Close
            </Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Header;
