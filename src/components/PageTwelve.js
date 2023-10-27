import "../styles/pageTwelve.css";
import dir1Image from "../assets/dir-1-image.png";
import dir2Image from "../assets/dir-2-image.png";
import dir3Image from "../assets/dir-3-image.png";
import dir4Image from "../assets/dir-4-image.png";
export default function PageTwelve({title}) {
  return (
    <div className="page-twelve-wrapper">
      <div id="page-12-heading">{title}</div>
      <div id="page-12-container">
        <div id="page-12-unit-1">
          <div id="page-12-unit-1-image-wrapper">
            <img src={dir1Image} id="dir-1-image" alt="dir-1"  />
          </div>
          <div id="page-12-unit-1-dir-name">Palani Duraiswamy</div>
          <div id="page-12-unit-1-dir-role">Chariman and Managing Director</div>
        </div>
        <div id="page-12-unit-2">
          <div id="page-12-unit-2-image-wrapper"><img src={dir2Image} id="dir-2-image" alt="dir-2"  /></div>
          <div id="page-12-unit-2-dir-name">Dr. Suresh Kumar Palani</div>
          <div id="page-12-unit-2-dir-role">Chief Mentor & Non-Executive Director</div>
        </div>
        <div id="page-12-unit-3">
          <div id="page-12-unit-3-image-wrapper"><img src={dir3Image} id="dir-3-image" alt="dir-3"  /></div>
          <div id="page-12-unit-3-dir-name">Ramesh Kumar Palani</div>
          <div id="page-12-unit-3-dir-role">Executive Director</div>
        </div>
        <div id="page-12-unit-4">
          <div id="page-12-unit-4-image-wrapper"><img src={dir4Image} id="dir-4-image" alt="dir-4"  /></div>
          <div id="page-12-unit-4-dir-name">Duraisamy Rajan Palani</div>
          <div id="page-12-unit-4-dir-role">Executive Director</div>
        </div>
      </div>
    </div>
  );
}
