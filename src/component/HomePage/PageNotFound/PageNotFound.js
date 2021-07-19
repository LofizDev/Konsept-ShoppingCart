import {Link} from 'react-router-dom';
import './PageNotFound.css';
import {UrlNames} from '../../../UrlNames';

export default function PageNotFound() {
  return (
          <div className="page__not-found">
            <div className="moon"></div>
            <div className="crater crater1"></div>
            <div className="crater crater2"></div>
            <div className="crater crater3"></div>

            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <div className="star star5"></div>

            <div className="errorr">
              <div className="title">404</div>
              <div className="subtitle">Hmmm...</div>
              <div className="decription">It looks one of the developers fell asleep</div>
              <Link to={`${UrlNames.HOME}`}>
                <button className="button button--active">GO BACK</button>
              </Link>
              <button className="button">CONTACT</button>
            </div>

            <div className="astronaut">
              <div className="backpack"></div>
              <div className="body"></div>
              <div className="body__chest"></div>
              <div className="arm-left1"></div>
              <div className="arm-left2"></div>
              <div className="arm-right1"></div>
              <div className="arm-right2"></div>
              <div className="arm-thumb-left"></div>
              <div className="arm-thumb-right"></div>
              <div className="leg-left"></div>
              <div className="leg-right"></div>
              <div className="foot-left"></div>
              <div className="foot-right"></div>
              <div className="wrist-left"></div>
              <div className="wrist-right"></div>
              <div className="cord">
              </div>
              <div className="head">
                <canvas id="visor" width="60px" height="60px"></canvas>
                <div className="head-visor-flare1"></div>
                <div className="head-visor-flare2"></div>
              </div>
            </div>
          </div>
  );
}
