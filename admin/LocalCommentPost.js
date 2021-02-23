import React, { useState, useEffect } from "react";
import { getLocalcommentsubmit } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const LocalCommentPost = () => {
  const { user, token } = isAutheticated();
  const [value, setValue] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    loadLocalComment();
  }, []);

  const loadLocalComment = () => {
    getLocalcommentsubmit().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setValue(data.reverse());
        // console.log(data);
      }
    });
  };
  //   console.log(value);
  return (
    <div className="container">
      <div className="row py-md-5 py-3">
        {value.map((data, index) => {
          return (
            <div className="col-lg-4 col-12" key={index}>
              <div class="card mt-2">
                <div class="card-header">
                  <div>
                    <span>Name - </span>
                    {data.name}
                  </div>
                  <div>
                    <span>Email - </span>
                    {data.email}
                  </div>
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>{data.description}</p>
                    <footer class="blockquote-footer text-right">
                      Time -
                      <cite title="Source Title text-right">
                        {data.createdAt}
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocalCommentPost;
