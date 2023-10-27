import "../styles/pageFour.css";
import manufacturingImage from "../assets/manufacturing-image.png";
export default function PageFour() {
  return (
    <div className="page-four-wrapper">
      <img
        id="manufacturing-image"
        alt="manufacturing-image"
        src={manufacturingImage}
      />
      <div className="page-four-container-one">
        <div id="manufacturing-heading">Manufacturing</div>
        <div id="manufacturing-text">
          The harmony of competent people, quality systems, state-of-the-art
          facilities, cutting-edge machines, and clean environment can produce
          magic, consistently. Be it the complex “double coated bi-layer
          tablets” or the simple “fill & seal” sachets, Good Manufacturing
          Practices (GMP) never ceases to amaze us. Machines can behave in so
          many different ways just by tweaking a few process parameters.
        </div>
        <button id="manufacturing-view-more-btn">View More</button>
      </div>
    </div>
  );
}
