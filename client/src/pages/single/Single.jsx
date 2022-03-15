import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

export default function single({ darkMode }) {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar darkMode={darkMode} />
        </div>
    );
}
