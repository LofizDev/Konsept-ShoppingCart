import React,{useState,useEffect} from 'react';
import CloseIcon from '@material-ui/icons/Close';

// Redux
import { connect } from 'react-redux'
import { removeFromCart,addToCart,minusFromCart } from '../../redux/shopping/shopping-action' 


const CartItem = ({item, removeFromCart, addToCart, minusFromCart }) => {
    const [totalPrice, setTotalPrice] = useState(0)
  
    useEffect(() => {
      let price = 0
  
      // Loop item in cart and return quantity , price affter changes    
        price += item.qty * item.price

      setTotalPrice(price)
  
    }, [item, totalPrice, setTotalPrice,])
  
      return(
            <div className="shopping__cart-item">
                <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}} className="shopping-cart-img">
                    <p className='cls' onClick={() => removeFromCart(item.id)} ><CloseIcon/></p>
                    <img className='shopping-img' src={item.img} alt='item-img' width='232px'  />
                    <h5>{item.name}</h5>
                </div>
                    <p className='price-p'>${item.price}</p>
                <div class="quantity" style={{display:'flex'}}>
                    <p onClick={() => minusFromCart(item.id)} className="add-btn" style={{fontSize: '24px', color:'#1d1d1d', textAlign: 'center'}}>‒</p>
                    <span style={{padding:'0 20px',textAlign: 'center'}}>{item.qty}</span>
                    <p onClick={() => addToCart(item.id)} className="minus-btn" style={{fontSize: '24px', color:'#1d1d1d'}}>+</p>
                </div>
                    <p className='subtt-p'>${totalPrice}.00</p>
         </div>
        )
       }


const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        addToCart: (id) => dispatch(addToCart(id)),
        minusFromCart: (id) => dispatch(minusFromCart(id))
    }
}


export default connect(null,mapDispatchToProps)(CartItem)