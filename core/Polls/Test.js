import React, { useState, useEffect } from "react";
import Poll from "react-polls";
import "../../styles.scss";
import { isAutheticated } from "../../auth/helper/index";
import { getPolls, postPoll } from "../helper/coreapicalls";
import axios from "axios";
import { API } from "../../backend";
import { useHistory } from "react-router-dom";

const Test = () => {
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
    <div className="row">
      {polls.reverse().map((poll, index) => (
        <div className="col-lg-4 col-12 gy-3">
          <div className="card poll_card" key={index}>
            <div className="card-body">
              <Poll
                question={poll.question}
                answers={Object.keys(poll.options).map((key) => {
                  return {
                    option: key,
                    votes: poll.options[key].length,
                  };
                })}
                onVote={
                  (answer) =>
                    handalchange(poll._id, userId, answer, console.log(answer)) // getting vote
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Test;
