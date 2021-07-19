import {useState} from 'react';
// Redux
import {addToCart} from '../../redux/shopping/shopping-action';
import {connect} from 'react-redux';
import Header from '../Layout/LayoutHeader/HeaderLayout';
import './Detail.css';
// Toastify
import {injectStyle} from 'react-toastify/dist/inject-style';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// CALL IT ONCE IN MY APP
if (typeof window !== 'undefined') {
  injectStyle();
}

function Detail({current, addToCart}) {
  // Change content when click
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  // Toastify success add to cart
  const notify = () => toast.success('successfully!');
  return (
          <>
            <Header/>
            <div className="shopping__cart-title">
              <p>Home</p>
              <p>{current.sub}</p>
              <span>{current.name}</span>
            </div>
            <div className="detail__container">
              <div className="detail__container-left">
                <img width="555px" alt="detail-img" src={current.img}/>
              </div>
              <div className="detail__container-right">
                <div className="detail-right-content">
                  <h1>{current.name}</h1>
                  <span className="detail-price">${current.price}</span>
                  <p className="detail-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi.</p>
                  <div className="detail-btn">
                    <div style={{userSelect: 'none', cursor: 'pointer', margin: '25px 0px '}} onClick={() => {
                      addToCart(current.id);
                      notify();
                    }} className="detail-btn-add">Add To Cart
                    </div>
                    <ToastContainer autoClose={1500}/>
                  </div>
                  <div className="detail-key">
                    <div className="detail-key-p">
                      <span>SKU:</span>
                      <p>0356</p>
                    </div>
                    <div className="detail-key-p">
                      <span>CATEGORY:</span>
                      <p>{current.sub}</p>
                    </div>
                    <div className="detail-key-p">
                      <span>TAGS:</span>
                      <p>{current.sub},</p>
                      <p style={{marginLeft: '5px'}}>Vitage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-selector">
              <p
                      className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                      onClick={() => toggleTab(1)}
              >DESCRIPTION
              </p>

              <p
                      className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                      onClick={() => toggleTab(2)}
              >ADDITIONAL INFORMATION
              </p>

              <p
                      className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                      onClick={() => toggleTab(3)}
              >REVIEWS
              </p>
            </div>
            <div className="content-selector">

              <div id="tab1" className={toggleState === 1 ? 'content-tabs  active-content-tabs' : 'content-tabs'}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra massa. Tincidunt augue
                  interdum velit euismod in pellentesque massa placerat. Pharetra diam sit amet nisl suscipit adipiscing
                  Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nullam eget felis eget nunc lobortis
                  mattis.<br/>Nisi vitae suscipit tellus mauris. Facilisi nullam vehicula ipsum.</p>
              </div>

              <div id="tab2" className={toggleState === 2 ? 'content-tabs  active-content-tabs' : 'content-tabs'}>
                <h6 className="tab2-h61">WEIGHT</h6>
                <span>8 kg</span>
                <h6 className="tab2-h6">DISMENSIONS</h6>
                <span>40 × 40 × 65 cm</span>
              </div>

              <div id="tab3" className={toggleState === 3 ? 'content-tabs  active-content-tabs' : 'content-tabs'}>
                <h6>ADD A REVIEW</h6>
                <p>You Your email address will not be published. Required fields are marked *
                  <br/>
                  Your Rating</p>
                <input className="tabinput" type="text" placeholder="Your Review *"/>
                <div className="input-parent">
                  <input type="text" placeholder="Your Name *"/>
                  <input type="text" placeholder="Your Email *"/>
                </div>
                <button>Submit</button>
              </div>
            </div>
          </>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
