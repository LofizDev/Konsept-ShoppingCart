import './SliderAnimation.css';

function SliderAnimation() {
  var sectionIndex = 0;
  const nha = () => {
    const changeSlider = document.querySelector('.section__wrapper');
    sectionIndex = 0;
    changeSlider.style.transform = 'translateY(' + sectionIndex * -53 + '%)';
    const checked = document.querySelector('#toogleclick');
    checked.classList.toggle('check');
    const checkedd = document.querySelector('.oknhaa');
    checkedd.classList.remove('check');
    const checkeddd = document.querySelector('.oknhaaa');
    checkeddd.classList.remove('check');
  };
  const nha1 = () => {
    const changeSlider = document.querySelector('.section__wrapper');
    sectionIndex = 1;
    changeSlider.style.transform = 'translateY(' + sectionIndex * -53 + '%)';
    const checkedd = document.querySelector('.oknhaa');
    checkedd.classList.toggle('check');
    const checked = document.querySelector('#toogleclick');
    checked.classList.remove('check');
    const checkeddd = document.querySelector('.oknhaaa');
    checkeddd.classList.remove('check');
  };
  const nha2 = () => {
    const changeSlider = document.querySelector('.section__wrapper');
    sectionIndex = 2;
    changeSlider.style.transform = 'translateY(' + sectionIndex * -53 + '%)';
    const checkeddd = document.querySelector('.oknhaaa');
    checkeddd.classList.toggle('check');
    const checked = document.querySelector('#toogleclick');
    checked.classList.remove('check');
    const checkedd = document.querySelector('.oknhaa');
    checkedd.classList.remove('check');
  };
  return (
          <div className="content__animation">
            <div className="content__animation-wrapper">
              <svg className="sliderpath" xmlns="http://www.w3.org/2000/svg" width="137.982" height="135">
                <path class="qodef-quote-svg-blob" fill="#dfe8ec"
                      d="M61.886 7.875S6.369-12.676 1.874 14.725c-4.496 27.4 7.492 121.593 56.016 107.322s62.795-37.105 50.235-68.503C95.566 22.145 75.158 11.87 61.886 7.875z"></path>
                <circle className="cirani" fill="none" stroke="#8B8B8B" strokeMiterlimit="10" cx="75.449" cy="61.993"
                        r="61.4"></circle>
                <path fill="#211F1F"
                      d="M63.553 69.24c1.641-1.549 2.916-3.439 3.829-5.674a18.482 18.482 0 001.367-7.042c0-1.184-.137-2.369-.41-3.555l5.879-.957c.273 1.186.41 2.371.41 3.555 0 3.1-.73 6.132-2.188 9.093-1.459 2.963-3.374 5.4-5.743 7.314l-3.144-2.734zm12.716 0c1.641-1.549 2.917-3.439 3.829-5.674a18.482 18.482 0 001.367-7.042c0-1.184-.137-2.369-.41-3.555l5.879-.957c.273 1.186.41 2.371.41 3.555 0 3.1-.73 6.132-2.188 9.093-1.459 2.963-3.374 5.4-5.743 7.314l-3.144-2.734z"></path>
              </svg>
              <div className="content__slide">
                <div className="wrapper-test">
                  <p className="testi">Testimonials</p>
                  <div className="director-btn">
                    <div className="oknha" id="toogleclick" onClick={nha}>❖</div>
                    <div className="oknhaa" id="toogleclick" onClick={nha1}>❖</div>
                    <div className="oknhaaa" id="toogleclick" onClick={nha2}>❖</div>
                  </div>
                </div>
                <div className="content-child">
                  <div className="section__wrapper">
                    <section className="section">
                      <h3>Interior was the best investment I ever made. Interior<br/> has really helped us.</h3>
                      <h6>Glenn F.</h6>
                    </section>

                    <section className="section">
                      <h3>It's exactly what I've been looking for. I would gladly<br/> pay over $600 for interior. </h3>
                      <h6>Prescott C.</h6>
                    </section>
                    <section className="section">
                      <h3>Absolutely wonderful! I wish I would have thought of<br/> it first. </h3>
                      <h6>Anna Smith</h6>
                    </section>
                  </div>

                </div>
              </div>
            </div>

          </div>
  );
}

export default SliderAnimation;
