import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg"
      style={{
        background: "linear-gradient(90deg, #0f766e, #14b8a6)",
       fontFamily: "'Nunito', sans-serif",
        padding: "15px 0",
      }}
    >
      <div className="container">

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">

            <li className="nav-item mx-4">
              <Link className="nav-link text-white fw-bold fs-4" to="/">
                🏥 Patients
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link text-white fw-bold fs-4" to="/add">
                ➕ Add Patient
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link text-white fw-bold fs-4" to="/search">
                🔍 Search Patient
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link text-white fw-bold fs-4" to="/discharge">
                🚑 Discharge
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;