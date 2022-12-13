import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from './Context/AuthContext';
import { AdminContext } from './Context/AdminContext';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Support from './pages/Support/Support';
import Registration from './pages/Auth/Registration';
import ProductAdd from './pages/ProductAdd/ProductAdd';
import ProductsList from './pages/ProductsList/ProductsList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import UsersList from './pages/UsersList/UsersList';
import UserProfile from './pages/UserProfile/UserProfile';
import UserDetails from './pages/UserDetails/UserDetails';
import Footer from './Components/Footer/Footer';

function App() {
  const [auth, setAuth] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('authToken')) {
      setAuth(true);
    } else {
      setAuth(false);
    };

    if (sessionStorage.getItem('isAdmin')) {
      setAdmin(true);
    } else {
      setAdmin(false);
    };
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <AdminContext.Provider value={{ admin, setAdmin }}>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/support' element={<Support />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Registration />}></Route>
              <Route path='/products' element={<ProductsList />}></Route>
              <Route path='/product-add' element={<ProductAdd />}></Route>
              <Route path='/product-details' element={<ProductDetails />}></Route>
              <Route path='/users' element={<UsersList />}></Route>
              <Route path='/user-profile' element={<UserProfile />}></Route>
              <Route path='/user-details' element={<UserDetails />}></Route>
            </Routes>
          </BrowserRouter>
        </AdminContext.Provider>
      </AuthContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
