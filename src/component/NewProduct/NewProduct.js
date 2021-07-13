import './NewProduct.css'

// Redux
import { connect } from 'react-redux'
import Product from './Product/Product'


function NewProduct({ products }) {
    return (
        <div className="new__product">
            <h6>Summer Collection</h6>
            <h2>MINIMAL & SIMPLE DESIGN</h2>
            <div className="new__product-data">

                {/* Check select in array ==="newproduct" and return  */}
                {products.filter(item => item.select==='newproduct').map(product => (
                        <Product key={product.id} product={product} />
                ))}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(NewProduct)
