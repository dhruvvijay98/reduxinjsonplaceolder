import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts"); // Handle HTTP errors
        }
        const data = await response.json();
        return data; // Return data as the fulfilled action payload
      } catch (error) {
        return rejectWithValue(error.message); // Return error as the rejected action payload
      }
    }
  );