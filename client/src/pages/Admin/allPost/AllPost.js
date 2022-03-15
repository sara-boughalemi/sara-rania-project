import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_posts } from "../../../redux/actions/post";
import { delete_Post } from "../../../redux/actions/admin";
const AllPost = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_posts());
    }, []);

    const posts = useSelector((state) => state.postReducer.posts);

    const handleDelete = (id) => {
        dispatch(delete_Post(id));
    };
    return (
        <div class="wrapper" style={{ marginLeft: "150px" }}>
            <div class="table" style={{ width: "1000px" }}>
                <div class="row header green">
                    <div class="cell">Post Author</div>
                    <div class="cell">Title</div>
                    <div class="cell">Description</div>
                    <div class="cell">Date Post</div>

                    <div class="cell">Settings</div>
                </div>

                {posts &&
                    posts.map((post, index) => {
                        return (
                            <div class="row" key={index}>
                                <div class="cell" data-title="Post Creator">
                                    {post.postAuthor
                                        ? post.postAuthor.userName
                                        : "deleted"}
                                </div>
                                <div class="cell" data-title="Title">
                                    {post.title}
                                </div>
                                <div class="cell" data-title="Description">
                                    {post.postDescription}
                                </div>
                                <div class="cell" data-title="Date Post">
                                    {post.postDate.substr(0, 10)}
                                </div>

                                <div class="cell" data-title="Settings">
                                    <button
                                        onClick={() => handleDelete(post._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default AllPost;
