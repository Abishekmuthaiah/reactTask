import { useState } from "react"
import Feed from "../components/Feed"
import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"
import "../styles/app.css"

function Home({ posts, setPost, onAddPost, onLikePost, onAddComment }) {
  return (
    <div className="container">
      <Sidebar />
      <Feed 
        posts={posts} 
        onAddPost={onAddPost} 
        onLikePost={onLikePost} 
        onAddComment={onAddComment} 
      />
      <Rightbar />
    </div>
  )
}

export default Home
