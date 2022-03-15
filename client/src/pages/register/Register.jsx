import { Link } from "react-router-dom";
import "./register.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/user";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleRegister = (e) => {
        dispatch(register(user));
        history.push("/")
    };
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <div className="registerForm">
                <label>UserName</label>
                <input
                    name="userName"
                    type="text"
                    className="registerInput"
                    placeholder=" Enter your UserName ..."
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    name="email"
                    type="text"
                    className="registerInput"
                    placeholder=" Enter your email ..."
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    className="registerInput"
                    placeholder=" Enter your password ..."
                    onChange={handleChange}
                />
                <button className="registerButton" onClick={handleRegister}>
                    Register
                </button>
            </div>
            <button className="registerLoginButton">
                <Link className="link" to="/login">
                    LOGIN
                </Link>
            </button>
        </div>
    );
};

export default Register;
