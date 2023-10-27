import "../styles/pageOne.css";
import globeImage from "../assets/globe-image.png";
import badgeImage from "../assets/badge-image.png";
export default function PageOne() {
  return (
    <div className="page-one-wrapper">
      <div className="page-one-container-one">
        <div id="formulating-heading">Formulating Consistency</div>
        <div id="science-text">
          Science excites us in so many ways. Fueled by <br id="fuel-break" />{" "}
          curiosity, we formulate clarity <br id="clarity-break" /> first; and
          consistency <br id="consistency-break" /> forever. Discover how we
          formulate your success.
        </div>
        <div id="two-buttons-wrapper">
          <button id="watch-vidoe-btn">Watch Video</button>
          <button id="contact-us-btn">Contact Us</button>
        </div>
      </div>
      <div className="page-one-container-two">
        <img src={globeImage} alt="globe-image" id="globe-image" />
      </div>
      <div className="page-one-container-three">
        <div id="card-wrapper">
          <img src={badgeImage} alt="badge-image" id="badge-image" />
          <span id="uk-text">
            UK-MHRA & WHO-GMP Approved; <br />
            U/L Certified for US FDA OTC
          </span>
        </div>
      </div>
    </div>
  );
}
