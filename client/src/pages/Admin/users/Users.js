import React, { useEffect } from "react";
import "./users.css";
import { useDispatch, useSelector } from "react-redux";
import { get_users, delete_user } from "../../../redux/actions/admin";
const Users = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_users());
    }, []);
    const handleDelete = (id) => {
        dispatch(delete_user(id));
    };
    const users = useSelector((state) => state.adminReducer.users);
    return (
        <div class="wrapper">
            <div class="table">
                <div class="row header blue">
                    <div class="cell">Username</div>
                    <div class="cell">Email</div>
                    <div class="cell">Settings</div>
                </div>

                {users &&
                    users.map((user) => {
                        return (
                            <div class="row">
                                <div class="cell" data-title="Username">
                                    {user.userName}
                                </div>
                                <div class="cell" data-title="Email">
                                    {user.email}
                                </div>
                                <div class="cell" data-title="Password">
                                    <button style={{marginRight:"120px"}}
                                        onClick={() => handleDelete(user._id)}
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

export default Users;
