import React, { useState, useEffect, useContext } from 'react';
import axios from '../../server/api/axios';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext';

function ProductDetails() {
    const { state } = useLocation();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [id, setId] = useState('');
    const { auth } = useContext(AuthContext);

    const navigate = useNavigate();

    const updateProduct = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`/products/${id}`, { name, description, price, id });
        if (res.data.error) return alert(res.data.error);
        alert('Product successfully updated!');
    };

    const deleteProduct = async (e) => {
        e.preventDefault();
        const res = await axios.delete(`/products/${id}`, { id });
        if (res.data.error) return alert(res.data.error);
        alert('Product successfully deleted!');
        navigate('/products');
    };

    useEffect(() => {
        setId(state.id);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {auth && ((
                <div className="d-flex flex-column container-fluid justify-content-center text-justify align-items-center">
                    <form onSubmit={updateProduct}>
                        <img className="rounded mx-auto mb-2 mt-2 border-dark img-thumbnail bg-dark" src="https://i.imgur.com/Bi6EAZQ.png" width="300" height="300" alt="" />
                        <div className="form-group mb-2">
                            <label htmlFor="name">New Name</label>
                            <input required type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={state.name}></input>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="description">New Description</label>
                            <input required type="text" className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder={state.description}></input>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="price">New Price</label>
                            <input required type="number" className="form-control" id="price" onChange={(e) => setPrice(e.target.value)} placeholder={state.price}></input>
                        </div>
                        <button type='submit' className="mt-2 mb-2 mx-auto d-flex btn btn-primary">Save Changes</button>
                    </form>
                    <Link to='/' className="btn btn-primary d-flex mb-2 mt-2">Go back</Link>
                    <form onSubmit={deleteProduct}>
                        <button type="submit" className="btn btn-danger d-flex mb-2 mt-2">Delete Product</button>
                    </form>
                    <span>ID: <b>{state.id}</b></span>
                </div>
            ))}
            {!auth && (
                <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                    <h1>You must be logged in to view a product.</h1>
                </div>
            )}
        </>
    )
}

export default ProductDetails