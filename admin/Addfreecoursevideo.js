import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getCategories, createaFreecoursevideo } from "./helper/adminapicall";
// import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";

const AddVideo = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    video: "",
    error: "",
    loading: "false",
    createvideo: "",
    getRedirect: false,
    formData: "",
  });

  const {
    name,
    description,
    video,
    error,
    loading,
    createvideo,
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
    createaFreecoursevideo(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          video: "",
          loading: false,
          createvideo: data.name,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "video" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-4"
      style={{ display: createvideo ? "" : "none" }}
    >
      <h4>{createvideo}, - "created successfully"</h4>
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
      <form className="py-md-4 my-3">
        <div className="form-group">
          <label>Video Heading</label>
          <input
            type="text"
            onChange={handleChange("name")}
            name="video"
            value={name}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Inter Your Heading Here"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlFile1">
            Upload Video Here <span></span>
          </label>
          <input
            onChange={handleChange("video")}
            type="file"
            name="video"
            accept="image"
            className="form-control-file"
            id="exampleFormControlFile1"
            placeholder="Choose a file"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Video Description</label>
          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("description")}
            name="description"
            value={description}
            className="form-control"
            id="description"
            placeholder="Enter Your Some Description Here...!"
          ></textarea>
        </div>
        <button type="submit" onClick={onSubmit} className="btn Submitbtn">
          <PublishIcon />
          Upload Now
        </button>
      </form>
      <Link to="/admin/dashboard" className="Backbtn btn mb-3">
        <ArrowBackIcon /> Back to Dashboard
      </Link>
    </div>
  );
};

const AddNewVideo = () => {
  return <div>{AddVideo()}</div>;
};

export default AddNewVideo;
