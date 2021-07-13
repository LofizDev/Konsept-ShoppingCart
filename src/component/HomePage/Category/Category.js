import cate1 from '../../../assets/images/cate1.jpg'
import cate2 from '../../../assets/images/cate2.jpg'
import cate3 from '../../../assets/images/cate3.jpg'
import cate4 from '../../../assets/images/cate4.jpg'
import './Category.css'
function ItemStore() {
    return (
        <div className="category">
            <div className="category__wrapper">
                <div className="category__wrapper-item">
                    <div className="bao">
                        <div className="baoo">
                           <img src={cate1} alt='category'/>
                        </div>
                    </div>       
                    <h4 className='cate-h4'>ONLINE STORE</h4>
                    <button>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   Shop Now</button>
                    <p className='cate-h7'>New</p>
                </div>
                <div className="category__wrapper-item">
                    <div className="bao">
                        <div className="baoo">
                           <img src={cate2} alt='category' />
                        </div>
                    </div>
                    <h4 className='cate-h4 active'>ACCESSORISE</h4>
                    <button className='activee'>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   Shop Now</button>
                </div>
                <div className="category__wrapper-item">
                    <div className="bao">
                       <div className="baoo">
                          <img src={cate3}alt='category' />
                       </div>
                    </div>
                    <h4 className='cate-h4'>NEW ITEMS</h4>
                    <button>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   Shop Now</button>
                    <p className='cate-h7'>Sale</p>
                 
                </div>
                <div className="category__wrapper-item">
                    <div className="bao">
                       <div className="baoo">
                          <img src={cate4}alt='category' />
                       </div>
                    </div>                 
                    <h4 className='cate-h4'>NEW ITEMS</h4>
                    <button>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   Shop Now</button>
                </div>
            </div>
            
        </div>

    )
}

export default ItemStore