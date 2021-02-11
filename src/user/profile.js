import React, { Component } from "react";
import Header from "./common/header";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  UserIcon,
  EmailIcon,
  PasswordIcon,
  GenderIcon,
  PhoneIcon,
  TenantIcon,
  AddressIcon,
} from "./assets_user";

const Icon = ({ img }) => {
  return (
    <div>
      <img src={img} alt="icon" />
    </div>
  );
};

const ParticleData = ({ img, content, text }) => {
  return (
    <Row>
      <Col>
        <Icon img={img} />
      </Col>
      <Col md={10}>
        <h5>{content}</h5>
        <p>{text}</p>
      </Col>
    </Row>
  );
};

const AtomData = ({}) => {
  return (
    <>
      <ParticleData
        img={UserIcon}
        content={"faishal albarkah"}
        text={"Username"}
      />
      <ParticleData
        img={EmailIcon}
        content={"faishalalbarkah1414@gmail.com"}
        text={"Email"}
      />

      <ParticleData img={PasswordIcon} content={"Password"} text={"Password"} />
      <ParticleData img={GenderIcon} content={"Laki-laki"} text={"Gender"} />
      <ParticleData img={TenantIcon} content={"Tenant"} text={"Status"} />
      <ParticleData img={PhoneIcon} content={"085921311291"} text={"Phone"} />
      <ParticleData
        img={AddressIcon}
        content={"Citra Raya Panongan"}
        text={"Address"}
      />
    </>
  );
};

class profile extends Component {
  constructor() {
    super();
    this.state = {
      changepassword: false,
    };
  }

  showChangePassword = () => {
    this.setState({
      changepassword: true,
    });
  };

  closeChangePassword = () => {
    this.setState({
      changepassword: false,
    });
  };
  render() {
    return (
      <>
        <div className="container-home">
          <Header />
          <Row className="body">
            <div className="body-profile">
              <div className="wrapper-profile">
                <Row md={12}>
                  <Col md={6} className="wrapper-profile-left">
                    <h2>Personal Info</h2>
                    <AtomData showChangePassword={this.showChangePassword} />
                  </Col>
                  <Col md={6} className="wrapper-profile-right">
                    <div className="wrapper-image-profile">
                      <img
                        src={require("./assets_user/personal_info/Photo_Profile.png")}
                      />
                      <button>Change Photo Profile</button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>
        </div>

        {/* Modal Change Password */}
        <Modal
          show={this.state.changepassword}
          onHide={this.closeChangePassword}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeChangePassword}>
              Close
            </Button>
            <Button variant="primary" onClick={this.closeChangePassword}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default profile;
