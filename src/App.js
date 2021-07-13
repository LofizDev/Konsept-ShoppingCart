import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom'
import ScrollToTopRouter from './component/Main/ScrollToTopRouter'
import ScrollToTop from './component/Main/ScrollToTop';
import Footer from '.././src/component/Layout/LayoutFooter/Footer/Footer'
import Main from "./component/Main/Main";
import ShoppingCart from './component/Pages/Shopping-Cart/ShoppingCart'
import PageNotFound from "./component/HomePage/PageNotFound/PageNotFound";
import Detail from './component/Detail/Detail';
import Shop from './component/ShopCategory/Shop'
import Contact from './component/Pages/Contact/Contact'
import About from './component/Pages/About/About'
import checkout from './component/Pages/Checkout/Checkout'
// Redux
import { connect } from 'react-redux'

function App({ current }) {
  
  return (
   <>
    <Router>
      <ScrollToTop/>
      <ScrollToTopRouter/>
       <Switch>
       <Route path='/'exact component={Main}></Route>
       <Route path='/CART' exact component={ShoppingCart}></Route>
       <Route path='/SHOP' exact component={Shop}></Route>
       <Route path='/ABOUT' exact component={About}></Route>
       <Route path='/CONTACT' exact component={Contact}></Route>
       <Route path='/CHECKOUT' exact component={checkout}></Route>

       <Route path='/pagenotfound' component={PageNotFound}></Route>
       <Route path='/product'  component={Detail}></Route>
       {!current ? (
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={Detail} />
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
