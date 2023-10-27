import "../styles/pageEleven.css";
import groupImage from "../assets/group-image.png";
export default function PageEleven() {
  return (
    <div className="page-eleven-wrapper">
      <div id="page-11-heading">Get to Know Us</div>
      <img id="page-11-image" alt="group-image" src={groupImage} />
      <div id="page-11-text">
        We aspire to further enhance life on earth by <br/> formulating scientific &
        digital innovations. We  <br/> passionately architect medicine and digital
        systems <br/> so that planet earth continues to thrive.
      </div>
    </div>
  );
}
