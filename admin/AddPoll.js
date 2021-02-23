import React, { useState } from "react";
import "../styles.scss";
import { isAutheticated } from "../auth/helper/index";
import { API } from "../backend";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const AddPoll = () => {
  const { user, token } = isAutheticated();
  let history = useHistory();
  const [value, setValue] = useState({
    question: "",
    option: { option1: "", option2: "", option3: "", option4: "" },
    error: "",
    loading: "false",
    getRedirect: false,
    formData: "",
  });

  const { question, option, error, loading, getRedirect, formData } = value;

  const handleChange = (event) => {
    // setError("");
    setValue({ ...value, [event.target.name]: event.target.value });
    // console.log(event.target.value);
    const options = {
      ...value.option,
      [event.target.name]: event.target.value,
    };
    setValue((prev) => ({ ...prev, option: options }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setValue({ ...value, error: "", loading: true });
    // console.log(handel);
    const { option1, option2, option3, option4 } = option;
    // console.log(option);
    const options = [option1, option2, option3, option4];
    // console.log(options);
    await axios.post(`${API}/polls/create`, {
      question,
      options,
    });
    history.push("/admin/Polls");
  };

  return (
    <div className="AddPoll">
      <div className="container">
        <h1>Add New Poll</h1>
        <form>
          <textarea
            rows="4"
            cols="50"
            className="form-control mb-2"
            placeholder="Question"
            name="question"
            value={question}
            onChange={(event) => handleChange(event)}
            autoFocus
          ></textarea>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Option1"
            onChange={(event) => handleChange(event)}
            name="option1"
            value={option.option1}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Option2"
            onChange={(event) => handleChange(event)}
            name="option2"
            value={option.option2}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Option3"
            onChange={(event) => handleChange(event)}
            name="option3"
            value={option.option3}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Option4"
            onChange={(event) => handleChange(event)}
            name="option4"
            value={option.option4}
          />
          <button type="submit" onClick={onSubmit} className="btn Submitbtn">
            Submit
          </button>
        </form>
        <Link to="/admin/dashboard" className="Backbtn btn w-100">
          <ArrowBackIcon /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default AddPoll;
