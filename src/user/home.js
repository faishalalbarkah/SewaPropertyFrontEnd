import React, { Component } from "react";
import "./style/home/home.scss";

class home extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="header">
          <div className="header-left">
            <img
              className="header-left-logo"
              src={require("./assets_user/Logo.PNG")}
            />
          </div>
          <div className="header-center">
            <div className="header-pembungkus-search">
              <input
                className="header-search"
                type="text"
                placeholder="Daerah"
              />
              <img
                className="header-center-logo-search"
                src={require("./assets_user/Vector.png")}
              />
            </div>
          </div>
          <div className="header-right">
            <div className="header-signin">
              <p className="Text-sigin">Sign in</p>
            </div>
            <div className="header-signup">
              <p className="Text-signup">Sign up</p>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="body-left">
            <div className="body-left-wrapping">
              <p id="body-left-typeofrent">Type of Rent</p>
              <div className="body-left-DayMonthYear">
                <div className="body-left-Day">
                  <p id="Day">Day</p>
                </div>
                <div className="body-left-Month">
                  <p id="Month">Month</p>
                </div>
                <div className="body-left-Year">
                  <p id="Year">Year</p>
                </div>
              </div>
              <p id="body-left-Date">Date</p>
            </div>
          </div>
          <div className="body-right">
            <div className="body-right-wrapping">
              <div className="body-right-content">
                <img
                  className="body-right-image-content"
                  src={require("./assets_user/property.jpg")}
                />
                <div className="body-right-furnished">
                  <p className="body-right-furnished-text">Furnished</p>
                </div>
                <div className="body-right-description">
                  <div className="body-right-price-year">
                    <p id="body-right-price">Rp. 9.000.000</p>
                    &nbsp;
                    <p id="body-right-simbol">/</p>
                    &nbsp;
                    <p id="body-right-year">Year</p>
                  </div>
                  <div className="body-right-propertyroom">
                    <p id="body-right-beds">3 Beds,</p>
                    &nbsp;
                    <p id="body-right-bath">2 Baths,</p>
                    &nbsp;
                    <p id="body-right-sqft">1,800 sqft</p>
                  </div>
                  <div className="body-right-location">
                    <p id="body-right-kota">Tangerang Selatan</p>
                    &nbsp;
                    <p id="body-right-kecamatan"> Pondok Aren</p>
                  </div>
                </div>
              </div>
              <div className="body-right-content"></div>
              <div className="body-right-content"></div>
              <div className="body-right-content"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
