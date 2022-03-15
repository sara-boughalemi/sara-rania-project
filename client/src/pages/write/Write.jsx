import "./write.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_post } from "../../redux/actions/post";
import { useHistory } from "react-router-dom";
const Write = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = new FormData();

    newPost.append("postDescription", text);
    newPost.append("title", title);
    if (link) {
      newPost.append("img", link);
    }
    dispatch(add_post(newPost, history));
  };
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://img-19.ccm2.net/iBYO1DOif2mcoMT7crnZ0Yy3XaU=/480x270/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            name="img"
            accept="image/png, image/jpeg "
            onChange={(e) => setLink(e.target.files[0])}
          />
          <input
            className="field-description"
            name="title"
            placeholder=" Write Here .. "
            className="writeInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="field-description"
            name="description"
            placeholder=" Write Here .. "
            className="writeInput writeText"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="inputButton">
       
          <button className="writeSubmit" onClick={handleSubmit}>
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
