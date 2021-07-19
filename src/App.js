import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import ScrollToTopRouter from './component/Main/ScrollToTopRouter';
import ScrollToTop from './component/Main/ScrollToTop';
import Footer from '.././src/component/Layout/LayoutFooter/Footer/Footer';
import Main from './component/Main/Main';
import ShoppingCart from './component/Pages/Shopping-Cart/ShoppingCart';
import PageNotFound from './component/HomePage/PageNotFound/PageNotFound';
import Detail from './component/Detail/Detail';
import Shop from './component/ShopCategory/Shop';
import Contact from './component/Pages/Contact/Contact';
import About from './component/Pages/About/About';
import checkout from './component/Pages/Checkout/Checkout';
// Redux
import {connect} from 'react-redux';
import {UrlNames} from './UrlNames';

function App({current}) {
  return (
          <>
            <Router>
              <ScrollToTop/>
              <ScrollToTopRouter/>
              <Switch>
                <Route path={`${UrlNames.HOME}`} exact component={Main}/>
                <Route path={`${UrlNames.CART}`} exact component={ShoppingCart}/>
                <Route path={`${UrlNames.SHOP}`} exact component={Shop}/>
                <Route path={`${UrlNames.ABOUT}`} exact component={About}/>
                <Route path={`${UrlNames.CONTACT}`} exact component={Contact}/>
                <Route path={`${UrlNames.CHECKOUT}`} exact component={checkout}/>
                <Route path={`${UrlNames.NOT_FOUND}`} component={PageNotFound}/>
                <Route path={`${UrlNames.PRODUCT}`} component={Detail}/>
                {!current ? (
                        <Redirect to="/"/>
                ) : (
                        <Route exact path={`${UrlNames.PRODUCT_ID}`} component={Detail}/>
                )}

              </Switch>
            </Router>
            <Footer/>
          </>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};
export default connect(mapStateToProps)(App);
