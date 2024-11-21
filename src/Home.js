import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [posts, SetPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        SetPosts(data);
        setFilteredPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("fetching error", error));
  }, []);
  const handleChangeSubmit = (e) => {
    setSearchQuery(e.target.value);
    e.preventDefault();
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1 style={{ color: "yellow" }}>Posts</h1>
      <form
        class="d-flex"
        role="search"
        type="submit"
      >
        <input
          className="form-control"
          type="search"
          value={searchQuery}
          onChange={handleChangeSubmit}
          placeholder="Search"
          aria-label="Search"
          style={{ width: "200px", height: "30px" }}
        />
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="postscontainer">
          {filteredPosts.map((post) => (
            <div className="card" key={post.id} style={{ width: "30%" }}>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
          ))}
        </div>
      )}
      ;
    </div>
  );
}

export default Home;
