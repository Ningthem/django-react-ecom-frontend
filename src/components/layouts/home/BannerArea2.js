import React, { Component } from 'react'

class BannerArea2 extends Component {
  render() {
    return (
      <div className="banner-gradient-area pt-40 pb-40">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="banner-zoom-wrap">
                <a className="zoom-img" href="# ">
                  <img alt="image" src="/images/banner-5.png" />
                  <img alt="image" src="/images/banner-5.png" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="banner-zoom-content ml-90">
                <h2>Minolta 20 Mega Pixels <br /> Wifi Digital Camera</h2>
                <div className="btn-style-3 btn-hover-2">
                  <a className="animated bs3-white-text bs3-yellow-bg bs3-ptb bs3-border-radius ptb-2-white-hover" href="# ">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerArea2
