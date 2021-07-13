// Toastify
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { connect } from 'react-redux'
import { addToCart } from '../../../../redux/shopping/shopping-action'

// CALL IT ONCE IN MY APP
if (typeof window !== "undefined") {
    injectStyle();
}

function Product({ product, addToCart }) {
    // Toastify success add to cart
    const notify = () => toast.success("successfully!")
    return (

        <div style={{userSelect: 'none'}} className="swiper__content-h5">
            <img className="swiper-lazy" src={product.img} alt='swiper-lazy'/>
            <h6>{product.name}</h6>
            <div className="pri-ani">
                <p>{product.price}</p>
                <p className='tocart' onClick={() => { addToCart(product.id); notify() }} >Add To Cart</p>
            </div>
            <span>{product.sub}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(null, mapDispatchToProps)(Product)