import React, { useEffect } from "react";
import "./PostDetail.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_post_detail } from "../../redux/actions/post";
const PostDetail = () => {
  const { id } = useParams();
  const postDetail = useSelector((state) => state.postReducer.postDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_post_detail(id));
  }, []);
  console.log(postDetail);
  return (
    <div className="singlePost">
      {postDetail ? (
        <div className="singlePostWrapper">
          <img
            src={`/uploads/${postDetail.img}`}
            alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">{postDetail.title}</h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>{postDetail.postAuthor.userName}</b>
            </span>
            <span className="singlePostDate">1 hour ago </span>
          </div>
          <p className="singlePostDesc">{postDetail.postDescription}</p>
        </div>
      ) : null}
    </div>
  );
};

export default PostDetail;
