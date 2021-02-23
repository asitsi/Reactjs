import React, { useEffect, useState } from "react";
import { getBlogs } from "../helper/coreapicalls";
import { Link } from "react-router-dom";

const Blog = (blog) => {
  const [blogs, setBlog] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = () => {
    getBlogs().then((data) => {
      if (data.error) {
        seterror();
      } else {
        setBlog(data.reverse());
        // console.log(data);
      }
    });
  };

  return (
    <div className="container py-md-5 py-3 ">
      <h1 className="blog_heading">Blogs Notification's</h1>
      <div className="scroll">
        <div className="table-responsive AllblogsTittle">
          <table className="table boder shadow container">
            <tbody>
              {blogs.reverse().map((blog, index) => (
                <tr key={index}>
                  <th
                    scope="row"
                    className="index"
                    style={{ fontSize: "1rem" }}
                  >
                    {index + 1})-
                  </th>
                  <th>
                    <Link
                      to={`/blog/${blog._id}`}
                      className="title"
                      style={{ fontSize: "1rem" }}
                    >
                      {blog.title}
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blog;
