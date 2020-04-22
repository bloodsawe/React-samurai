import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.worldvectorlogo.com/logos/50x50.svg" alt="Post" />
      {props.message}

      <div>
        <span>Like {props.countLike}</span>
      </div>
      <div>
        <span>Dislike</span>
      </div>
    </div>
  );
}

export default Post;
