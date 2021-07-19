import './Navshow.css';
import logo from '../../../assets/images/logo.png';
import insta from '../../../assets/images/insta.png';
import insta1 from '../../../assets/images/insta-1.jpg';
import insta2 from '../../../assets/images/insta2.png';
import insta3 from '../../../assets/images/insta-3.jpg';
import insta4 from '../../../assets/images/insta4.png';
import insta5 from '../../../assets/images/insta-5.jpg';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CloseIcon from '@material-ui/icons/Close';

function Navshow() {
  function closeShowbar() {
    const showw = document.querySelector('.slider');
    const showww = document.querySelector('.header');
    const showwww = document.querySelector('.category');
    showww.classList.toggle('changesSlider');
    showw.classList.toggle('changesSlider');
    showwww.classList.toggle('changesSlider');
  }

  return (
          <div className="showbar">
            <div className="showbar__wrapper">
              <div className="showbar__wrapper-closed" onClick={closeShowbar}>
                <CloseIcon/>
              </div>
              <div className="showbar__wrapper-header">
                <img src={logo} width="165px" height="58px" alt="logo"/>
              </div>
              <div className="showbar__wrapper-content">
                <p>Venenatis faucibus. Nullam quis ante. Etiam sit</p>
                <p style={{marginTop: '5px'}}>consectectur adipcing eidit</p>
                <div className="images__nav-show">
                  <img src={insta} alt="media" width="83px"/>
                  <img src={insta1} alt="media" width="84px"/>
                  <img src={insta2} alt="media" width="83px"/>
                </div>
                <div className="images__nav-show2">
                  <img src={insta3} alt="media" width="83px"/>
                  <img src={insta4} alt="media" width="84px"/>
                  <img src={insta5} alt="media" width="83px"/>
                </div>
                <h4 className="h42">CONTACT</h4>
                <span>+112 345 6789</span>
                <span>1316 Abbot Kinney Blvd.</span>
                <span>Copenhagen CA 90291</span>

              </div>
              <div className="social-button">
                <div class="spin circle">
                  <TelegramIcon/>
                </div>
                <div class="spin circle">
                  <InstagramIcon/>
                </div>
                <div class="spin circle">
                  <TwitterIcon/>
                </div>
                <div class="spin circle">
                  <YouTubeIcon/>
                </div>
              </div>

            </div>
          </div>
  );
}

export default Navshow;
