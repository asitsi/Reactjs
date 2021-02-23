import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../image/Paid_Courses.png";
import img2 from "../../image/Free_Courses.png";
import "../../styles.scss";
import Footer from "../Footer/Footer";
const Course = () => {
  return (
    <div>
      <div className="Courses_container">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card card_background">
                <Link to="https://play.google.com/store/apps/details?id=com.divetolearn">
                  <img src={img1} className="card-img img-fluid" alt="..." />
                  <div className="card-img-overlay">
                    {/* <p className="card-text fixed-bottom">Last updated 3 mins ago</p> */}
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card card_background">
                <Link to="/card">
                  <img src={img2} className="card-img img-fluid" alt="..." />
                  <div className="card-img-overlay">
                    {/* <p className="card-text">Last updated 3 mins ago</p> */}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
