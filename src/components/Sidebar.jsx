import { useState } from "react"
import "../styles/sidebar.css"

function Sidebar() {
  const [connections, setConnections] = useState(120)
  const [isFollowing, setIsFollowing] = useState(false)

  const handleConnect = () => {
    if (!isFollowing) {
      setConnections(connections + 1)
      setIsFollowing(true)
    }
  }

  return (
    <div className="sidebar">
      <h3>👤 Profile</h3>
      <p><strong>Name:</strong> Abishek</p>
      <p>💻 React Developer</p>
      <hr />
      <p>🔗 Connections: {connections}</p>
      <p>👀 Profile Views: 300</p>
      <button 
        className={`connect-btn ${isFollowing ? "following" : ""}`}
        onClick={handleConnect}
      >
        {isFollowing ? "✓ Following" : "+ Connect"}
      </button>
    </div>
  )
}

export default Sidebar
