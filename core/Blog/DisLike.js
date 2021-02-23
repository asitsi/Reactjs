import React, { useState, useEffect } from "react";
import { API } from "../../backend";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useParams } from "react-router-dom";
import { likePost } from "../helper/coreapicalls";
import { isAutheticated } from "../../auth/helper/index";
import axios from "axios";
import "../../styles.scss";
import { result } from "lodash";

const DisLike = () => {
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
  const onSubmit2 = async (e) => {
    e.preventDefault();
    await axios.put(`${API}/unlike/${id}`, like);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit2(e)}>
        <input
          className="d-none"
          name="user"
          value={user}
          onChange={(e) => onhandleChange(e)}
        />
        <button type="submit" className="like_outside_btn">
          <FavoriteIcon style={{ color: "#d70049" }} />
        </button>
      </form>
    </div>
  );
};

export default DisLike;
