'use client';
import { useState, useEffect } from "react";

export default function FetchPostsPage() {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]); // Define the type for posts
  const [error, setError] = useState<string>(""); // Type for error as a string
  const [loading, setLoading] = useState<boolean>(true); // Type for loading as boolean

  useEffect(() => {
    // Fetch data from the API
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Corrected key from `successe` to `success`
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      })
      .catch(() => setError("An unexpected error occurred")) // General error message
      .finally(() => setLoading(false)); // Set loading to false regardless of success or error
  }, []);

  // Render loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
          <p className="mt-4 text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 p-4 rounded-md shadow-md max-w-md text-center">
          <h1 className="text-red-600 font-bold text-2xl mb-2">Error</h1>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  // Render posts
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Posts</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-700">{post.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
