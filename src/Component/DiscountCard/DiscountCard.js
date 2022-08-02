import React from "react";
import "./DiscountCard.css";
import discount_img from "../../Assets/img/discount image";
const DiscountCard = () => {
  return (
    <div>
      <div className="containing-two-main-cards-for-discount-info">
        <div className="image-for-discount-section">
          <img
            style={{ width: "587px", height: "328px" }}
            src={discount_img}
            alt=""
            srcset=""
          />
        </div>
        <div className="contain-heading-para-text-and-button">
          <div className="for-discount-range-info">
            <p>Discount 20%, every transaction with credit card pr paypay</p>
          </div>
          <div className="some-text-after-discount-heading">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              dolor a.
            </p>
          </div>
          <div className="button-for-claiming-discount">
            <button type="submit">Claim promo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
