import React from "react";
import { Link } from "react-router-dom";
import './ProductsList.css';

const ProductsList = (props) => {
    const items = props.items;

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mx-auto w-50 mb-3">
                <input type="search" className="form-control" placeholder="Search a product" aria-label="Search" />
            </div>
            <h1 className="d-flex justify-content-center">Products</h1>
            <div className="container-fluid row row-cols-md-5">

                <div className="col">
                    <img className="d-flex rounded mx-auto mt-2 img-thumbnail bg-dark" src="https://www.lg.com/it/images/monitor/md06046596/gallery/lg-monitor-32UL950-W-medium01-new.jpg" alt="" />
                    <div className="d-flex flex-column text-center justify-content-center">
                        <h3 className="pt-2">Monitor 4K</h3>

                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductsList;