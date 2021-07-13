import React,{useState} from 'react'
import HeaderLayout from "../Layout/LayoutHeader/HeaderLayout"
import './Shop.css'
import ShopItem from './ShopItem'
import Category from './Category'
import Filter from './ShopFilter/Filter'
import Pagination from './Pagination'
// Redux
import { connect } from 'react-redux'

function Shop({ products }) {
    // Setup Hooks Panigation
    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage] = useState(6)

    // Current Posts
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // Return Unique Value category
      const unique = ['All',...new Set(products.map(item => item.sub))]

    //   Sorting
    const[sorts,setSorts] = useState('all')
    
    const sorting = (e) => {
        const selected = e.target.value
        products.sort((a,b) => {
            if(selected === 'all') {
                return a.id > b.id ? 1 : -1
            }
            if(selected === 'low') {
                return a.price > b.price ? 1 : -1
            }
            if(selected === 'high') {
                return a.price < b.price ? 1 : -1
            }
        })
        setSorts(selected)
    }
 

    return (
        <>
            <HeaderLayout />
            <div className="shopping__cart-title">
             <p>Home</p>
             <span>Category</span>
           </div>
            <div className="shop__category">
                <div className="shop__category-left">
                    <div className="category-left-search">
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.977" height="17.686" viewBox="-4.311 -0.833 17.977 17.686"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"> <circle cx="3.708" cy="7.13" r="7.348"></circle><path d="M12.891 16.313l-3.994-3.994"></path></g>
                        </svg>
                        </button>
                        <input type="text" placeholder='SEARCH' />
                    </div>
                    <div className="category-left-title">
                        <h4>CATEGORIES</h4>
                    </div>
                    <div className="category-left-content">
                       {unique.map((category) => {
                           return (
                               <Category category={category}/>
                           )
                       }) }
                    </div>
                    <div className="filter-price">
                        <h4>NEW SLETTER</h4>
                        <div className="letter">
                        <input className='input-email' placeholder='Newsletter' type="email" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.188" height="17.25" viewBox="1.406 3.375 21.188 17.25">
                            <g fill="none" stroke="#000" strokelinecap="round" strokelinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <path d="M22 6l-10 7L2 6"></path>
                            </g>
                        </svg>
                        </div>
                    </div>
                </div>
                <div className="shop__category-right">
                    <Filter
                     sorts={sorts}
                     sorting={sorting}
                     products={products}/>
                    <div className="category-right-products">
                        <ul>
                        {products.slice(indexOfFirstPost,indexOfLastPost).map((product) => {
                            return (
                                <li>
                                  <ShopItem 
                                   key={product.id} 
                                   product={product}
                                  />
                               </li>
                            )
                        })}
                        </ul>
                    </div>
                    <div className="pagination">
                        <Pagination
                         postPerPage={postPerPage} 
                         totalPost={products.length} 
                         paginate={paginate}
                         />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Shop)
