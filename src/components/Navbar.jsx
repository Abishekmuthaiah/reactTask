import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "../styles/navbar.css"

function Navbar({ searchQuery, setSearchQuery }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [activePage, setActivePage] = useState(
    location.pathname === "/" ? "Home" : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)
  )

  const handleNavClick = (page) => {
    setActivePage(page)
    const path = page === "Home" ? "/" : "/" + page.toLowerCase()
    navigate(path)
  }

  return (
    <div className="navbar">
      <h2 onClick={() => handleNavClick("Home")} style={{ cursor: "pointer" }}>ProNet</h2>
      <input 
        type="text" 
        placeholder="Search" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="nav-icons">
        <span 
          onClick={() => handleNavClick("Home")}
          className={activePage === "Home" ? "active" : ""}
        >
          Home
        </span>
        <span 
          onClick={() => handleNavClick("Jobs")}
          className={activePage === "Jobs" ? "active" : ""}
        >
          Jobs
        </span>
        <span 
          onClick={() => handleNavClick("Network")}
          className={activePage === "Network" ? "active" : ""}
        >
          Network
        </span>
        <span 
          onClick={() => handleNavClick("Profile")}
          className={activePage === "Profile" ? "active" : ""}
        >
          Profile
        </span>
      </div>
    </div>
  )
}

export default Navbar
