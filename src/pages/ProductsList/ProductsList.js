import React, { useState, useEffect, useContext } from 'react'
import axios from '../../server/api/axios';
import { Link } from "react-router-dom";
import Loader from '../../Components/Loader/Loader';
import { AuthContext } from '../../Context/AuthContext';
import { AdminContext } from '../../Context/AdminContext';
import './ProductsList.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    const [noProducts, setNoProducts] = useState(false);
    const { auth } = useContext(AuthContext);
    const { admin } = useContext(AdminContext);

    const handleFetch = async () => {
        setNoProducts(false);
        setFetchError(false);
        setIsFetching(true);
        const res = await axios.get('/products');
        if (res.data.length === 0) {
            setNoProducts(true);
            setIsFetching(false);
        } else {
            setProducts(res.data);
            setIsFetching(false);
        };
    };

    const buyProduct = async (e) => {
        e.preventDefault();
        const res = await axios.delete(`/products/${e.target.value}`);
        if (res.data.error) return alert(res.data.error);
        alert('Product successfully bought!');
        window.location.reload();
    };

    useEffect(() => {
        handleFetch();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div>{isFetching ? <Loader /> : <button onClick={handleFetch} className="btn mx-auto btn-primary d-flex mb-2 mt-2">Refresh Data</button>}</div>
            <h3 className="d-flex justify-content-center">{fetchError ? 'Something went wrong.' : ''}</h3>
            <h3 className="d-flex justify-content-center">{noProducts ? 'No products available.' : ''}</h3>
            {products.length !== 0 && (
                <div>
                    <h1 className="d-flex justify-content-center">Products</h1>
                    <div className="container-fluid row row-cols-md-5">
                        {products.map((product) => (
                            <div key={product._id} className="col m-3 rounded">
                                <img className="d-flex rounded mx-auto mt-2 img-thumbnail border-dark bg-dark" src="https://i.imgur.com/Bi6EAZQ.png" width="300" height="300" alt="" />
                                <div className="d-flex flex-column text-center justify-content-center">
                                    <div className="card-body d-flex flex-column text-center justify-content-center">
                                        <li className="list-group-item">Product Name: <b>{product.name}</b></li>
                                        <li className="list-group-item">Description: <b>{product.description}</b></li>
                                        <li className="list-group-item">Price: <b>{product.price}€</b></li>
                                    </div>
                                    {auth && (
                                        <>
                                            <div className="card-body">
                                                <button onClick={buyProduct} value={product._id} className="mb-2 me-2 btn btn-primary">Buy</button>
                                                {admin && (
                                                    <Link to={'/product-details'} state={{
                                                        name: product.name,
                                                        description: product.description,
                                                        price: product.price,
                                                        id: product._id
                                                    }} className="mb-2 btn btn-primary">View Product</Link>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductsList;