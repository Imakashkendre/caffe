import React from "react";
import DiscountCard from "../DiscountCard/DiscountCard";
import "./Discount.css";

const Discount = () => {
  return (
    <>
      <div className="main-container-for-discounts-on-coffee-and-header">
        <div className="container-max-width-75-em">
          <div className="all-content">
            {" "}
            <div className="heading-text-good-coffee">
              <p>
                Good days starts with a <br />
                Good Coffee
              </p>
            </div>
            <div className="containing-cards-for-discount">
              <div>
                <DiscountCard />
              </div>
              <div>
                <DiscountCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
