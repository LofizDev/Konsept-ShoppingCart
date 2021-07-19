import './BlogLink.css';
import blog1 from '../../../assets/images/BlogMasonary-1.jpg';
import blog2 from '../../../assets/images/BlogMasonary-2.jpg';
import blog3 from '../../../assets/images/BlogMasonary-3.jpg';

function BlogLink() {
  return (
          <div className="bloglink">
            <div className="bloglink__wrapper">
              <div className="bloglink-title">
                <p>Daily Dose of Tips</p>
                <h2>READ OUR BLOG</h2>
              </div>
              <div className="bloglink__wrapper-container">

                <div className="bloglink__wrapper-item">
                  <div className="blog-img">
                    <div className="blog-imgg">
                      <img src={blog1} width="420px" height="500px" alt="blog"/>
                    </div>
                  </div>
                  <p>Tavles,Wall Plates - March 27,2021</p>
                  <h3>THINKING OF A PLACE</h3>
                  <span>Lorem ipsum dolor sit amet,debet consulatu ne vix,vel ut iusto postea, hinc choro per id.Vide</span>
                  <br/>
                  <button className="readd">Read More</button>
                </div>

                <div className="bloglink__wrapper-item">
                  <div className="blog-img">
                    <div className="blog-imgg">
                      <img src={blog2} width="420px" height="500px" alt="blog"/>
                    </div>
                  </div>
                  <p>Wall Plates - April 9,2021</p>
                  <h3>PERFECT DECORATION</h3>
                  <span>In fugit possit vis,sonet laudem albucius vel ea.Nulla saperet scriptsetit cu.Pri ahduc cop</span>
                  <br/>
                  <button className="readd">Read More</button>
                </div>

                <div className="bloglink__wrapper-item">
                  <div className="blog-img">
                    <div className="blog-imgg">
                      <img src={blog3} width="420px" height="500px" alt="blog"/>
                    </div>
                  </div>
                  <p>Wall Plates - April 9,2021</p>
                  <h3>INTERIOR DESIGN STYLE</h3>
                  <span>Lorem ipsum dolor sit amet, debet consulatu ne vix,vel ut iusto postrea, hinc choro per id.Vide</span>
                  <br/>
                  <button className="readd">Read More</button>
                </div>
              </div>
            </div>
          </div>
  );
}

export default BlogLink;
