import React, { useState, useEffect } from "react";
import Poll from "react-polls";
import "../../styles.scss";
import { Link } from "react-router-dom";
import { isAutheticated } from "../../auth/helper/index";
import { getPolls, postPoll } from "../helper/coreapicalls";
import axios from "axios";
import { API } from "../../backend";
import { useHistory } from "react-router-dom";
import Test from "./Test";

const MainPoll = () => {
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

  return (
    <div className="">
      <div className="container ">
        <h1 className="blog_heading">Poll's of the Day</h1>
        <div className="row PollsHeight">
          <Test />
        </div>
        <Link to="/allpolls" className="ForMorebtn container">
          For More
        </Link>
      </div>
    </div>
  );
};

export default MainPoll;
