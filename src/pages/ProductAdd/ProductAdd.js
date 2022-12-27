import React, { useState, useContext } from 'react';
import axios from '../../api/axios';
import { AuthContext } from '../../Context/AuthContext';

function ProductAdd() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const { auth } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/products', { name, description, price });
    if (res.data.error) return alert(res.data.error);
    alert('Product added successfully!');
  };

  return (
    <>
      {auth && (
        <form onSubmit={handleSubmit}>
          <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
            <h1>Add a new Product</h1>
            <div className="form-group mb-2 w-75">
              <label htmlFor="name">Product Name</label>
              <input className="form-control" id="name" placeholder="Product Name" onChange={e => setName(e.target.value)}></input>
            </div>
            <div className="form-group mb-2 w-75">
              <label htmlFor="description">Product Description</label>
              <textarea className="form-control" id="description" placeholder="Product Description" onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className="form-group mb-2 w-75">
              <label htmlFor="price">Product Price</label>
              <input type="number" className="form-control" id="price" placeholder="Product Price" onChange={e => setPrice(e.target.value)}></input>
            </div>
            <button type="submit" className="mt-2 mb-2 btn btn-primary">Submit</button>
          </div>
        </form>
      )}
      {!auth && (
        <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
          <h1>You must login to add a new product.</h1>
        </div>
      )}
    </>
  )
}

export default ProductAdd