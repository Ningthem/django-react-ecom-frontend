import React, { Component } from 'react'

class Facilities extends Component {
  render() {
    return (
      <div className="service-area bg-gray-2 section-padding-1 pt-70 pb-35">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-service text-center service-mrg-left mb-30">
                <div className="service-icon">
                  <i className=" ti-truck "></i>
                </div>
                <div className="service-content">
                  <h4>Freeship Wordwide</h4>
                  <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service text-center mb-30">
                <div className="service-icon">
                  <i className=" ti-gift "></i>
                </div>
                <div className="service-content">
                  <h4>Special Offers</h4>
                  <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service text-center mb-30">
                <div className="service-icon">
                  <i className=" ti-lock "></i>
                </div>
                <div className="service-content">
                  <h4>Order Protection</h4>
                  <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service text-center service-mrg-right mb-30">
                <div className="service-icon">
                  <i className=" ti-headphone-alt "></i>
                </div>
                <div className="service-content">
                  <h4>Professional Support</h4>
                  <p>In ac hendrerit turpis. Aliquam ultrices dolor dolor, at commodo diam feugiat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Facilities
