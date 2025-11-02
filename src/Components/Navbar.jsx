import React from 'react'

function Navbar() {
  return (
<>

<nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#"><i className="fas fa-heartbeat"></i> Wellnex Systems</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item"><a className="nav-link active" href="#home"  style={{ color: '#6C63FF' }}>Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#apps">App</a></li>
          <li className="nav-item"><a className="nav-link" href="#why-wellnex">Why Wellnex</a></li>
          <li className="nav-item"><a className="nav-link" href="#coming-soon">Coming Soon</a></li>
          <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
        </ul>
        <button className="btn" type="button">Join Waitlist</button>
      </div>
    </div>
  </nav>

</>
  )
}

export default Navbar
