import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Card = () => {
  return (
    <div>
      <div className="py-md-5 py-4">
        <div className="container ">
          <div className="row gy-4">
            <div className="col-lg-4">
              <Link to="/freeCourse" className="card-link">
                <div className="card mb-3 " className="card-style">
                  <div className="card-header">Course</div>
                  <div className="card-body">
                    <h1 className="card-title">NTA UGC NET / JRS</h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link to="/" className="card-link">
                <div className="card mb-3 " className="card-style">
                  <div className="card-header">Course</div>
                  <div className="card-body">
                    <h1 className="card-title">+1 and +2 COURSES</h1>
                    <p>Coming soon</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link to="/" className="card-link">
                <div className="card mb-3 " className="card-style">
                  <div className="card-header">Course</div>
                  <div className="card-body">
                    <h1 className="card-title">CTET</h1>
                    <p>Coming soon</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Card;
