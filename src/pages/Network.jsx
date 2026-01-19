import { useState } from "react"
import "../styles/network.css"

function Network() {
  const [people] = useState([
    { id: 1, name: "Alice Johnson", title: "Product Manager", company: "Tech Corp", mutual: 5 },
    { id: 2, name: "Bob Smith", title: "UX Designer", company: "Design Studio", mutual: 3 },
    { id: 3, name: "Carol White", title: "Backend Developer", company: "StartUp Inc", mutual: 7 },
    { id: 4, name: "David Lee", title: "DevOps Engineer", company: "Cloud Services", mutual: 2 },
    { id: 5, name: "Emma Davis", title: "Data Scientist", company: "AI Labs", mutual: 4 }
  ])

  const [connections, setConnections] = useState(new Set())

  const handleConnect = (id) => {
    const newConnections = new Set(connections)
    if (newConnections.has(id)) {
      newConnections.delete(id)
    } else {
      newConnections.add(id)
    }
    setConnections(newConnections)
  }

  return (
    <div className="network-container">
      <div className="network-header">
        <h1>🤝 Network</h1>
        <input type="text" placeholder="Search people..." className="search-people" />
      </div>

      <div className="network-stats">
        <div className="stat">
          <h3>Connections</h3>
          <p>120</p>
        </div>
        <div className="stat">
          <h3>Pending</h3>
          <p>5</p>
        </div>
        <div className="stat">
          <h3>Suggestions</h3>
          <p>{people.length}</p>
        </div>
      </div>

      <h2>People You May Know</h2>
      <div className="people-grid">
        {people.map(person => (
          <div key={person.id} className="person-card">
            <div className="person-avatar">👤</div>
            <h3>{person.name}</h3>
            <p className="title">{person.title}</p>
            <p className="company">{person.company}</p>
            <p className="mutual">🔗 {person.mutual} mutual connections</p>
            <button 
              className={`connect-btn ${connections.has(person.id) ? "connected" : ""}`}
              onClick={() => handleConnect(person.id)}
            >
              {connections.has(person.id) ? "✓ Connected" : "+ Connect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Network
