import React, { useState, useEffect } from "react";
import Poll from "react-polls";
import "../../styles.scss";
import { isAutheticated } from "../../auth/helper/index";
import { getPolls, postPoll } from "../helper/coreapicalls";
import axios from "axios";
import { API } from "../../backend";
import { useHistory } from "react-router-dom";
import Test from "./Test";

const FullPoll = () => {
  const userId = isAutheticated() && isAutheticated().user._id;
  const [polls, setPoll] = useState([]);
  const [error, seterror] = useState(false);
  const history = useHistory();
  useEffect(() => {
    loadPoll();
  }, [polls]);

  const loadPoll = () => {
    getPolls().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setPoll(data.reverse());
        console.log(data);
      }
    });
  };

  // Handling user vote
  // Increments the votes count of answer when the user votes
  const handalchange = async (pollId, userId, answer) => {
    if (userId === false || 0) {
      history.push("/signin");
    } else {
      console.log(pollId);
      console.log(userId); // getting
      console.log(answer); // getting
      await axios
        .post(`${API}/vote/${pollId}`, { userId, answer })
        .then((data) => {
          if (data.error) {
            seterror(data.error);
            console.log(data.error);
          } else {
            loadPoll();
            // console.log(data);
          }
        });
    }
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
    <div className="">
      <div className="container my-5">
        <h1 className="blog_heading my-3">Poll's of the Day</h1>
        {errorMessage()}
        <Test />
      </div>
    </div>
  );
};

export default FullPoll;
