import React, { useEffect, useState } from "react";

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );

      const data = await response.json();

      setPosts(data);
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>User {userId} Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserPosts;