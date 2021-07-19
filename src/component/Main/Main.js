import Header from '../HomePage/Header/Header';
import {SliderData} from '../../component/HomePage/HomeSlider/SliderData';
import ImageSlider from '../../component/HomePage/HomeSlider/ImagesSlider';
import Shownav from '../../component/HomePage/NavShow/Navshow';
import Category from '../../component/HomePage/Category/Category';
import NewProduct from '../NewProduct/NewProduct';
import BlogView from '../../component/HomePage/BlogView/BlogView';
import SliderAnimation from '../../component/HomePage/SliderAnimation/SliderAnimation';
import OnlineStore from '../../component/HomePage/OnlineStore/OnlineStore';
import BlogLink from '../HomePage/BlogLink/BlogLink';

function Main() {
  return (
          <>
            <Header/>
            <Shownav/>
            <ImageSlider slides={SliderData}/>
            <Category/>
            <NewProduct/>
            <SliderAnimation/>
            <BlogLink/>
            <OnlineStore/>
            <BlogView/>


          </>
  );
}

export default Main;
