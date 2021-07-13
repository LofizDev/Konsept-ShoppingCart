import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './ImagesSlider.css'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // useEffect(() => {
    
  //   setTimeout(nextSlide,2000)
  //   return ()=> {
  //     clearTimeout(nextSlide)
  //   }
  // },)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    
    <section className='slider' >
      {SliderData.map((slide, index) => {
        return ( <div key={index} >
              {index === current && (
                <div className={slide.class}>
              <div className="content" >
                 <h4 className='slide-title'>{slide.title}</h4>
                 <h2 className='h2-title'>{slide.name}</h2>
                 <h5 className='span-title '>{slide.span}</h5>
                 <h5 className='span-title'>{slide.span2}</h5>
                 <button>
                   <span></span>
                   <span></span>
                   <span></span>
                   <span></span>
                   Read More</button>
              </div>
              <span className='left-arrow' onClick={prevSlide}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="35" viewBox="23.25 0 10.749 19.997">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M33.232 19.181l-9.215-9.215L33.232.75"></path>
                 </svg>
              </span>
              <span className='right-arrow' onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" class='rsvg' height="35" viewBox="23.25 0 10.749 19.997">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none"  d="M33.232 19.181l-9.215-9.215L33.232.75"></path>
              </svg>
              </span>
         
  
              
              <div className="content-img">
                 <img src={slide.image}  className='image2' alt='slider-img' />
                 <img src={slide.image2} className='bg-image2' alt='slider-img'/>
                 <img src={slide.image3} className='bg-image3' alt='slider-img'/>
                 <img src={slide.image4} className='bg-image4' alt='slider-img'/>
                 {/* <img src={slide.image5} className='bg-image5' alt='slider-img'/> */}
              </div>
              </div>
            )}
          </div>
          
        );
      })}
    </section>
  );
};

export default ImageSlider;