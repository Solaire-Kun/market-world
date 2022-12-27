import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';
import { AuthContext } from '../../Context/AuthContext';

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const { auth } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            return alert('The password must be at least 6 characters.');
        } else {
            if (confirmPassword === password) {
                const res = await axios.post('/register', { username, email, password, isAdmin });
                if (res.data.error) return alert(res.data.error);
                navigate('/login');
            } else {
                alert('The password does not match.');
            };
        };
    };

    return (
        <>
            {!auth && (
                <form onSubmit={handleRegister}>
                    <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                        <h1>Register</h1>
                        <div className="form-group mb-2 w-75">
                            <label htmlFor="username">Username</label>
                            <input required type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                        </div>
                        <div className="form-group mb-2 w-75">
                            <label htmlFor="email">Email</label>
                            <input required type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                        </div>
                        <div className="form-group mb-2 w-75">
                            <label htmlFor="password">Password</label>
                            <input required type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                        </div>
                        <div className="form-group mb-2 w-75">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input required type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password"></input>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={isAdmin} onClick={(e) => setIsAdmin(e.target.checked)} id="flexCheckDefault"></input>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Is this user an Administrator?
                            </label>
                        </div>
                        <button type='submit' className="mt-2 mb-2 btn btn-primary">Register</button>
                    </div>
                </form>
            )}
            {auth && (
                <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                    <h1>You cant register a new account while logged in.</h1>
                </div>
            )}
        </>


    )
}

export default Registration