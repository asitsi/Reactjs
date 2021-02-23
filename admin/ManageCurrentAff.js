import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getCA, deleteCA } from "./helper/adminapicall";
import "../styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ManageCurrentAff = () => {
  const [catagory, setCatagory] = useState([]);
  const { user, token } = isAutheticated();

  const preload = () => {
    getCA().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCatagory(data.reverse());
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deletemyFaculty = (cacategoryId) => {
    deleteCA(cacategoryId, user._id, token).then((data) => {
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
      <div className="user_table container py-md-5 py-3">
        <div className="table-responsive container">
          <table className="table table-hover table-bordered shadow-lg rounded">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>

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
  );
};

export default ManageCurrentAff;
