import {Link} from 'react-router-dom';
import view from '../../assets/images/view.svg';
import love from '../../assets/images/love.svg';
// Toastify
import {injectStyle} from 'react-toastify/dist/inject-style';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Redux
import {connect} from 'react-redux';
import {addToCart, loadCurrentItem} from '../../redux/shopping/shopping-action';
import {UrlNames} from '../../UrlNames';
// CALL IT ONCE IN MY APP
if (typeof window !== 'undefined') {
  injectStyle();
}

function ShopItem({product, addToCart, loadCurrentItem}) {
  // Toastify success add to cart
  const notify = () => toast.success('successfully!');
  return (
          <>
            <ToastContainer className="foo" autoClose={1200}/>
            <div className="new__product-item shop-item">
              <div className="bai">
                <img width="293px" alt="product" src={product.img}/>
                <div className="overlay__item">
                  <p style={{userSelect: 'none'}} onClick={() => {
                    addToCart(product.id);
                    notify();
                  }}>Add To Cart</p>
                </div>
                <div className="icon__cart">
                  <img className="love" alt="icon" src={love}/>
                  <Link to={`${UrlNames.PRODUCT_ID}${product.id}`}>
                    <img alt="icon" onClick={() => loadCurrentItem(product)} className="view" src={view}/>
                  </Link>
                </div>

              </div>
              <div className="new__product-content">
                <h5>{product.name}</h5>
                <p>${product.price}</p>
              </div>
              <span>{product.sub}</span>
            </div>
          </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  };
};
export default connect(null, mapDispatchToProps)(ShopItem);
