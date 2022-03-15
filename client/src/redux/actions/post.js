import {
    GET_POSTS,
    GET_CURRENT_POST,
    GET_POST_DETAIL,
} from "../constants/actions-types";
import axios from "axios";

export const get_posts = () => async (dispatch) => {
    try {
        let result = await axios.get("/api/posts/");
        dispatch({ type: GET_POSTS, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const add_post = (newPost, history) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.post("/api/posts/addPost", newPost, config);
        dispatch(get_posts());
        if (result.data.status === 201) {
            history.push("/");
        }
    } catch (error) {
        console.log(error);
    }
};

export const get_current_posts = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.get("api/posts/getCurrentPosts", config);
        dispatch({ type: GET_CURRENT_POST, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};
export const update_current_post = (id, updatePost) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.put(
            `api/posts/updateCurrentPosts/${id}`,
            updatePost,
            config
        );
        dispatch(get_current_posts());
    } catch (error) {
        console.log(error);
    }
};
export const delete_current_post = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const result = await axios.delete(
            `api/posts/deleteCurrentPosts/${id}`,
            config
        );
        dispatch(get_current_posts());
    } catch (error) {
        console.log(error);
    }
};

export const get_post_detail = (id) => async (dispatch) => {
    try {
        let result = await axios.get(`/api/posts/${id}`);
        dispatch({ type: GET_POST_DETAIL, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};
