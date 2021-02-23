import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import { CAAPI } from "../helper/coreapicalls";
import LocalCommentPost from "../LocalComment/LocalCommentPost";
import "../../styles.scss";

const FullCurrentAffairs = () => {
  const [value, setValue] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    loadValue();
  }, []);

  const loadValue = () => {
    CAAPI().then((data) => {
      if (data.error) {
        seterror(data.error);
      }
      setValue(data.reverse());
      // console.log(data);
    });
  };

  return (
    <div>
      <div className=" container py-md-5 py-3">
        <div className="blog_heading ">Current Affairs</div>
        <div className="row py-3">
          {value.map((data, index) => {
            return (
              <div className="col-lg-9 col-12 border" key={index}>
                <form className="p-3">
                  <fieldset className="form-group">
                    <h6 className="text-color">
                      Q.)-<span>{index + 1}</span> {data.question}
                    </h6>
                    <div className="current_affears_answer_box">
                      <div className="form-check pl-5">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          {data.option1}
                        </label>
                      </div>
                      <div className="form-check pl-5">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          {data.option2}
                        </label>
                      </div>
                      <div className="form-check pl-5">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          {data.option3}
                        </label>
                      </div>
                      <div className="form-check pl-5">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          {data.option4}
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="current_affears_answer_box">
                    <div id="accordion" className="accordion1">
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h5 className="mb-0">
                            <a
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Answer
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h5 className="mb-0">
                            <a
                              className="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Explanation
                            </a>
                          </h5>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
      </div>
      <LocalCommentPost />
      <Footer />
    </div>
  );
};

export default FullCurrentAffairs;
