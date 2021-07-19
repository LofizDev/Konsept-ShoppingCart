import React, {useEffect, useState} from 'react';
import logo from '../../../assets/images/logo.png';
import './HeaderLayout.css';
import {HeaderData} from '../../HomePage/Header/HeaderData';
import {Link, NavLink} from 'react-router-dom';
import user from '../../../assets/images/user.svg';
import love from '../../../assets/images/love.svg';
import cartt from '../../../assets/images/cart.webp';
// Redux
import {connect} from 'react-redux';
import {UrlNames} from '../../../UrlNames';

function HeaderLayout({cart}) {
  //Count Cart
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  // Show Navbar
  function shownavmobii() {
    const shownav = document.querySelector('#show-mobi');
    shownav.classList.toggle('menu-mobi__activee');
  }

  return (
          <div className="header__layout">
            <div className="contact-header">
              <p>Free shipping for orders over $59!</p>
              <p className="header-ct">Contact</p>
            </div>
            <div className="header__layout-wrapper">
              <div className="header__layout-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.977" height="17.686"
                     viewBox="-4.311 -0.833 17.977 17.686">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="3.708" cy="7.13" r="7.348"></circle>
                    <path d="M12.891 16.313l-3.994-3.994"></path>
                  </g>
                </svg>
                <input type="text" placeholder="SEARCH"/>
              </div>
              <div className="header__layout-mid">
                <div className="layout-mid-top">
                  <img width="165px" src={logo} alt="logo"/>
                </div>
                <div className="layout-mid-bot">
                  <ul>
                    {HeaderData.map((item, index) => {
                      return (
                              <li key={index}>
                                <NavLink activeClassName="teee" className={item.cName}
                                         to={item.path}>{item.title}</NavLink>
                              </li>
                      );
                    })}
                    <li>
                      <Link to={`${UrlNames.NOT_FOUND}`}>PORTFOLIO</Link>
                    </li>
                    <li>
                      <a href={`${UrlNames.NOT_FOUND}`}>BLOG</a>
                    </li>
                  </ul>
                  <div className="header-cart-tab-mobi" id="show__nav-mobi" onClick={shownavmobii}>
                    <span>____</span>
                    ____
                  </div>
                </div>

              </div>
              <div className="header__layout-right">
                <img className="user" alt="icon" src={user}/>
                <img className="love" alt="icon" src={love}/>

                <Link to={`${UrlNames.CART}`}>
                  <div className="count-cart">
                    <img width="22px" className="cart" alt="cart" src={cartt}/>
                    <span>{cartCount}</span>
                  </div>
                </Link>

              </div>
            </div>
            <ul id="show-mobi">
              {HeaderData.map((item, index) => {
                return (
                        <li key={index}>
                          <Link className={item.cName} to={item.path}>{item.title} </Link>
                        </li>
                );
              })}
              <li>
                <a href="PageNotFound">PORTFOLIO</a>
              </li>
              <li>
                <a href="PageNotFound">BLOG</a>
              </li>
            </ul>

          </div>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  };
};
export default connect(mapStateToProps)(HeaderLayout);
