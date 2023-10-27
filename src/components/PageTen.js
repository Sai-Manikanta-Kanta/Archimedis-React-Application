import "../styles/pageTen.css";
import profileIcon from "../assets/profile-icon.png";
export default function PageTen() {
  return (
    <div className="page-ten-wrapper">
      <div id="page-ten-heading">
        Here’s What <br id="here-break" />
        Our Clients Say
      </div>
      <div id="card-wrapper-page-10">
        <div id="card-heading">Incredible Experience</div>
        <div id="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. id integer.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem Lorem ipsum dolor sit amet, consectetur
          adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. id integer. Lorem ipsum dolor sit amet, consectetur
        </div>
        <div id="contianer-3">
          <img alt="profile-icon" src={profileIcon} id="profile-icon" />
          <span id="flex-division">
            <span id="profile-name">Jane Cooper</span>
            <span id="profile-job">CEO, ABC Corporation</span>
          </span>
        </div>
      </div>
    </div>
  );
}
