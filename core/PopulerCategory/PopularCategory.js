import React from "react";
import web1 from "../../image/2170435.jpg";
import test from "../../image/test.png";
import accounting from "../../image/accounting.jpg";
import { Link } from "react-router-dom";

import "../../styles.scss";

const PopularCategory = () => {
  return (
    <div>
      <div className="Subject_category py-md-5 py-3">
        <div className="Subject_category_heading">
          <p>Popular Category</p>
          <h2>
            <span className="theme_color">Hot & Popular</span> Category
          </h2>
        </div>
        <div className="container">
          <div className="row pt-4 gy-4">
            <div className="col-lg-4 col-md-6 col-12">
              <Link to="/freeCourse" className="card_bg text-decoration-none">
                <img src={web1} alt="Avtar_img" className="avtar_card_img" />
                <div>
                  <h5>NTA UGC NET / JRS</h5>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link to="/" className="text-decoration-none">
                <div className="card_bg2">
                  <img
                    src={accounting}
                    alt="Avtar_img"
                    className="avtar_card_img"
                  />
                  <div>
                    <h5>+1 and +2 Course</h5>
                    <p>Coming soon</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <Link to="/" className="text-decoration-none">
                <div className="card_bg3">
                  <img src={test} alt="Avtar_img" className="avtar_card_img" />
                  <div>
                    <h5>CTET</h5>
                    <p>Coming soon</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
