import { useState } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ Posts }) {
  const [posts, setPosts] = useState([
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription:
        "music give me life and every thing music give me life and every thing music give me life and every thing music give me life and every thing music give me life and every thing music give me life and every thing music give me life and every thingmusic give me life and every thing ",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
    {
      img: "https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?k=20&m=922745190&s=612x612&w=0&h=TqsA7NeMPYXmK1TY5dsbdIsczaUK0OgguehHWdSUqL8=",
      type: "Music Life",
      title: "i love music and love life",
      postDate: "1 hour ago",
      postDescription: "music give me life and every thing",
    },
  ]);

  return (
    <div className="posts">
      {Posts && Posts.length === 0 ? (
        <div>
          <p id="noPost">There's No Post</p>
        </div>
      ) : (
        Posts &&
        Posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })
      )}
    </div>
  );
}
