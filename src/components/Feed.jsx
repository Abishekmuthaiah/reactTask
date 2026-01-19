import { useState } from "react"
import Post from "./Post"
import "../styles/feed.css"

function Feed({ posts, onAddPost, onLikePost, onAddComment }) {
  const [postContent, setPostContent] = useState("")

  const handlePostSubmit = () => {
    onAddPost(postContent)
    setPostContent("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handlePostSubmit()
    }
  }

  return (
    <div className="feed">
      <div className="create-post">
        <input 
          type="text" 
          placeholder="Start a post..." 
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>

      {posts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
          No posts yet. Be the first to share!
        </div>
      ) : (
        posts.map(post => (
          <Post 
            key={post.id}
            id={post.id}
            name={post.name} 
            content={post.content}
            likes={post.likes}
            comments={post.comments}
            onLike={() => onLikePost(post.id)}
            onAddComment={(comment) => onAddComment(post.id, comment)}
          />
        ))
      )}
    </div>
  )
}

export default Feed
