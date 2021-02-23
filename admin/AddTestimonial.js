import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getCategories, createaTesti } from "./helper/adminapicall";
// import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";

const AddnewTesti = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    achievement: "",
    photo: "",
    error: "",
    loading: "false",
    createtesti: "",
    getRedirect: false,
    formData: "",
  });

  const {
    name,
    achievement,
    photo,
    error,
    loading,
    createtesti,
    getRedirect,
    formData,
  } = values;

  const preload = () => {
    getCategories().then((data) => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createaTesti(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          achievement: "",
          photo: "",
          loading: false,
          createtesti: data.name,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-4"
      style={{ display: createtesti ? "" : "none" }}
    >
      <h4>{createtesti}, - "created successfully"</h4>
    </div>
  );
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-4"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <div className="BlogForm container">
      {errorMessage()}
      {successMessage()}
      <form className="py-md-4 py-3">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={handleChange("name")}
            name="photo"
            value={name}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Inter  Name Here"
          />
        </div>
        <div className="form-group">
          <label>
            Upload Image Here <span> ** Image size not more then 10mb **</span>
          </label>
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            className="form-control-file"
            id="exampleFormControlFile1"
            placeholder="Choose a file"
          />
        </div>
        <div className="form-group">
          <label> Achievement</label>
          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("achievement")}
            name="achievement"
            value={achievement}
            className="form-control"
            id="achievement"
            placeholder="Enter Achievement Here...!"
          ></textarea>
        </div>
        <button type="submit" onClick={onSubmit} className="btn Submitbtn">
          <PublishIcon />
          Upload Now
        </button>
      </form>
      <Link to="/admin/dashboard" className="Backbtn btn mb-2">
        <ArrowBackIcon /> Back to Dashboard
      </Link>
    </div>
  );
};

const AddTestimonial = () => {
  return <div>{AddnewTesti()}</div>;
};

export default AddTestimonial;
