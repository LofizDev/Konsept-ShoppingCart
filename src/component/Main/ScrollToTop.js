import React, { useEffect, useState } from "react";
 function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  },[]);


    return (
        <div className="scroll-to-top">
        {isVisible && (
          <div className='scroll-tt' onClick={scrollToTop}>
             <svg xmlns="http://www.w3.org/2000/svg" width="10.749" height="19.997" viewBox="23.25 0 10.749 19.997">
                 <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M33.232 19.181l-9.215-9.215L33.232.75"></path>
                 <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M33.232 19.181l-9.215-9.215L33.232.75"></path>
            </svg>
          </div>
        )}
      </div>

    )
}

export default ScrollToTop