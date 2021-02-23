import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageHelper from "../helper/ImageHelper";
import { getoneBlog, postBlogComment, likePost } from "../helper/coreapicalls";
import { useHistory } from "react-router-dom";
import { isAutheticated } from "../../auth/helper/index";
import "../../styles.scss";
import Comment from "./Comment";
import DisLike from "./DisLike";
import Like from "./Like";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareButton from "react-web-share-button";
import { API } from "../../backend";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";

const Fullblog = (config) => {
  const userId = isAutheticated() && isAutheticated().user._id;
  const useremail = isAutheticated() && isAutheticated().user.email;
  const blogId = useParams();
  const id = blogId._Id;
  // console.log(userId);
  const history = useHistory();

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    tags: "",
    photo: "",
    comment: "",
    likes: "",
    loading: false,
    error: "",
    createdBlog: "",
    getaRedirect: false,
  });
  const [value, setvalue] = useState({
    user: useremail,
    content: "",
    err: "",
    success: false,
  });
  const [error, seterror] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, content, err, success } = value;

  const onInputChange = (name) => (event) => {
    setvalue({ ...value, err: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setvalue({ ...value, err: false });
    postBlogComment(id, { user, content })
      .then((data) => {
        if (data.error) {
          setvalue({ ...value, err: data.error, success: false });
        } else {
          setvalue({
            ...value,
            user: useremail,
            content: "",
            err: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in sending Comment"));
  };

  const loadBlog = () => {
    getoneBlog(id).then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setBlog(data);
        // console.log(data);
      }
    });
    setLoading(true);
  };

  useEffect(() => {
    loadBlog();
  }, [blog]);
  ///////////////////////////// Post Submit Event ///////////////////

  const successMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            Comment Posted..!
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="alert alert-danger"
            style={{ display: err ? "" : "none" }}
          >
            {err}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="py-md-5 py-3">
        <div className="Fullblog container">
          <div>
            <h1 className="FullblogTittle">{blog.title}</h1>
            <p className="tags text-right">{blog.tags}</p>
            {loading ? (
              <ImageHelper blog={blog} />
            ) : (
              <div className="spinner-border text-danger" role="status"></div>
            )}
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            <span className="blog_icons">
              <div style={{ display: "flex" }}>
                {blog.likes.includes(userId) === true ? <DisLike /> : <Like />}
                <span className="ml-1" style={{ color: "#2d3954" }}>
                  {blog.likes.length}
                </span>
                <ChatBubbleOutlineRoundedIcon
                  className="ml-2"
                  style={{ color: "#2d3954" }}
                />
                <span className="ml-1" style={{ color: "#2d3954" }}>
                  {blog.comment.length}
                </span>
              </div>
              <div>
                <ShareButton
                  url={`${API}/blog/${id}`}
                  buttonStyle={{
                    color: "#ffca08",
                    background: "#fff",
                    padding: "10px 12px",
                    border: "none",
                    width: "100%",
                  }}
                />
              </div>
            </span>
            <div className="container Comment_stytum mt-2">
              {successMessage()}
              {errorMessage()}
              <div className="mx-sm-3 mb-2">
                <div className="">
                  <textarea
                    className="comment_input"
                    name="content"
                    value={content}
                    onChange={onInputChange("content")}
                    placeholder="Write Comment"
                  ></textarea>
                </div>
                <input
                  className="d-none"
                  name="user"
                  value={user}
                  onChange={onInputChange("user")}
                />
                <button type="submit" onClick={onSubmit} className="post-btn">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Comment />
      <br />
    </div>
  );
};

export default Fullblog;
