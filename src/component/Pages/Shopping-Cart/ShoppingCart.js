import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import emptycart from '../../../assets/images/empty-cart.png';
// Redux
import {connect} from 'react-redux';
import './ShoppingCart.css';
import HeaderLayout from '../../Layout/LayoutHeader/HeaderLayout';
import CartItem from '../../CartItem/CartItem';
import {UrlNames} from '../../../UrlNames';

function ShoppingCart({cart}) {
  // Total Price
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    // Loop item in cart and return quantity , price affter changes
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems,]);
  if (cart.length === 0) {
    return (
            <>
              <HeaderLayout/>
              <img className="cart-empty" width="500px"
                   src={emptycart}
                   alt="cart empty"/>
              <Link to={`${UrlNames.SHOP}`}>
                <button className="btn-return">Return To Shop</button>
              </Link>
            </>
    );
  }
  return (
          <>
            <HeaderLayout/>

            <div className="shopping__cart">
              <div className="shopping__cart-title">
                <p>Home</p>
                <span>Cart</span>
              </div>
              <div className="shopping__cart-content">
                <div className="cart-content-header">
                  <p className="pro">PRODUCT</p>
                  <p className="pri">PRICE</p>
                  <p className="quan">QUANTITY</p>
                  <p className="subtt">SUBTOTAL</p>
                </div>

                {/*------ Loop And Render CartItem------ */}

                {cart.map((item) => {
                  return (
                          <CartItem key={item.id} item={item}/>
                  );
                })}

                <div className="cart-total">
                  <h2>CART TOTALS</h2>
                </div>
                <div className="checkout-qty" id="checkout-qty">
                  <h3>SUBTOTAL</h3>
                  <span>${totalPrice}.00</span>
                </div>
                <div style={{marginTop: '-48px'}} className="checkout-qty">
                  <h3>QUANTITY</h3>
                  <span style={{marginLeft: '85px'}}>{totalItems} Items</span>
                </div>
                <div style={{marginTop: '-35px'}} className="checkout-qtyy" id="form-radio">
                  <h3 className="spi" style={{marginTop: '33px'}}>SHIPPING</h3>
                  <div className="form-radio-wrapper">
                    <input type="radio" id="huey" value="huey" checked/>
                    <label>Free shipping</label>
                    <input type="radio" id="huey"/>
                    <label>Local pickup</label>
                    <input type="radio" id="huey"/>
                    <label>Flat rate</label>
                  </div>
                </div>
                <div style={{marginTop: '38px'}} className="checkout-qty fix" id="checkout-qty">
                  <h3>TOTAL</h3>
                  <h5 style={{marginLeft: '125px'}}>${totalPrice}.00</h5>
                </div>
                <Link to={`${UrlNames.CHECKOUT}`}>
                  <p className="checkout">Proceed To Checkout</p>
                </Link>
              </div>
            </div>

          </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};
export default connect(mapStateToProps)(ShoppingCart);
