import { useState } from "react"

function Post({ name, content, likes, comments, onLike, onAddComment }) {
  const [showComments, setShowComments] = useState(false)
  const [commentInput, setCommentInput] = useState("")
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (!isLiked) {
      onLike()
      setIsLiked(true)
    }
  }

  const handleAddComment = () => {
    if (commentInput.trim()) {
      onAddComment(commentInput)
      setCommentInput("")
    }
  }

  const handleCommentKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleAddComment()
    }
  }

  return (
    <div className="post">
      <h4>{name}</h4>
      <p>{content}</p>
      <div className="post-stats">
        <span>{likes} likes</span>
        <span>{comments.length} comments</span>
      </div>
      <div className="post-actions">
        <button 
          onClick={handleLike}
          className={isLiked ? "liked" : ""}
        >
          👍 Like
        </button>
        <button onClick={() => setShowComments(!showComments)}>
          💬 Comment
        </button>
        <button>↗️ Share</button>
      </div>

      {showComments && (
        <div className="comments-section">
          <div className="comment-input">
            <input
              type="text"
              placeholder="Write a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              onKeyPress={handleCommentKeyPress}
            />
            <button onClick={handleAddComment}>Post</button>
          </div>
          <div className="comments-list">
            {comments.length === 0 ? (
              <p style={{ color: "#999", fontSize: "12px" }}>No comments yet</p>
            ) : (
              comments.map((comment, idx) => (
                <div key={idx} className="comment">
                  <strong>You:</strong> {comment}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Post
