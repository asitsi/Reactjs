import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getCategories, createaFaculty } from "./helper/adminapicall";
// import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";

const AddnewFaculty = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    skill: "",
    qualification: "",
    achievement: "",
    photo: "",
    error: "",
    loading: "false",
    createfaculty: "",
    getRedirect: false,
    formData: "",
  });

  const {
    name,
    skill,
    qualification,
    achievement,
    photo,
    error,
    loading,
    createfaculty,
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
    createaFaculty(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          qualification: "",
          achievement: "",
          skill: "",
          photo: "",
          loading: false,
          createfaculty: data.name,
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
      style={{ display: createfaculty ? "" : "none" }}
    >
      <h4>{createfaculty}, - "created successfully"</h4>
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
          <label>Faculty Name</label>
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
          <label for="exampleFormControlFile1">
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
        <div class="form-group">
          <label>Faculty Skill</label>
          <input
            type="text"
            onChange={handleChange("skill")}
            name="skill"
            value={skill}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Inpter your Faculty Skill"
          />
        </div>

        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty Qualification</label>
          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("qualification")}
            name="qualification"
            value={qualification}
            className="form-control"
            id="qualification"
            placeholder="Enter Faculty Qualification Here...!"
          ></textarea>
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty Achievement</label>
          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("achievement")}
            name="achievement"
            value={achievement}
            className="form-control"
            id="achievement"
            placeholder="Enter Faculty Achievement Here...!"
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

const AddFaculty = () => {
  return <div>{AddnewFaculty()}</div>;
};

export default AddFaculty;
