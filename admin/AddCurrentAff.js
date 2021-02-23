import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getCategories, createaCAffairs } from "./helper/adminapicall";
// import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";

const AddnewFaculty = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    question: "dfghjk",
    option1: "dfgh",
    option2: "cvbn",
    option3: "vbnm",
    option4: "vbnm",
    answer: "fghj",
    Explanaton: "fghjk",
    error: "",
    loading: "false",
    success: false,
  });

  const {
    question,
    option1,
    option2,
    option3,
    option4,
    answer,
    Explanaton,
    error,
    loading,
    success,
  } = values;

  const onInputChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createaCAffairs({
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
      Explanaton,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            answer: "",
            Explanaton: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in sending Feedback"));
  };

  const successMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            thankyou for your Feedback
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
    <div className="BlogForm container">
      <form className="py-md-4 py-3">
        {errorMessage()}
        {successMessage()}
        <div class="form-group">
          <label>Question</label>
          <textarea
            type="text"
            onChange={onInputChange("question")}
            name="question"
            value={question}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Inpter your Faculty question"
            rows="3"
          />
        </div>

        <div class="form-group">
          <label>Faculty option1</label>
          <input
            type="text"
            onChange={onInputChange("option1")}
            name="option1"
            value={option1}
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Inpter your Faculty option1"
          />
        </div>

        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty option2</label>
          <input
            type="text"
            rows="5"
            cols="60"
            onChange={onInputChange("option2")}
            name="option2"
            value={option2}
            className="form-control"
            id="option2"
            placeholder="Enter Faculty option2 Here...!"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty option3</label>
          <input
            type="text"
            rows="5"
            cols="60"
            onChange={onInputChange("option3")}
            name="option3"
            value={option3}
            className="form-control"
            id="option3"
            placeholder="Enter Faculty option3 Here...!"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty option4</label>
          <input
            type="text"
            rows="5"
            cols="60"
            onChange={onInputChange("option4")}
            name="option4"
            value={option4}
            className="form-control"
            id="option4"
            placeholder="Enter Faculty option4 Here...!"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty answer</label>
          <input
            type="text"
            rows="5"
            cols="60"
            onChange={onInputChange("answer")}
            name="answer"
            value={answer}
            className="form-control"
            id="answer"
            placeholder="Enter Faculty answer Here...!"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty Explanaton</label>
          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={onInputChange("Explanaton")}
            name="Explanaton"
            value={Explanaton}
            className="form-control"
            id="Explanaton"
            placeholder="Enter Faculty Explanaton Here...!"
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

const AddCurrentAff = () => {
  return <div>{AddnewFaculty()}</div>;
};

export default AddCurrentAff;
