import { useState } from "react"
import "../styles/profile.css"

function Profile() {
  const [profile, setProfile] = useState({
    name: "Abishek Muthaiah",
    title: "React Developer",
    bio: "Passionate about building interactive web applications",
    location: "Tech City",
    email: "abishek@example.com",
    connections: 120,
    views: 300,
    posts: 15
  })

  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(profile)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSave = () => {
    setProfile(formData)
    setEditMode(false)
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-banner"></div>
        <div className="profile-info">
          <div className="profile-avatar">👤</div>
          <div className="profile-details">
            <h1>{profile.name}</h1>
            <p className="title">{profile.title}</p>
            <p className="location">📍 {profile.location}</p>
          </div>
          <button 
            className="edit-btn"
            onClick={() => setEditMode(!editMode)}
          >
            {editMode ? "Cancel" : "✏️ Edit Profile"}
          </button>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-stats">
          <div className="stat">
            <h3>{profile.connections}</h3>
            <p>Connections</p>
          </div>
          <div className="stat">
            <h3>{profile.views}</h3>
            <p>Profile Views</p>
          </div>
          <div className="stat">
            <h3>{profile.posts}</h3>
            <p>Posts</p>
          </div>
        </div>

        {editMode ? (
          <div className="edit-form">
            <h2>Edit Profile</h2>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea 
                name="bio" 
                value={formData.bio}
                onChange={handleChange}
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <button className="save-btn" onClick={handleSave}>Save Changes</button>
          </div>
        ) : (
          <div className="profile-about">
            <h2>About</h2>
            <p>{profile.bio}</p>
            <hr />
            <h3>Contact Information</h3>
            <p>📧 Email: {profile.email}</p>
            <p>📞 Phone: +1 (555) 123-4567</p>
            <p>🌐 Website: www.abishek.dev</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
