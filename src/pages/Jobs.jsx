import { useState } from "react"
import "../styles/jobs.css"

function Jobs() {
  const [jobs] = useState([
    { id: 1, title: "React Developer", company: "Tech Corp", location: "Remote", salary: "$80k - $120k" },
    { id: 2, title: "Full Stack Developer", company: "StartUp Inc", location: "San Francisco", salary: "$100k - $150k" },
    { id: 3, title: "Frontend Engineer", company: "Design Studio", location: "New York", salary: "$90k - $130k" },
    { id: 4, title: "React Native Developer", company: "Mobile First", location: "Austin", salary: "$85k - $125k" }
  ])

  const [savedJobs, setSavedJobs] = useState(new Set())

  const handleSaveJob = (id) => {
    const newSaved = new Set(savedJobs)
    if (newSaved.has(id)) {
      newSaved.delete(id)
    } else {
      newSaved.add(id)
    }
    setSavedJobs(newSaved)
  }

  const handleApply = (id) => {
    alert("Application submitted for job " + id)
  }

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <h1>💼 Job Opportunities</h1>
        <input type="text" placeholder="Search jobs..." className="search-jobs" />
      </div>

      <div className="jobs-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-info">
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">📍 {job.location}</p>
              <p className="salary">💰 {job.salary}</p>
            </div>
            <div className="job-actions">
              <button 
                className={`save-btn ${savedJobs.has(job.id) ? "saved" : ""}`}
                onClick={() => handleSaveJob(job.id)}
              >
                {savedJobs.has(job.id) ? "❤️ Saved" : "🤍 Save"}
              </button>
              <button className="apply-btn" onClick={() => handleApply(job.id)}>
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs
