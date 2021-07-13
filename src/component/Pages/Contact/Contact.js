import HeaderLayout from "../../Layout/LayoutHeader/HeaderLayout"
import './Contact.css'
import contact1 from '../../../assets/images/contact1.jpg'
import contact2 from '../../../assets/images/contact2.jpg'
import contact3 from '../../../assets/images/contact3.jpg'
import contact4 from '../../../assets/images/contact4.jpg'


function Contact() {
    return (
        <>
        <HeaderLayout/>
        <div className="banner-contact">
           <h1>CONTACT US</h1>
        </div>
        <div className="contact__questions">
            <div className="contact__questions-left">
                <span>Contact Us</span>
                <h2>GOT ANY QUESTIONS?</h2>
                <p className='text-p'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                <div className="question-left-locations">
                    <div className="locations-office">
                        <h4 className='name-location'>OFFICE</h4>
                        <p>1316 Abbot Kinney Blvd.</p>
                        <p>Copenhagen CA 90291</p>
                        <p>+112 345 6789</p>
                        <p>konsept@qode.com</p>
                    </div>
                    <div className="locations-store">
                        <h4 className='name-location'>STORE</h4>
                        <p>1316 Abbot Kinney Blvd.</p>
                        <p>Copenhagen CA 90291</p>
                        <p>+112 345 6789</p>
                        <p>konsept@qode.com</p>
                       
                    </div>
                </div>
                {/* TESTING */}
            </div>
            <div className="contact__questions-right">
                <div className="question-right-input">
                    <div className="douple-input">
                        <input type="text"  placeholder='Name'/>
                        <input className='email-input' type="text" placeholder='Email'/>
                    </div>
                    {/* <t className='input-commnents' type="text" placeholder='Comments'/> */}
                    <textarea style={{paddingTop:'20px', paddingLeft:'10px'}} className='input-commnents' cols="30" rows="10" placeholder='Comments'></textarea>
                    <br />
                    <button>Send</button>
                </div>
            </div>

        </div>
        <div className="contact__info">
            <div className="contact__info-item">
                <img src={contact1} alt="contact-img" />
                <h4>WE ARE HERE FOR YOU</h4>
                <p>1316 Abbot Kinney Blvd.</p>
                <p>Conpenhagen CA 90329</p>
                <p>+11 234 56 789.</p>
                <p>qode@interativel.com</p>
            </div>
            <div className="contact__info-item">
                <img src={contact2} alt="contact-img" />
                <h4>WE ARE HERE FOR YOU</h4>
                <p>1316 Abbot Kinney Blvd.</p>
                <p>Conpenhagen CA 90329</p>
                <p>+11 234 56 789.</p>
                <p>info@interativel.com</p>
            </div>
            <div className="contact__info-item">
                <img src={contact3} alt="contact-img" />
                <h4>WE ARE HERE FOR YOU</h4>
                <p>1316 Abbot Kinney Blvd.</p>
                <p>Conpenhagen CA 90329</p>
                <p>+11 234 56 789.</p>
                <p>tydiz@interativel.com</p>
            </div>
            <div className="contact__info-item">
                <img src={contact4} alt="contact-img" />
                <h4>WE ARE HERE FOR YOU</h4>
                <p>1316 Abbot Kinney Blvd.</p>
                <p>Conpenhagen CA 90329</p>
                <p>+11 234 56 789.</p>
                <p>permis@interativel.com</p>
            </div>
        </div>


        </>


    )
}

export default Contact