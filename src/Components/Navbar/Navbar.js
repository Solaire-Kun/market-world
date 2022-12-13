import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { AdminContext } from '../../Context/AdminContext';

function Navbar() {
  const { auth, setAuth } = useContext(AuthContext);
  const { admin, setAdmin } = useContext(AdminContext);

  const handleLogout = async (e) => {
    sessionStorage.clear();
    setAuth(false);
    setAdmin(false);
  };

  return (
    <nav className="sticky-top shadow-lg navbar border-bottom border-primary navbar-dark bg-secondary navbar-expand-md mb-4">
      <a href="/" className="navbar-brand m-2">Market World</a>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse m-2" id="navbar">
        <ul className="navbar-nav ">
          <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="/products" className="nav-link">Products</a></li>
          <li className="nav-item"><a href="/support" className="nav-link">Support</a></li>
        </ul>
        <ul className="ms-auto me-3 navbar-nav">
          {admin && (
            <li className="nav-item"><a href="/users" className="nav-link">Manage Users</a></li>
          )}
          {auth && (
            <>
              <li className="nav-item"><a href="/product-add" className="nav-link">Add Product</a></li>
              <div className="me-5 dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  {sessionStorage.getItem('username')}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="/user-profile">Edit Profile</a></li>
                  <button onClick={handleLogout} className="dropdown-item">Logout</button>
                </ul>
              </div>
            </>
          )}
          {!auth && (
            <>
              <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
              <li className="nav-item"><a href="/register" className="nav-link">Register</a></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar