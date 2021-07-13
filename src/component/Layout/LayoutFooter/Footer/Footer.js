import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__wrapper-contact">
                    <h4>CONTACT</h4>
                    <p>+112 345 6789</p>
                    <p>1316 Abbot Kinney Blvd.</p>
                    <p>+Conpenhagen Ca 90291</p>
                    <div className="social-button" style={{cursor:'pointer'}}>
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
                <div className="footer__wrapper-help">
                    <h4>HELP</h4>
                    <p>FAQs</p>
                    <p>Pricing Plans</p>
                    <p>Track</p>
                    <p>Your Order</p>
                    <p>My Account</p>
                </div>
                <div className="footer__wrapper-about">
                    <h4>ABOUT US</h4>
                    <p>Our Story</p>
                    <p>Job Opportunities</p>
                    <p>Store Location</p>
                    <p>Contact Us</p>
                </div>
                <div className="footer__wrapper-customer">
                    <h4>CUSTOMER SERVICE</h4>
                    <p>My Account</p>
                    <p>Term of Use</p>
                    <p>Deliveries {'&'} Returns</p>
                    <p>Gift Card</p>
                </div>
 
            </div>
        </div>


    )
}
export default Footer 
