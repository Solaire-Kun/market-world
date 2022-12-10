import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductsList from './pages/ProductsList/ProductsList';
import ManageUsers from './pages/ManageUsers/ManageUsers';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductsList />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Registration />}></Route>
          <Route path='/add-product' element={<AddProduct />}></Route>
          <Route path='/manage-users' element={<ManageUsers />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
