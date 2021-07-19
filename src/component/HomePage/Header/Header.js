import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/logo.png';
import './Header.css';
import {Link, NavLink} from 'react-router-dom';
import {HeaderData} from './HeaderData';
import user from '../../../assets/images/user.svg';
import love from '../../../assets/images/love.svg';
import cartt from '../../../assets/images/cart.webp';
// Redux
import {connect} from 'react-redux';

// ShowTab
function showTab() {
  const showw = document.querySelector('.slider');
  const showww = document.querySelector('.header');
  const showwww = document.querySelector('.category');
  showww.classList.toggle('changesSlider');
  showw.classList.toggle('changesSlider');
  showwww.classList.toggle('changesSlider');
}

function Header({cart}) {
  // Sticky Header
  const [stickyHeader, setStickyHeader] = useState(false);
  const changeBackGround = () => {
    window.scrollY >= 80 ? setStickyHeader(true)
            : setStickyHeader(false);
  };
  window.addEventListener('scroll', changeBackGround);
  //  Check How Many Item In Cart
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  // Show Navbar
  function shownavmobi() {
    const shownav = document.querySelector('.menu-mobi');
    shownav.classList.toggle('menu-mobi__active');
  }

  return (
          <div className={stickyHeader ? 'header activenav ' : 'header'}>

            <div className="header__wrapper">
              <div className="header__wrapper-left">
                <img width="165px" className="lgg" src={logo} alt="logo"/>
                <ul>
                  {HeaderData.map((item, index) => {
                    return (
                            <li key={index} id="header-link">
                              <NavLink activeClassName="teee" className={item.cName}
                                       to={item.path}>{item.title} </NavLink>
                            </li>
                    );
                  })}

                </ul>

              </div>
              <div className="header__wrapper-right">
                <img className="user" src={user} alt="icon"/>
                <img className="love" src={love} alt="icon"/>
                <Link to="/Cart">
                  <div className="count-cart">
                    <img width="22px" className="cart" src={cartt} alt="icon"/>
                    <span>{cartCount}</span>
                  </div>
                </Link>
                <div style={{userSelect: 'none'}} onClick={showTab} className="header-cart-tab">
                  <span>____</span>
                  ____
                </div>
                <div id="showmb" className="header-cart-tab-mobi" onClick={shownavmobi}>
                  <span>____</span>
                  ____
                </div>
              </div>
            </div>

            <div className="menu-mobi">
              <ul>
                {HeaderData.map((item, index) => {
                  return (
                          <li key={index}>
                            <Link className={item.cName} to={item.path}>{item.title} </Link>
                          </li>
                  );
                })}
                <li>
                  <Link to="/Cart">CART</Link>
                </li>
              </ul>

            </div>

          </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  };
};
export default connect(mapStateToProps)(Header);
