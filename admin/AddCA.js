import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { createCategory } from "./helper/adminapicall";
// import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";

const AddnewCA = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAutheticated();

  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request fired
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h3 className="text-success"> Created Successfully</h3>;
    }
  };
  const errorMessage = () => {
    if (error) {
      return <h3 className="text-success"> Created Successfully</h3>;
    }
  };

  return (
    <div className="BlogForm container">
      <form className="py-5">
        <h3 className="text-center text-white">Create Category</h3>
        <br />
        {successMessage()}
        {errorMessage()}
        <div class="form-group">
          <input
            type="text"
            class="form-control "
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={name}
            autoFocus
          />
          <small id="emailHelp" class="form-text text-muted">
            Create Category
          </small>
        </div>

        <button onClick={onSubmit} className="btn Backbtn ">
          Create Category
        </button>
      </form>
      <Link to="/admin/dashboard" className="Backbtn btn mb-2">
        <ArrowBackIcon /> Back to Add Current affairs page
      </Link>
      <Link to="/admin/dashboard" className="Backbtn btn mb-2">
        <ArrowBackIcon /> Back to Dashboard
      </Link>
    </div>
  );
};

const AddCA = () => {
  return <div>{AddnewCA()}</div>;
};

export default AddCA;
