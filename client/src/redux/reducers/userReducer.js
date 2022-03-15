const {
    REGISTER_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
} = require("../constants/actions-types");

const initialState = {
    user: {},
    isAuth: false,
    load: false,
};

const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_USER:
            return { ...state, user: payload.user };
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, isAuth: true };
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };
        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
        default:
            return state;
    }
};

export default userReducer;
