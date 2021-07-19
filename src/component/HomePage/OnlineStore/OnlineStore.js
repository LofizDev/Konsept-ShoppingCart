import './OnlineStore.css';
import Product from './Product/Product';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/lazy/lazy.min.css';
// Redux
import {connect} from 'react-redux';
// import Swiper core and required modules
import SwiperCore, {Autoplay, Lazy, Pagination} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination, Autoplay, Lazy]);

function OnlineStore({products}) {
  return (
          <div className="container__swiper">
            <Swiper slidesPerView={3.5} freeMode={true} lazy={true} autoplay={true} spaceBetween={10} loop={true}
                    pagination={{
                      'clickable': true
                    }} navigation={false}
            >
              <span className="ols">Premium Design</span>
              <h2 className="olst">ONLINE STORE</h2>
              {products.filter(item => item.select === 'onlinestore').map(product => (
                      <SwiperSlide key={product.id}>
                        <Product product={product}/>
                      </SwiperSlide>
              ))}
            </Swiper>
          </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products
  };
};
export default connect(mapStateToProps)(OnlineStore);
