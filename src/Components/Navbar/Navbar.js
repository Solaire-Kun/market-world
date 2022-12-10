import React from 'react';

function Navbar() {
  return (
    <nav className="sticky-top shadow-lg navbar border-bottom border-primary navbar-dark bg-secondary navbar-expand-md mb-4">
      <a href="/" className="navbar-brand m-2">Final Project</a>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse m-2" id="navbar">
        <ul className="navbar-nav ">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/add-product" className="nav-link">Add Product</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
          <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        </ul>
        <ul className="ms-auto me-3 navbar-nav">
          <li className="nav-item me-5"><a href="/manage-users" className="nav-link">Manage Users</a></li>
          <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
          <li className="nav-item"><a href="/register" className="nav-link">Register</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar