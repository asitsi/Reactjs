import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper/index";
import { getCategories, createaBlog } from "./helper/adminapicall";
// import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";
import { Editor } from "@tinymce/tinymce-react";

const AddBlog = () => {
  const { user, token } = isAutheticated();
  const [handel, setHandle] = useState();
  const [values, setValues] = useState({
    title: "",
    tags: "",
    description: "",
    photo: "",
    error: "",
    loading: "false",
    createblog: "",
    getRedirect: false,
    formData: "",
  });

  const {
    title,
    tags,
    description,
    photo,
    error,
    loading,
    createblog,
    getRedirect,
    formData,
  } = values;

  const preload = () => {
    getCategories().then((data) => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    setHandle();
    console.log(handel);
    createaBlog(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          description: "",
          tags: "",
          photo: "",
          loading: false,
          createblog: data.title,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const EditorhandleChange = (content) => {
    console.log(content);
    if (content != handel) {
    } else {
      setHandle(content);
    }
  };
  const successMessage = () => (
    <div
      className="alert alert-success mt-4"
      style={{ display: createblog ? "" : "none" }}
    >
      <h4>{createblog}, - "created successfully"</h4>
    </div>
  );
  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger mt-4"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <div className="BlogForm">
      <div className="container">
        {errorMessage()}
        {successMessage()}
        <form className="py-md-4 my-3">
          <div className="form-group">
            <label>Blog Heading</label>
            <input
              type="text"
              onChange={handleChange("title")}
              name="photo"
              value={title}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Inter Your Heading Here"
            />
          </div>
          <div className="form-group">
            <label>Blog Tages</label>
            <input
              type="text"
              onChange={handleChange("tags")}
              name="Tags"
              value={tags}
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Inpter your Blog Tages"
            />
          </div>
          <div className="form-group">
            <label>
              Upload Image Here{" "}
              <span> ** Image size not more then 10mb **</span>
            </label>
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image"
              className="form-control-file"
              id="exampleFormControlFile1"
              placeholder="Choose a file"
            />
          </div>

          <div className="form-group">
            <label>Blog Description</label>
            <Editor
              apiKey="e9itua2arwn4j3kx2jxbvint2m5xf9qkaa2892f91qh0egv0"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={(content) => {
                const e = { target: { value: content } };
                handleChange("description")(e);
              }}
            />
          </div>

          <button type="submit" onClick={onSubmit} className="btn Submitbtn">
            <PublishIcon />
            Upload Now
          </button>
        </form>
        <Link to="/admin/dashboard" className="Backbtn btn mb-3">
          <ArrowBackIcon /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

const AddNewBlog = () => {
  return <div className="">{AddBlog()}</div>;
};

export default AddNewBlog;
