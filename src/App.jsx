import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import Network from "./pages/Network"
import Profile from "./pages/Profile"
import "./styles/app.css"

function AppContent() {
  const [posts, setPosts] = useState([
    { id: 1, name: "John Doe", content: "Learning React is awesome!", likes: 5, comments: [] },
    { id: 2, name: "Jane Smith", content: "Just built a ProNet clone 🚀", likes: 12, comments: [] }
  ])
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const addPost = (content) => {
    if (!content.trim()) return
    const newPost = {
      id: Date.now(),
      name: "You",
      content,
      likes: 0,
      comments: []
    }
    setPosts([newPost, ...posts])
  }

  const likePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  const addComment = (postId, commentText) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, commentText] }
        : post
    ))
  }

  const handleNavigation = (page) => {
    navigate("/" + (page === "Home" ? "" : page.toLowerCase()))
  }

  return (
    <>
      <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onNavigate={handleNavigation}
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              posts={posts} 
              onAddPost={addPost} 
              onLikePost={likePost} 
              onAddComment={addComment} 
            />
          } 
        />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/network" element={<Network />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
