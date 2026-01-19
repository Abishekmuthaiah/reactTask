import { useState } from "react"
import "../styles/rightbar.css"

function Rightbar() {
  const [trends] = useState([
    { id: 1, name: "#ReactJS", posts: 15200 },
    { id: 2, name: "#WebDevelopment", posts: 28500 },
    { id: 3, name: "#Careers", posts: 9800 },
    { id: 4, name: "#JavaScript", posts: 32100 },
    { id: 5, name: "#TechNews", posts: 5600 }
  ])

  const [followedTrends, setFollowedTrends] = useState(new Set())

  const handleFollowTrend = (id) => {
    const newFollowed = new Set(followedTrends)
    if (newFollowed.has(id)) {
      newFollowed.delete(id)
    } else {
      newFollowed.add(id)
    }
    setFollowedTrends(newFollowed)
  }

  return (
    <div className="rightbar">
      <h3>🔥 Trending</h3>
      <div className="trends-list">
        {trends.map(trend => (
          <div key={trend.id} className="trend-item">
            <div>
              <h4>{trend.name}</h4>
              <p>{trend.posts.toLocaleString()} posts</p>
            </div>
            <button 
              className={`follow-btn ${followedTrends.has(trend.id) ? "followed" : ""}`}
              onClick={() => handleFollowTrend(trend.id)}
            >
              {followedTrends.has(trend.id) ? "✓" : "+"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rightbar
