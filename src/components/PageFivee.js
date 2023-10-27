import "../styles/pageFive.css";
import productsImage from "../assets/products-image.png";

export default function PageFivee() {
  return (
    <div className="page-five-wrapper">
      <img id="products-image" alt="products-image" src={productsImage} />
      <div className="page-five-container-one">
        <div id="products-heading">Products</div>
        <div id="products-text">
          Across therapeutic areas, our Tablets, Capsules & Dry Syrup products
          are packed in HDPE Bottles, Alu-Alu, Blister, Sachet and Strip
          formats. We specialize in non-beta lactam based solid oral products.
          Additionally, our online store has other OTC & Rx products sourced
          from curated GMP partners.
        </div>
        <button id="products-view-more-btn">View More</button>
      </div>
    </div>
  );
}
