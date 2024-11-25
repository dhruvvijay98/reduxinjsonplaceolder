import React, { useEffect, useState } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./reducer/apiCallingPost";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
 const dispatch = useDispatch();
  const {posts,loading} = useSelector((state) => state?.jsonPlaceHolderReducer);
  console.log(posts, "..........posts");
  useEffect(() => {
    dispatch(fetchPosts()); // Dispatch the thunk to fetch posts
  }, [dispatch]);

  const handleChangeSubmit = (e) => {
    setSearchQuery(e.target.value);
    e.preventDefault();
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    // setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1 style={{ color: "yellow" }}>Posts</h1>
      <form className="d-flex" role="search" type="submit">
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
          {posts.length > 0 &&
            posts.map((post) => (
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
