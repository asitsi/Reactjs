import React, { useEffect, useState } from "react";
import { getBlogs } from "../helper/coreapicalls";
import ImageHelper from "../helper/ImageHelper";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Blog = (blog) => {
  const [blogs, setBlog] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    loadBlog();
  }, []);

  const loadBlog = () => {
    getBlogs().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setBlog(data.reverse());
        // console.log(data);
      }
    });
  };

  // console.log(blogs);

  return (
    <div>
      <div className="container py-md-5 py-3">
        <h1 className="blog_heading">ALL BLOGS</h1>
        <div className="row">
          {blogs.reverse().map((blog, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <Link to={`/blog/${blog._id}`} className="Blog_card_link">
                <div className="card my-2 shadow">
                  <ImageHelper blog={blog} />
                  <div className="card-body">
                    <h5 className="card-title">
                      {blog.title.substring(0, 75) + " ..."}
                    </h5>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: blog.description.substring(0, 100) + " ...",
                      }}
                    />
                    <Link
                      type="btn"
                      to={`/blog/${blog._id}`}
                      className="forMore_btn "
                    >
                      For More
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
