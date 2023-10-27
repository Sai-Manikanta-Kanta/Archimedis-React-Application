import "../styles/pageTwo.css";
import fourrts from "../assets/fourrts.png";
import lupin from "../assets/lupin.png";
import clearnasal from "../assets/clearnasal.png";
import ipca from "../assets/ipca.png";
import sigma from "../assets/sigma.png";
import swisscore from "../assets/swisscore.png";
import curatio from "../assets/curatio.png";
import shield from "../assets/shield.png";
import ergos from "../assets/ergos.png";
export default function PageTwo() {
  return (
    <div className="page-two-wrapper">
      <div className="page-two-container-one">
        Trusted by Industry <br id="trusted-break" />
        &nbsp; Leaders Globally
      </div>
      <div className="page-two-container-two">
        95% Repeat Business. 100% Client Retention
      </div>
      <div className="page-two-container-three">
        <div id="fourrts-card" className="card">
          <img src={fourrts} alt="fourrts" className="card-image" />
        </div>
        <div id="lupin-card" className="card">
          <img src={lupin} alt="lupin" className="card-image" />
        </div>
        <div id="clear-nasal-card" className="card">
          <img src={clearnasal} alt="clearnasal" className="card-image" />
        </div>
        <div id="ipca-card" className="card">
          <img src={ipca} alt="ipca" className="card-image" />
        </div>
        <div id="sigma-card" className="card">
          <img src={sigma} alt="sigma" className="card-image" />
        </div>
        <div id="swisscore-card" className="card">
          <img src={swisscore} alt="swisscore" className="card-image" />
        </div>
        <div id="curatio-card" className="card">
          <img src={curatio} alt="curatio" className="card-image" />
        </div>
        <div id="shield-card" className="card">
          <img src={shield} alt="shield" className="card-image" />
        </div>
        <div id="ergoslife-card" className="card">
          <img src={ergos} alt="ergos" className="card-image" />
        </div>
      </div>
    </div>
  );
}
