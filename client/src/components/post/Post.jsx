import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  return (
    <div className="post-card">
      <div className="info">
        {console.log(post.img, "heeeeeeeeeere")}
        <img src={`/uploads/${post.img}`} alt="Image" className="postImg" />
        <h4 className="postTitle">{post.title}</h4>
        <p className="postDescription">{post.postDescription}</p>
        <button href="#" className="detail-button">
          <Link to={`/postDetail/${post._id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
}
