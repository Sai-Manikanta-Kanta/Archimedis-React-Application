import "../styles/mobileOptions.css";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/fb.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
export default function MobileOptions() {
  return (
    <div className="mobile-options-wrapper">
      <div id="six-options-wrapper">
        <div id="home-option-wrapper" class="option-wrapper">
          <span id="option-text">Home</span> <span id="option-plus">+</span>
        </div>
        <div id="formulation-option-wrapper" class="option-wrapper">
          <span id="option-text">Formulations</span>{" "}
          <span id="option-plus">+</span>
        </div>
        <div id="manufacturing-option-wrapper" class="option-wrapper">
          <span id="option-text">Manufacturing</span>{" "}
          <span id="option-plus">+</span>
        </div>
        <div id="products-option-wrapper" class="option-wrapper">
          <span id="option-text">Products</span> <span id="option-plus">+</span>
        </div>
        <div id="digital-option-wrapper" class="option-wrapper">
          <span id="option-text">Digital</span> <span id="option-plus">+</span>
        </div>
        <div id="contact-us-option-wrapper" class="option-wrapper">
          <span id="option-text">Contact Us</span>{" "}
          <span id="option-plus">+</span>
        </div>
      </div>

      <div id="social-media-icons-wrapper">
        <img src={linkedin} alt="linkedin" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
    </div>
  );
}
