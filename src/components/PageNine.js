import "../styles/pageNine.css";
import cartImage from "../assets/cart-image.png";
export default function PageNine() {
  return (
    <div className="page-nine-wrapper">
      <div className="page-nine-unit-one">
        <div id="page-nine-unit-one-title">Shop our Products Online</div>
        <div id="page-nine-unit-one-text">
          Check out our branded pharmaceutical, <br/> nutraceutical and food
          supplement products. <br/> Our secure online store makes it easy to buy <br/> and
          pay at the convenience of a click.
        </div>
        <div id="page-nine-unit-one-coming-soon">Coming Soon...</div>
      </div>
      <div id="cart-image-wrapper">
      <img src={cartImage} alt="cart-image" id="cart-image"/>
      </div>
      
    </div>
  );
}
