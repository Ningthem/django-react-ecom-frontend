import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function BootstrapCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100"
          src="/images/carousel/slider-electronic-2.jpg"
          alt="First slide"
          style={{ height: 650 }}
        />
        <Carousel.Caption>
          <h1 className="text-white">Shop for the lates upcoming Mobile Phones</h1>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src="/images/carousel/pexels-nick-demou-2473183.jpg"
          alt="First slide"
          style={{ height: 650, objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h1>Get the perfect laptop of your choice</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"
          src="/images/carousel/galaxy-tab-s7-and-buds-live-lifestyle.jpg"
          alt="First slide"
          style={{ height: 650, objectFit: "cover" }}
        />

        <Carousel.Caption>
          <h1>Need a companion? Try the new Tablets here</h1>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;