import React, { useState, useEffect } from "react";
import { CAAPI } from "../helper/coreapicalls";
import { Link } from "react-router-dom";
import "../../styles.scss";

const CurrentAffairs = () => {
  const [value, setValue] = useState([]);
  const [error, seterror] = useState(false);
  let [showtext, setShowtext] = useState(false);

  const starttext = () => {
    setShowtext(true);
    window.location.reload(false);
  };
  const hidetext = () => {
    setShowtext(false);
    window.location.reload(false);
  };

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
    <div className=" container py-md-5 py-3">
      <div className="blog_heading mb-2">Current Affairs</div>
      <div className="row CurrentAffairsHeight">
        {value.map((data, index) => {
          return (
            <div className="col-lg-4 col-12 border" key={index}>
              <form className="p-3">
                <fieldset className="form-group">
                  <h6>{data.question}</h6>
                  <div className="">
                    <legend className="col-form-label col-sm-2 pt-0"></legend>

                    <div className="form-check">
                      <div className="d-flex">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          className="mt-1"
                        />
                        <p className="color ml-2">{data.option1}</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="d-flex">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                        <p className="color ml-2">{data.option2}</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="d-flex">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                        <p className="color ml-2">{data.option3}</p>
                      </div>
                    </div>
                    <div className="form-check">
                      <div className="d-flex">
                        <input
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                        />
                        <p className="color ml-2">{data.option4}</p>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div className="">
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
                        <div className="card-body">{data.answer}</div>
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
                        <div className="card-body">{data.Explanaton}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          );
        })}
      </div>
      <Link to="/currentaffeairs" className="ForMorebtn">
        For More
      </Link>
    </div>
  );
};

export default CurrentAffairs;
