import axios from "axios";
import {
    REGISTER_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
} from "../constants/actions-types";

export const register = (user) => async (dispatch) => {
    try {
        let result = await axios.post("/api/users/register", user);
        if (result.data.status) {
            dispatch({ type: REGISTER_USER, payload: result.data });
            
        } else {
            alert(result.data.msg);
        }
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
};

export const login = (user) => async (dispatch) => {
    try {
        let result = await axios.post("/api/users/login", user);
        if (result.data.status) {
            
            dispatch({ type: LOGIN_USER, payload: result.data });
        } else {
            alert(result.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};
export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/users/current", config);
        if (result.data.status) {
            dispatch({ type: CURRENT_USER, payload: result.data });
        } else {
            console.log(result.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};
