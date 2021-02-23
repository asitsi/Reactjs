import React, { useState } from "react";
import { postLocalComment } from "../helper/coreapicalls";
import TextField from "@material-ui/core/TextField";

const LocalCommentPost = () => {
  const [value, setvalue] = useState({
    name: "",
    email: "",
    description: "",
    error: "",
    success: false,
  });

  const { name, email, description, error, success } = value;

  const onInputChange = (name) => (event) => {
    setvalue({ ...value, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setvalue({ ...value, error: false });
    postLocalComment({ name, email, description })
      .then((data) => {
        if (data.error) {
          setvalue({ ...value, error: data.error, success: false });
        } else {
          setvalue({
            ...value,
            name: "",
            email: "",
            description: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in sending Issue"));
  };

  const successMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Submited...!
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-md-4 py-3">
      <h3 className="blog_heading">Any Issue</h3>
      <form class="needs-validation" novalidate>
        {successMessage()}
        {errorMessage()}
        <div className="form-group">
          <input
            type="name"
            value={name}
            name="name"
            onChange={onInputChange("name")}
            className="form-control"
            placeholder="Name"
          />
          <br />
        </div>
        <div className="form-group">
          <input
            type="email"
            value={email}
            name="email"
            onChange={onInputChange("email")}
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Any Issue"
            value={description}
            name="description"
            onChange={onInputChange("description")}
          ></textarea>
        </div>
        <button
          type="btn"
          onClick={onSubmit}
          className="btn btn-warning text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocalCommentPost;
