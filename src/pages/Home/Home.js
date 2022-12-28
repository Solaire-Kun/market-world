import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AdminContext } from '../../Context/AdminContext';

function Home() {
    const { admin } = useContext(AdminContext);

    return (
        <div>
            <h1 className="d-flex justify-content-center"><b>Welcome {sessionStorage.getItem('username')}!</b></h1>
            <div className="d-flex container-fluid justify-content-center align-items-center row row-cols-md-5">
                <div className="col m-3 rounded">
                    <img className="d-flex rounded mx-auto mt-2 img-fluid border-dark bg-dark" src="https://i.imgur.com/Bi6EAZQ.png" width="300" height="300" alt="" />
                    <div className="d-flex flex-column text-center justify-content-center">
                        <div className="card-body d-flex flex-column text-center justify-content-center">
                            <h3>Manage your Products!</h3>
                        </div>
                        <div className="mt-3 card-body">
                            <Link to={'/products'} className="mb-2 btn btn-primary">Go to Products</Link>
                        </div>
                    </div>
                </div>
                {admin && (
                    <div className="col m-3 rounded">
                        <img className="d-flex rounded mx-auto mt-2 img-fluid border-dark bg-dark" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" width="300" height="300" alt="" />
                        <div className="d-flex flex-column text-center justify-content-center">
                            <div className="card-body d-flex flex-column text-center justify-content-center">
                                <h3>Manage Users!</h3>
                            </div>
                            <div className="mt-3 card-body">
                                <Link to={'/users'} className="mb-2 btn btn-primary">Go to Users list</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home