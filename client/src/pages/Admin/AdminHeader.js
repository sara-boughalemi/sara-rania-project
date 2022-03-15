import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/user";
import { useHistory } from "react-router-dom";
const AdminHeader = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = () => {
        dispatch(logout());
        history.push("/");
    };
    return (
        <div id="menu">
            <nav>
                <ul id="topnav">
                    <li>
                        <a href="/admin">Home</a>
                    </li>
                    <li>
                        <a href="/admin/table-users">Users</a>
                    </li>
                    <li>
                        <a href="/admin/table-posts">Posts</a>
                    </li>
                    <li>
                        <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminHeader;
