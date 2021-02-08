import React, { Component } from "react";
import "./style/home/home.scss";
import Header from "./common/header";
import { Col, Row } from "react-bootstrap";

class home extends Component {
  render() {
    return (
      <div className="container-home">
        <Header />
        <Row className="body">
          <Col md={4} className="body-left">
            <div className="body-left-wrapping">
              <p id="body-left-typeofrent">Type of Rent</p>
              <Row className="body-left-DayMonthYear">
                <Col className="btn-type-of-rent">
                  <p className="text-type-of-rent">Day</p>
                </Col>
                <Col className="btn-type-of-rent">
                  <p className="text-type-of-rent">Month</p>
                </Col>
                <Col className="btn-type-of-rent">
                  <p className="text-type-of-rent">Year</p>
                </Col>
              </Row>
              <p id="body-left-Date">Date</p>
              <input className="body-left-Data" type="date" />
              <p id="body-left-PropertyRoom">Property Room</p>
              <p id="body-left-Bedroom">Bedroom</p>
              <Row className="body-left-Bedroom-Wrapping">
                <Col className="body-left-Bedroom-Number">
                  <p className="body-left-Number">1</p>
                </Col>
                <Col className="body-left-Bedroom-Number">
                  <p className="body-left-Number">2</p>
                </Col>
                <Col className="body-left-Bedroom-Number">
                  <p className="body-left-Number">3</p>
                </Col>
                <Col className="body-left-Bedroom-Number">
                  <p className="body-left-Number">4</p>
                </Col>
                <Col className="body-left-Bedroom-Number">
                  <p className="body-left-Number">5</p>
                </Col>
              </Row>
              <p id="body-left-Bathroom">Bathroom</p>
              <Row className="body-left-Bathroom-Wrapping">
                <Col className="body-left-Bathroom-Number">
                  <p className="body-left-Number">1</p>
                </Col>
                <Col className="body-left-Bathroom-Number">
                  <p className="body-left-Number">2</p>
                </Col>
                <Col className="body-left-Bathroom-Number">
                  <p className="body-left-Number">3</p>
                </Col>
                <Col className="body-left-Bathroom-Number">
                  <p className="body-left-Number">4</p>
                </Col>
                <Col className="body-left-Bathroom-Number">
                  <p className="body-left-Number">5</p>
                </Col>
              </Row>
              <p id="body-left-Aminities">Amenities</p>
              {/* <Row> */}
              <div className="body-left-furnished">
                <p id="body-left-furnished-text">Furnished</p>
                <input type="checkbox" />
              </div>
              <div className="body-left-PetAllowed">
                <p id="body-left-PetAllowed-text">Pet Allowed</p>
                <input type="checkbox" />
              </div>
              <div className="body-left-sharedaccomodation">
                <p id="body-left-sharedaccomodation-text">
                  Shared Accomodation
                </p>
                <input type="checkbox" />
              </div>
              {/* </Row> */}
              <p id="body-left-Budget">Budget</p>
              <div className="TotalBudget">
                <p id="LessThan">Less Than IDR.</p>
                <input id="InputTotalBudget" type="number" />
              </div>
              <button className="body-left-button">Apply</button>
            </div>
          </Col>
          <Col md={8} className="body-right">
            <Row className="body-right-wrapping">
              <div className="body-right-content">
                <div style={{ height: "150px" }}>
                  <img
                    className="body-right-image-content"
                    src={require("./assets_user/property.jpg")}
                  />
                  <div className="body-right-furnished">
                    <p className="body-right-furnished-text">Furnished</p>
                  </div>
                </div>
                <Col className="body-right-description">
                  <Row className="body-right-price-year">
                    <Col className="body-right-price">Rp.9.000.000 / Year</Col>
                    {/* <Col xs={2} className="body-right-simbol"></Col>
                    <Col xs={4} className="body-right-year"></Col> */}
                  </Row>
                  <Row className="body-right-propertyroom">
                    <Col id="body-right-beds">
                      3 Beds / 2 Baths / 1,800 sqft
                    </Col>

                    {/* <Col id="body-right-bath">2 Baths,</Col>

                    <Col id="body-right-sqft">1,800 sqft</Col> */}
                  </Row>
                  <Row className="body-right-location">
                    <Col id="body-right-city">
                      Tangerang Selatan / Pondok Aren
                    </Col>
                  </Row>
                </Col>
              </div>

              <div className="body-right-content">
                <div style={{ height: "150px" }}>
                  <img
                    className="body-right-image-content"
                    src={require("./assets_user/property.jpg")}
                  />
                  <div className="body-right-furnished">
                    <p className="body-right-furnished-text">Furnished</p>
                  </div>
                </div>
                <Col className="body-right-description">
                  <Row className="body-right-price-year">
                    <Col className="body-right-price">Rp.9.000.000 / Year</Col>
                    {/* <Col xs={2} className="body-right-simbol"></Col>
                    <Col xs={4} className="body-right-year"></Col> */}
                  </Row>
                  <Row className="body-right-propertyroom">
                    <Col id="body-right-beds">
                      3 Beds / 2 Baths / 1,800 sqft
                    </Col>

                    {/* <Col id="body-right-bath">2 Baths,</Col>

                    <Col id="body-right-sqft">1,800 sqft</Col> */}
                  </Row>
                  <Row className="body-right-location">
                    <Col id="body-right-city">
                      Tangerang Selatan / Pondok Aren
                    </Col>
                  </Row>
                </Col>
              </div>

              <div className="body-right-content">
                <div style={{ height: "150px" }}>
                  <img
                    className="body-right-image-content"
                    src={require("./assets_user/property.jpg")}
                  />
                  <div className="body-right-furnished">
                    <p className="body-right-furnished-text">Furnished</p>
                  </div>
                </div>
                <Col className="body-right-description">
                  <Row className="body-right-price-year">
                    <Col className="body-right-price">Rp.9.000.000 / Year</Col>
                    {/* <Col xs={2} className="body-right-simbol"></Col>
                    <Col xs={4} className="body-right-year"></Col> */}
                  </Row>
                  <Row className="body-right-propertyroom">
                    <Col id="body-right-beds">
                      3 Beds / 2 Baths / 1,800 sqft
                    </Col>

                    {/* <Col id="body-right-bath">2 Baths,</Col>

                    <Col id="body-right-sqft">1,800 sqft</Col> */}
                  </Row>
                  <Row className="body-right-location">
                    <Col id="body-right-city">
                      Tangerang Selatan / Pondok Aren
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
export default home;
