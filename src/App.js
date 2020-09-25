import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';
import { loadUser } from './redux/actions/authActions';

// Layouts
import Header from './components/layouts/Header';
import FooterSmall from './components/layouts/FooterSmall';
import Toastr from './components/layouts/Toastr';

// Common
import ScrollToTop from './components/common/ScrollToTop';
import PageLoader from './components/common/PageLoader';

// Utility 
import history from './utility/history';

// Pages 
import MobileView from './pages/MobileView';

// LAZY LOAD ---
// Pages
const Signup = React.lazy(() => import('./pages/Signup'));
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Products = React.lazy(() => import('./pages/Products'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Wishlist = React.lazy(() => import('./pages/Wishlist'));
const About = React.lazy(() => import('./pages/AboutTheSite'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Common
const AuthRoute = React.lazy(() => import('./components/common/AuthRoute'));
const PrivateRoute = React.lazy(() => import('./components/common/PrivateRoute'));

// Product
const ProductDetail = React.lazy(() => import('./components/products/ProductDetail'));
const ProductsFilter = React.lazy(() => import('./components/products/ProductsFilter'));

// Order
const Address = React.lazy(() => import('./components/order/Address'));
const ReviewOrder = React.lazy(() => import('./components/order/ReviewOrder'));
const OrderSuccess = React.lazy(() => import('./components/order/OrderSuccess'));
const OrderDetail = React.lazy(() => import('./components/order/OrderDetail'));
const AllOrders = React.lazy(() => import('./components/order/AllOrders'));

axios.defaults.baseURL = "https://djangoreactecom.pythonanywhere.com/api";

class App extends Component {
  state = {
    isMobile: false,
  }
  componentDidMount() {
    const authToken = localStorage.getItem('authToken');
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    if (authToken) {
      store.dispatch(loadUser());  // Cart and Wishlist are loaded inside loadUser
    }

    function detectMob() {
      return ((window.innerWidth <= 800));
    }
    if (detectMob()) {
      this.setState({ isMobile: true });
    }
  };

  render() {
    // Show if mobile
    if (window.innerWidth <= 800) {
      return (
        <MobileView />
      )
    }
    return (
      <Provider store={store}>
        <Router history={history}>
          <ScrollToTop>
            <Toastr />
            <Header />
            <div className="min-vh-100">
              <React.Suspense fallback={<PageLoader />} >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <AuthRoute exact path="/signup" component={Signup} />
                  <AuthRoute exact path="/login" component={Login} />
                  <PrivateRoute exact path="/products" component={Products} />
                  <Route exact path="/products-filter/(search)?/:search?/(category)?/:category?/(ordering)?/:ordering?/(page)?/:page?" component={ProductsFilter} />
                  <Route exact path="/products/:slug" component={ProductDetail} />
                  <PrivateRoute exact path="/cart" component={Cart} />
                  <PrivateRoute exact path="/address" component={Address} />
                  <PrivateRoute exact path="/review-order" component={ReviewOrder} />
                  <PrivateRoute exact path="/order-success/:order_id" component={OrderSuccess} />
                  <PrivateRoute exact path="/order/detail/:order_id" component={OrderDetail} />
                  <PrivateRoute exact path="/wishlist" component={Wishlist} />
                  <PrivateRoute exact path="/all-orders" component={AllOrders} />
                  <Route exact path="/about-the-site" component={About} />
                  <Route exact path="/contact" component={Contact} />

                </Switch>
              </React.Suspense>
            </div>
            <FooterSmall />
          </ScrollToTop>
        </Router>
      </Provider>
    )
  }
}

export default App;
