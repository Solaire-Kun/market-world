import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../../server/api/axios';
import { AuthContext } from '../../Context/AuthContext';
import { AdminContext } from '../../Context/AdminContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auth, setAuth } = useContext(AuthContext);
    const { setAdmin } = useContext(AdminContext);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await axios.post('/login', { email, password });
        if (res.data.error) return alert(res.data.error);
        sessionStorage.setItem('authToken', res.data.token);
        setAuth(true);
        if (res.data.admin) {
            sessionStorage.setItem('isAdmin', res.data.admin);
            sessionStorage.setItem('username', res.data.username);
            sessionStorage.setItem('id', res.data.id);
            setAdmin(true);
            navigate('/');
        } else {
            sessionStorage.setItem('username', res.data.username);
            sessionStorage.setItem('id', res.data.id);
            setAdmin(false);
            navigate('/');
        };
    };

    return (
        <>
            {!auth && (
                <form onSubmit={handleLogin}>
                    <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                        <h1>Login</h1>
                        <div className="form-group mb-2 w-75">
                            <label htmlFor="inputEmail">Email</label>
                            <input required type="email" className="form-control" id="inputEmail" onChange={e => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Email"></input>
                        </div>
                        <div className="form-group mb-2 w-75">
                            <label htmlFor="inputPassword">Password</label>
                            <input required type="password" className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)} placeholder="Password"></input>
                        </div>
                        <button className="mt-2 mb-2 btn btn-primary">Login</button>
                    </div>
                </form>
            )}
            {auth && (
                <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                    <h1>You are already logged in.</h1>
                </div>
            )}
        </>
    )
}

export default Login