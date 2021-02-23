import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getBlogs, DeleteBlogs } from "./helper/adminapicall";
import "../styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const ManageBlogPost = () => {
  const [Blogs, setBlogs] = useState([]);
  const { user, token } = isAutheticated();

  const preload = () => {
    getBlogs().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data.reverse());
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deletemyBlog = (blogId) => {
    DeleteBlogs(blogId, user._id, token).then((data) => {
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
                <th scope="col">Title</th>
                <th scope="col" className="text-center">
                  Update
                </th>
                <th scope="col" className="text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {Blogs.reverse().map((blog, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1})-</th>

                  <td>
                    <p>{blog.title.substring(0, 75) + " ..."}</p>
                  </td>
                  <td>
                    <p>
                      <Link
                        className="btn btn-success"
                        to={`/admin/blog/update/${blog._id}`}
                      >
                        <span className="">Update</span>
                      </Link>
                    </p>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deletemyBlog(blog._id);
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

export default ManageBlogPost;
