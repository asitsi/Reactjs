import React, { useState, useEffect } from "react";
import { isAutheticated } from "../../auth/helper/index";
import { getTestis } from "../helper/coreapicalls";
import TestiImg from "../helper/TestiImg";
import "../../styles.scss";
import Footer from "../Footer/Footer";
const Fulltestimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  const [error, seterror] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = isAutheticated() && isAutheticated().token;
  const userId = isAutheticated() && isAutheticated().user.email;

  useEffect(() => {
    loadTestimonial();
  }, []);

  const loadTestimonial = () => {
    getTestis().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setTestimonial(data);
        console.log(data);
      }
    });
    setLoading(true);
  };

  return (
    <div>
      <div className="container py-md-5 py-3">
        <h1 className="blog_heading">All Testimonials</h1>
        <div className="row">
          {testimonial.map((testi, index) => (
            <div className="col-12 mt-4" key={index}>
              <div className="card fullTesti">
                <div className="d">
                  <TestiImg testi={testi} />
                  <div className="card-body mt-3">
                    <h2 className="card-title">{testi.name}</h2>
                    <p className="card-text">
                      <sup>
                        <i
                          className="fa fa-quote-left mr-2"
                          style={{ fontSize: "14px", color: "#ffca08" }}
                          aria-hidden="true"
                        ></i>
                      </sup>
                      {testi.achievement}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fulltestimonial;
