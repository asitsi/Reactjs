import React from "react";
import "../../styles.scss";
import Footer from "../Footer/Footer";

const Aboutus = () => {
  return (
    <div>
      <div className="Aboutus">
        <div className="container-fluid py-md-5 py-3">
          <div className="row ">
            <div className=" col-12">
              <div className="card ">
                <div className="card-body">
                  <h3 className="card-title text-center">About us</h3>
                  <p>
                    <span>"</span>Dive to Learn' is collective thoughts of young
                    and energetic Educationists & Dream of Co-Founder Shreya Jha
                    - JRF Commerce, NET Management, Gujarat SET, Maharashtra SET
                    qualified and currently pursuing PhD.<span>"</span>
                  </p>
                  <p>
                    <span>"</span>Dive to learn' faculties who have themselves
                    cracked the exams & are the eminent Educationists, each one
                    of them wants to contribute towards the noble cause of
                    guiding, mentoring UGC NET and PHD aspirants in a focused &
                    well organised manner. Our Team is dedicated to improvising
                    the knowledge and boosting the confidence of the aspirants
                    such that they develop a positive attitude towards the
                    examination.<span>"</span>
                  </p>
                  <p>
                    <span>"</span>The ultimate vision is to make learning
                    relevant, affordable, exam oriented and accessible for
                    everyone & thus improve quality of life.<span>"</span>
                  </p>
                  <p>
                    <span>"</span>Dive to learn' lays a perfect platform for the
                    learning and emergence of the future professors of the
                    country.<span>"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
