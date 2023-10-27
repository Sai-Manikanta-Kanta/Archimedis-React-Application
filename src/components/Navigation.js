import "../styles/navigation.css";
import archimedisLogo from "../assets/archimedis-logo.png";
import menuLogo from "../assets/menu-logo.png";
import cancelLogo from "../assets/cancel-button-logo.png";
import { useState } from "react";
import MobileOptions from "./MobileOptions";
export default function Navigation() {
  const [isMenuButtonClicked, setMenuButton] = useState(false);

  return (
    <>
      <div className="navigation-bar">
        <img id="archimedis-logo" src={archimedisLogo} alt="archimeis-logo" />

        <div id="desktop-options-wrapper">
          <div class="desktop-text">Home</div>
          <div class="desktop-text">Formulations</div>
          <div class="desktop-text">Manufacturing</div>
          <div class="desktop-text">Products</div>
          <div class="desktop-text">Digital</div>
          <div class="desktop-text">Contact Us</div>
        </div>

        <img
          id="menu-logo"
          src={isMenuButtonClicked === false ? menuLogo : cancelLogo}
          alt="menu-logo"
          onClick={() => {
            if (isMenuButtonClicked === false) {
              setMenuButton(true);
            } else {
              setMenuButton(false);
            }
          }}
        />
      </div>
      {isMenuButtonClicked && <MobileOptions />}
    </>
  );
}
