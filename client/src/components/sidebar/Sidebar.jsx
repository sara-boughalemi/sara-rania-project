import "./sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current, logout } from "../../redux/actions/user";
export default function Sidebar({ darkMode }) {
    const user = useSelector((state) => state.userReducer.user);
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    console.log(isAuth);
    return (
        <div
            className={
                darkMode && darkMode.value ? "sidebar darkMode" : "sidebar"
            }
        >
            <div className="sidebarItem">
                {isAuth ? (
                    <div className="profile">
                        <img
                            src={user && user.profileImg}
                            alt="image"
                            className="sidebarImg"
                        />
                        <p className="profileName">{user && user.userName}</p>
                        <Link to="/write">
                            <p>Add Post</p>
                        </Link>
                        <Link to="/myposts">
                            <p>My Posts</p>
                        </Link>
                        <Link to="/">
                            <p onClick={() => dispatch(logout())}>LOGOUT</p>
                        </Link>
                    </div>
                ) : (
                    <div className="profile">
                        <Link to="/login" style={{ fontSize: "24px" }}>
                            Login/Register
                        </Link>
                    </div>
                )}
            </div>
            <div className="sidebarItem">
                <span
                    className={
                        darkMode && darkMode.value
                            ? "sidebarTitle-darkMode"
                            : "sidebarTitle"
                    }
                >
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <a href="https://parade.com/937586/parade/life-quotes/">
                        <li className="sidebarListItem"> Life</li>
                    </a>
                    <a href="https://www.musicdiffusion.com/artist-services/music-promotion-playlists-spotify-youtube-apple-music-soundcloud/?gclid=Cj0KCQiA3-yQBhD3ARIsAHuHT66s7-6IZoUxNF0tiZk8rwyP6gSo5t6ag-lcvNHyjfpWGqwV8Qbg4E4aAgtWEALw_wcB">
                        {" "}
                        <li className="sidebarListItem">Music</li>
                    </a>
                    <a href="https://gr.pinterest.com/barbaraavdis/its-all-about-style/">
                        {" "}
                        <li className="sidebarListItem">Style</li>
                    </a>
                    <a href="https://www.dailymail.co.uk/sport/index.html">
                        {" "}
                        <li className="sidebarListItem">Sport</li>
                    </a>
                    <a href="https://technewsbit.com/?gclid=Cj0KCQiA3-yQBhD3ARIsAHuHT65clzhLwhK7tLws0BrydcKEvoSDNgARac5-H3J3Nb5I5YG87sd4f08aAlNKEALw_wcB">
                        {" "}
                        <li className="sidebarListItem">Tech</li>
                    </a>
                    <a href="https://www.netflix-news.com/">
                        {" "}
                        <li className="sidebarListItem">Cinema</li>
                    </a>
                </ul>
            </div>
            <div className="sidebarItem">
                <span
                    className={
                        darkMode && darkMode.value
                            ? "sidebarTitle-darkMode"
                            : "sidebarTitle"
                    }
                >
                    FOLLOW US
                </span>
                <div className="sidebarSocial">
                    <a target="_blank" href="https://www.facebook.com/">
                        <i className="topIcon fa-brands fa-facebook"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/?lang=fr">
                        <i className="topIcon fa-brands fa-twitter-square"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/?hl=fr">
                        <i className="topIcon fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
