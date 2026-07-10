
        import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold fs-5" to="/">
                Patients
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold fs-5" to="/add">
                Add Patient
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold fs-5" to="/search">
                Search Patient
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold fs-5" to="/delete">
                Delete Patient
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
  