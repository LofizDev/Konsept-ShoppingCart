import HeaderLayout from "../../Layout/LayoutHeader/HeaderLayout"
import './About.css'
import BlogLink from "../../HomePage/BlogLink/BlogLink"
import SliderAnimation from '../../HomePage/SliderAnimation/SliderAnimation'
function About() {
    return (
        <>
        <HeaderLayout/>
        <div className="banner-about">
           <h1>ABOUT US</h1>
        </div>
        <BlogLink/>
        <div style={{marginBottom: '60px'}} className="slider-anmt">
           <SliderAnimation/>
        </div>
  


        </>
    )

}
export default About