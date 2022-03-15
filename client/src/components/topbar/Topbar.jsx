import React from "react";
import "./topbar.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";
const Topbar = ({ darkMode }) => {
    return (
        <div>
            <div className="top">
                <div className="top-header">
                    <a href="#" className="blog-title">
                        Blog
                    </a>

                    <div>
                        <div>
                            <ul className="menu">
                                <li className="menu-item">
                                    <Link to="/" className="menu-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/about" className="menu-link">
                                        About
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/" className="menu-link">
                                        Blog
                                    </Link>
                                </li>
                                <li className="menu-item" id="contact">
                                    <Link to="/contact" className="menu-link">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <DarkModeToggle
                                onChange={darkMode.toggle}
                                checked={darkMode.value}
                                size={40}
                                className={"darkModeToggle"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
