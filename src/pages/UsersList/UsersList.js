import React, { useState, useEffect, useContext } from 'react'
import axios from '../../server/api/axios';
import { Link } from "react-router-dom";
import Loader from '../../Components/Loader/Loader';
import { AdminContext } from '../../Context/AdminContext';

function UsersList() {
  const [isFetching, setIsFetching] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [users, setUsers] = useState([]);
  const { admin } = useContext(AdminContext);

  const handleFetch = async () => {
    setFetchError(false);
    setIsFetching(true);
    try {
      const res = await axios.get('/users');
      setUsers(res.data);
      setIsFetching(false);

    } catch (err) {
      setIsFetching(false);
      setFetchError(true);
    };
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      {admin && (
        <>
          <div>{isFetching ? <Loader /> : <button onClick={handleFetch} className="btn mx-auto btn-primary d-flex mb-2 mt-2">Refresh Data</button>}</div>
          <h3 className="d-flex justify-content-center">{fetchError ? 'Something went wrong.' : ''}</h3>
          {users.length !== 0 && (
            <div>
              <h1 className="d-flex justify-content-center">Users</h1>
              <div className="container-fluid row row-cols-md-5">
                {users.map((user) => (
                  <div key={user._id} className="col m-3 rounded">
                    <img className="d-flex rounded mx-auto mt-2 img-thumbnail border-dark bg-dark" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" width="300" height="300" alt="" />
                    <div className="d-flex flex-column text-center justify-content-center">
                      <div className="card-body d-flex flex-column text-center justify-content-center">
                        <li className="list-group-item">Username: <b>{user.username}</b></li>
                        <li className="list-group-item">Email: <b>{user.email}</b></li>
                        <li className="list-group-item">Admin: <b>{user.isAdmin.toString()}</b></li>
                        <li className="list-group-item">ID: <b>{user._id}</b></li>
                      </div>
                      <div className="card-body">
                        <Link to={'/user-details'} state={{
                          username: user.username,
                          email: user.email,
                          admin: user.isAdmin,
                          id: user._id
                        }} className="mb-2 btn btn-primary">Edit User</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      {!admin && (
        <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
          <h1>You are not an admin, you cannot manage users.</h1>
        </div>
      )}
    </>
  )
}

export default UsersList