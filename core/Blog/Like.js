import React, { useState, useEffect } from "react";
import { API } from "../../backend";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useParams } from "react-router-dom";
import { isAutheticated } from "../../auth/helper/index";
import axios from "axios";
import "../../styles.scss";

const Like = () => {
  const userId = isAutheticated() && isAutheticated().user._id;
  const blogId = useParams();
  const id = blogId._Id;
  // console.log(id);
  // console.log(userId);

  const [like, setlike] = useState({
    user: userId,
    content: "",
    erro: "",
  });
  const { user, content, erro } = like;
  const onhandleChange = (e) => {
    setlike({ ...like, err: false, [e.target.name]: e.target.value });
  };

  // console.log(like);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API}/like/${id}`, like);
    // const newData = data.map((item) => {
    //   if (item._id == result._id) {
    //     return result;
    //   } else {
    //     return item;
    //   }
    // });
    // setlike(newData);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          className="d-none"
          name="user"
          value={user}
          onChange={(e) => onhandleChange(e)}
        />
        <button type="submit" className="like_outside_btn">
          <FavoriteBorderIcon style={{ color: "#2d3954" }} />
        </button>
      </form>
    </div>
  );
};

export default Like;
