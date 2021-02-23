import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { Polls, deletePoll } from "./helper/adminapicall";
import "../styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ManagePoll = () => {
  const [catagory, setCatagory] = useState([]);
  const { user, token } = isAutheticated();

  const preload = () => {
    Polls().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCatagory(data.reverse());
        // console.log(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deletemyFaculty = (pollId) => {
    deletePoll(pollId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
      window.location.reload();
    });
  };
  return (
    <div>
      <div>
        <div className="user_table container py-md-5 py-3">
          <div className="table-responsive container">
            <table className="table table-hover table-bordered shadow-lg rounded">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">QUESTIONS</th>

                  <th scope="col" className="text-center">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {catagory.map((data, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1})-</th>

                    <td>
                      <p>{data.question}</p>
                    </td>

                    <td>
                      <button
                        onClick={() => {
                          deletemyFaculty(data._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/admin/dashboard" className="Backbtn btn w-100">
            <ArrowBackIcon /> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManagePoll;
