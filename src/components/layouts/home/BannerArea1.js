import React, { Component } from 'react'

class BannerArea1 extends Component {
  render() {
    return (
      <div className="banner-area pt-50 pb-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="banner-wrap banner-zoom mb-30">
                <div className="banner-img">
                  <a href="# "><img src="/images/banner-2.jpg" alt="banner" /></a>
                </div>
                <div className="banner-content-1 banner-position-1">
                  <h5>Gaming Headset for PS4</h5>
                  <h2 className="yellow">Sale Off 30%</h2>
                  <span>only $138.00</span>
                  <div className="btn-style-3 btn-hover-2">
                    <a className="animated bs3-white-text bs3-yellow-bg bs3-ptb-2 bs3-border-radius ptb-2-white-hover" href="# ">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="banner-wrap banner-zoom mb-30">
                <div className="banner-img">
                  <a href="# "><img src="/images/banner-3.jpg" alt="banner" /></a>
                  <div className="banner-badge">
                    <span>-25%</span>
                  </div>
                </div>
                <div className="banner-content-2 banner-position-2">
                  <h2><a href="# ">New Orginal HtBook Air</a></h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="banner-wrap banner-zoom mb-30">
                <div className="banner-img">
                  <a href="# "><img src="/images/banner-4.jpg" alt="banner" /></a>
                </div>
                <div className="banner-content-1 banner-position-1">
                  <h5>HT COOLPIX B500 Digital Camera</h5>
                  <h2 className="lightblue">Off 20%</h2>
                  <span>only $138.00</span>
                  <div className="btn-style-3 btn-hover-2">
                    <a className="animated bs3-white-text bs3-yellow-bg bs3-ptb-2 bs3-border-radius ptb-2-white-hover" href="# ">Shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerArea1
