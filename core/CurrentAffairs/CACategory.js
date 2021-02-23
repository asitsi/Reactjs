import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { CACategoryAPI } from "../helper/coreapicalls";
import "../../styles.scss";
const CACategory = () => {
  const [value, setValue] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    loadValue();
  }, []);

  const loadValue = () => {
    CACategoryAPI().then((data) => {
      if (data.error) {
        seterror(data.error);
      }
      setValue(data);
      // console.log(data);
    });
  };

  return (
    <div>
      <div className="container py-md-5 py-3">
        <h1 className="blog_heading">Current Affairs</h1>
        <div className="row py-3">
          {value.map((cacategory, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <Link className="Blog_card_link">
                  <div className="card my-2 shadow">
                    <div className="card-body text-center">
                      <h5 className="card-title"></h5>
                      <div />
                      <Link to="/" className="CAcategory">
                        {cacategory.name}
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CACategory;
