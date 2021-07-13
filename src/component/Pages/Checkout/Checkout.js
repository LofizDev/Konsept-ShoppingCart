import React, {useState,useEffect} from 'react'
import Header from '../../Layout/LayoutHeader/HeaderLayout'
import './Checkout.css'
import Item from './Checkout-item/Item'
import { Formik,Form } from 'formik'
import { connect } from 'react-redux'
import * as Yup from 'yup';
import TextField from './TextField'

function Checkout({ cart }) {
    const [total,setTotal] = useState(0)

 useEffect(() => {
    let items = 0
    let price = 0

    cart.forEach((cart) => {
      items += cart.qty
      price += cart.qty * cart.price

    })
    setTotal(price)

  }, [cart])
  const validate = Yup.object({
    fullname: Yup.string()
      .min(10, 'Must be 10 characters or less')
      .required('Required'),
    address: Yup.string()
      .min(10, 'Must be 10 characters or less')
      .required('Required'),
    phone: Yup.number()
    .min(10,)
      .required('Please Number'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
  })
    return (
      <Formik
         initialValues={{
           fullname: '',
           address:'',
           phone:'',
           email:'',
         }}
         validationSchema={validate}
         onSubmit={values => {
          // const tt= document.querySelector(".alert-checkout")
          // // tt.style.display='none'
           alert('  Successfull      '    +'Order is being processed' +JSON.stringify(values, null, 2))
      
     
      }}
      >
        {formik => {
          return (
           <div>

             {console.log(formik)}
            <Header/>
            <div className="banner-checkout">
              <h1>CHECK OUT</h1>
            </div>           
            <div className="detail-checkout">
                <div className="checkout-wrapper">
                <div className="checkout-input-left checkout-input">
                    <h3>BILLING DETAILS</h3>
                <Form className='form-gr'>
                <TextField  label="Full Name" name="fullname" type="text" />
                <TextField  label="Address" name="address" type="text" />
                <TextField  label="Phone" name="phone" type="number" />
                <TextField  label="Email" name="email" type="email" />
                  <button className='btn-submit' type="submit">Check Out</button>
                  <div className="alert-checkout" style={{backgroundColor:'red'}}>
                    
                  </div>
                </Form>
                </div>
                <div className="checkout-input-right checkout-input">
                    <h3>Order notes (optional)</h3>
                    <textarea 
                      style={{paddingTop:'20px', paddingLeft:'10px'}} 
                      className='input-commnents'  placeholder='Notes about your order,e.g.special notes for dilivery.'>
                    </textarea>
                </div>
                </div>
                <div className="detail-shipping">
                    <h3>YOUR ORDER</h3>
                </div>
                <div className="shopping__container">
                    <div className="shopping__container-title">
                       <h6>PRODUCT</h6>
                       <h6>SUBTOTAL</h6>
                    </div>
                    <div className="shopping__container-item">
                       {cart.map((item) => {
                           return (
                               <Item item={item}/>
                           )
                       })}
                    </div>
                    <div className="shipping-total">
                        <h6>TOTAL: ${total}.00</h6>
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                    </div>
                </div>
            </div>
        </div>  
          )}}
        </Formik>
    )
}
const mapStateToProps = (state) => {
    return {
      cart:state.shop.cart
    }
  }
export default connect(mapStateToProps)(Checkout)
