import React, { Component } from 'react'

class AboutTheSite extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="font-weight-bold">About the Site</h3>
        <hr />
        <p>
          Hi there, thanks for visiting my site. I am <b>Ningthem</b> and I am a Software Engineer. The site is developed using Django,
          React, and Redux. Although this site has the same functionality of an e-commerce site, the site is just for demo purposes
          only, to show the combination of Django as backend, and React as frontend.
          <br /> <br />
          So, the products and descriptions here
          may not be 100% accurate and if you order anything here, all will be delivered to you for free without any payment(just kidding).
          Although there can be tons of features added here, I have added some of the important features here to have a fully
          functional e-commerce site.
        </p>

        <h4 className="font-weight-bold">Some of the functionalities in the site are:</h4>
        <ol>
          <li>
            <i className="font-weight-bold">User Management:</i> Registration, Login/Logout
          </li>
          <li>
            <i className="font-weight-bold">Product:</i>  Detail View, Quick View in modal,Wishlist - add and remove, Add To Cart, Remove from Cart, Change cart quantity,
            Product Search, Filter Products by Category,Sort Products, Product Pagination, etc.
          </li>
          <li>
            <i className="font-weight-bold">Order:</i> Cart Management, CheckOut, Add Address, Order Review, Apply Coupon(added
            the only <b>SEASON10</b> coupon code for instant 10% discount), Place Order, Order History, etc.
          </li>
        </ol>

        <p>
          Please feel free to try out the site and play around some of the functionalities here. I had a lot of fun building this project.
          Also, I am planning to build some additional projects and continue learning more about Django and React.
          I do want to apologize in advance if you find any bugs. As this site is for demo purposes, it is not intensely tested.
          But I tried to reduce the bugs to the minimum.
        </p>

        <h4 className="font-weight-bold">Tech Stacks Used:</h4>

        <div className="row">
          <div className="col-3">
            <img src="/images/about-the-site/django.jpg" width="150px" alt="" />
          </div>
          <div className="col-3" style={{ paddingTop: 16 }}>
            <div className="react-logo-div">
              <img src="/images/about-the-site/react.gif" width="150px" style={{ marginTop: -17 }} alt="" />
            </div>
          </div>
          <div className="col-3" style={{ paddingTop: 16 }}>
            <img src="/images/about-the-site/redux.jpg" width="150px" alt="" />

          </div>
        </div>

        <b style={{ fontSize: 15 }}>Server Side: Django</b> in Python is used as a backend framework along with the below libraries:
        <ol>
          <li><i className="font-weight-bold">Django-Knox</i> - for Token-based authentication</li>
          <li><i className="font-weight-bold">Django REST Framework</i> - for implementing REST APIs</li>
          <li><i className="font-weight-bold">Django CORS Headers</i> - for CORS communication between server and client</li>
          <li><i className="font-weight-bold">Django Filters</i> - for product search, filters, ordering, etc.</li>
        </ol>


        <h5><b style={{ fontSize: 15 }}>Client-Side: React</b> is used for rendering client-side logic along with the below technologies.</h5>

        <ol>
          <li><i className="font-weight-bold">Redux</i> - for state management of components.</li>
          <li>React Classed based components and Function based components with <i className="font-weight-bold">React HOOKs</i> are used.</li>
          <li><i className="font-weight-bold">React Router DOM</i> - for routing to different pages.</li>
          <li><i className="font-weight-bold">React Bootstrap</i> for frontend design</li>
          <li><i className="font-weight-bold">Axios</i> for network calls</li>
          <li><i className="font-weight-bold">Redux Thunk</i> as middleware for Redux</li>
          <li><i className="font-weight-bold">Redux Devtools Extension</i> for Redux state check</li>
          <li><i className="font-weight-bold">Lazy loading</i> of Components</li>
        </ol>

        <h4><b>Future Improvements:</b></h4>
        <h5>I am thinking of adding <b>React Spring</b> library to animate the components for better visual effects and user experience.</h5>

      </div>
    )
  }
}

export default AboutTheSite
