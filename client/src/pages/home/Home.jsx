import { useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
export default function Home({ darkMode, posts }) {
  const [search, setSearch] = useState("");
  const postsS =
    posts &&
    posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <>
      <Header setSearch={setSearch} />
      <div className="home">
        <Posts Posts={postsS} />

        <Sidebar darkMode={darkMode} />
      </div>
    </>
  );
}
