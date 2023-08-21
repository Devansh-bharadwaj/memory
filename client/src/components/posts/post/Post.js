import React from "react";
import "./Post.css";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/Posts";

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  // console.log(post);
  return (
    <div className="col-12 col-sm-6 mt-5">
      <div className="card my_card">
        <div className="img_box">
          <img src={post.selectedFile} className="card-img-top" alt="..." />
        </div>
        <div className="card_title">
          <h5 className="card-title">{post?.creator}</h5>
          <BsThreeDots
            className="edit_icon"
            onClick={() => setCurrentId(post._id)}
          />
        </div>
        <div className="card-body">
          {post?.tags?.map((tag, j) => (
            <p className="card-text" key={j}>
              #{tag}
            </p>
          ))}
          <div>
            <p>{post?.message}</p>
          </div>
          <div className="d-flex justify-content-between">
            <i
              className="fa fa-regular fa-heart fa-beat"
              onClick={() => dispatch(likePost(post?._id))}
            >
              {post?.likeCount}
            </i>
            <i
              className="fa fa-solid fa-trash"
              onClick={() => dispatch(deletePost(post?._id))}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
