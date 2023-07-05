import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/photos",
    }).then((Response) => setPosts(Response.data));
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <div>{post.title}</div>
          <div>
            <img src={post.thumbnailUrl} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Index;
