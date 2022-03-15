import React, { useState } from "react";
import "./EditPost.css";
import { useDispatch } from "react-redux";
import { update_current_post } from "../../redux/actions/post";
const EditPost = ({ setShow, post }) => {
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);

    const { title, postDescription, img } = post;

    const [updatePost, setUpdatePost] = useState({
        title,
        postDescription,
        img,
    });

    const handleChange = (e) => {
        setUpdatePost({ ...updatePost, [e.target.name]: e.target.value });
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    const handleFile = (e) => {
        if (e.target.files[0] !== null) {
            getBase64(e.target.files[0]).then((data) =>
                setUpdatePost({ ...updatePost, img: data })
            );
        }
    };
    const handleUpdate = () => {
        dispatch(update_current_post(post._id, updatePost));
        setShow(false);
    };
    return (
        <>
            <div className="details-modal">
                <div className="details-modal-title">
                    <h1>Edit Post</h1>
                </div>
                <div className="input-modal">
                    <div>
                        <label>Title : </label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={post.title}
                            id="input-text"
                            onChange={handleChange}
                        />
                    </div>
                    <textarea
                        id="textarea"
                        type="text"
                        name="postDescription"
                        defaultValue={post.postDescription}
                        onChange={handleChange}
                    ></textarea>
                    <input
                        type="file"
                        id="fileInput"
                        name="uploaded_file"
                        style={{ marginBottom: "20px" }}
                        onChange={handleFile}
                    />
                </div>
                <div class="details-modal-content">
                    <button className="button-51" onClick={handleClose}>Close</button>
                    <button className="button-51" onClick={handleUpdate}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default EditPost;
