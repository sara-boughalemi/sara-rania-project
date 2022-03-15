import { GET_USERS } from "../constants/actions-types";
import { get_posts } from "./post";
import axios from "axios";

export const get_users = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/admin/", config);
        dispatch({ type: GET_USERS, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};

export const delete_user = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: localStorage.getItem("token"),
            },
        };

        let result = await axios.delete(`/api/admin/deleteUser/${id}`, config);
        dispatch(get_users());
    } catch (error) {
        console.log(error);
    }
};

export const delete_Post = (id) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: localStorage.getItem("token"),
            },
        };

        let result = await axios.delete(`/api/admin/deletePost/${id}`, config);
        dispatch(get_posts());
    } catch (error) {
        console.log(error);
    }
};
