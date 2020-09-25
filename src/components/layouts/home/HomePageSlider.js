import React, { Component } from 'react'

class HomePageSlider extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators mb-5" className="carousel slide" data-ride="carousel" >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100"
              src="https://demo.hasthemes.com/young-preview/young/assets/images/slider/slider-electronic-1.jpg"
              alt="First slide"
              style={{ height: 650 }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-white">First slide label1</h1>
              <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"
              src="https://demo.hasthemes.com/young-preview/young/assets/images/slider/slider-electronic-1.jpg"
              alt="First slide"
              style={{ height: 650 }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-white">First slide label2</h1>
              <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100"
              src="https://demo.hasthemes.com/young-preview/young/assets/images/slider/slider-electronic-1.jpg"
              alt="First slide"
              style={{ height: 650 }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="text-white">First slide label3</h1>
              <p className="text-white">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default HomePageSlider
