import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar({ title, isDarkMode, toggleDarkMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/TextUtils">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/TextUtils">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
