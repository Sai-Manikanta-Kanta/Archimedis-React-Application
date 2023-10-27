import "../styles/pageSix.css";
import digitalImage from "../assets/digital-image.png";
export default function PageSix() {
  return (
    <div className="page-six-wrapper">
      <img id="digital-image" alt="digital-image" src={digitalImage} />
      <div className="page-six-container-one">
        <div id="digital-heading">Digital</div>
        <div id="digital-text">
          “Digital by Default; Manual by Exception” has become the norm in the
          Life Sciences industry. From DevOps to Industry 4.0, our digital
          business unit offers digital product development, product support and
          custom implementation services. We also specialize in IT Quality &
          Compliance, including but not limited to GxP compliant SDLC design,
          Computerized System Validation (CSV), Software Quality Assurance
          (SQA), Software Test Automation, and Part 11 / Annex 11 Controls.
        </div>
        <button id="digital-view-more-btn">View More</button>
      </div>
    </div>
  );
}
