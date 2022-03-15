import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";

const Login = () => {
  const [user, setUser] = useState();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(user));
    history.push("/");
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          name="email"
          type="text"
          className="loginInput"
          placeholder=" Enter your email ..."
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          className="loginInput"
          placeholder=" Enter your password ..."
          onChange={handleChange}
        />
        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          REGISTER
        </Link>{" "}
      </button>
    </div>
  );
};

export default Login;
