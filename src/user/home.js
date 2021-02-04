import React, { Component } from "react";
import "./style/home/home.scss";
import Header from "./common/header";

class home extends Component {
  render() {
    return (
      <div className="container-home">
        <Header />
        <div className="body">
          <div className="body-left">
            <div className="body-left-wrapping">
              <p id="body-left-typeofrent">Type of Rent</p>
              <div className="body-left-DayMonthYear">
                <div className="btn-type-of-rent">
                  <p className="text-type-of-rent">Day</p>
                </div>
                <div className="btn-type-of-rent">
                  <p className="text-type-of-rent">Month</p>
                </div>
                <div className="btn-type-of-rent">
                  <p className="text-type-of-rent">Year</p>
                </div>
              </div>
              <p id="body-left-Date">Date</p>
              <input className="body-left-Data" type="date" />
              <p id="body-left-PropertyRoom">Property Room</p>
              <p id="body-left-Bedroom">Bedroom</p>
              <div className="body-left-Bedroom-Wrapping">
                <div className="body-left-Bedroom-Number">
                  <p className="body-left-Number">1</p>
                </div>
                <div class="body-left-Bedroom-Number">
                  <p className="body-left-Number">2</p>
                </div>
                <div class="body-left-Bedroom-Number">
                  <p className="body-left-Number">3</p>
                </div>
                <div class="body-left-Bedroom-Number">
                  <p className="body-left-Number">4</p>
                </div>
                <div class="body-left-Bedroom-Number">
                  <p className="body-left-Number">5</p>
                </div>
              </div>
              <p id="body-left-Bathroom">Bathroom</p>
              <div className="body-left-Bathroom-Wrapping">
                <div className="body-left-Bathroom-Number">
                  <p className="body-left-Number">1</p>
                </div>
                <div class="body-left-Bathroom-Number">
                  <p className="body-left-Number">2</p>
                </div>
                <div class="body-left-Bathroom-Number">
                  <p className="body-left-Number">3</p>
                </div>
                <div class="body-left-Bathroom-Number">
                  <p className="body-left-Number">4</p>
                </div>
                <div class="body-left-Bathroom-Number">
                  <p className="body-left-Number">5</p>
                </div>
              </div>
              <p id="body-left-Aminities">Amenities</p>
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
              <p id="body-left-Budget">Budget</p>
              <div className="TotalBudget">
                <p id="LessThan">Less Than IDR.</p>
                <input id="InputTotalBudget" type="number" />
              </div>
              <button className="body-left-button">Apply</button>
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
                    <p className="body-right-price">Rp. 9.000.000</p>
                    &nbsp;
                    <p className="body-right-simbol">/</p>
                    &nbsp;
                    <p className="body-right-year">Year</p>
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
                    <p className="body-right-price">Rp. 9.000.000</p>
                    &nbsp;
                    <p className="body-right-simbol">/</p>
                    &nbsp;
                    <p className="body-right-year">Year</p>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
