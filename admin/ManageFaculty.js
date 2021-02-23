import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getFacultys, DeleteFacultys } from "./helper/adminapicall";
import "../styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ManageFaculty = () => {
  const [Facultys, setFacultys] = useState([]);
  const { user, token } = isAutheticated();

  const preload = () => {
    getFacultys().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setFacultys(data.reverse());
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deletemyFaculty = (facultyId) => {
    DeleteFacultys(facultyId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
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
                  Update
                </th>
                <th scope="col" className="text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {Facultys.map((faculty, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1})-</th>

                  <td>
                    <p>{faculty.name}</p>
                  </td>
                  <td>
                    <p>
                      <Link
                        className="btn btn-success"
                        to={`/admin/faculty/update/${faculty._id}`}
                      >
                        <span className="">Update</span>
                      </Link>
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deletemyFaculty(faculty._id);
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

export default ManageFaculty;
