import "../styles/pageThree.css";
import formulationsImage from "../assets/formulations-image.png";

export default function PageThree() {
  return (
    <div className="page-three-wrapper">
      <div id="page-title">What we do?</div>
      <div class="container-desktop">
        <div id="formulations-image-wrapper">
          <img
            id="formulations-image"
            alt="formulations-image"
            src={formulationsImage}
          />
        </div>
        <div className="page-three-container-one">
          <div id="formulations-heading">Formulations</div>
          <div id="formulations-text">
            The scientific thrill of discovering and refining solid <br /> oral
            formulations is so intense. In the process, <br /> collision of
            formulation scientists, analytical chemists <br /> and regulatory
            professionals is natural. But, it is a <br /> constructive
            collision; something that results in a <br /> beautiful creation.
            Remember the Big Bang that made <br /> life possible on planet
            earth?
          </div>
          <button id="view-more-btn">View More</button>
        </div>
      </div>
    </div>
  );
}
