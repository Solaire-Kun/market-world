import React, { useState } from 'react'
import axios from '../../server/axios';

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (confirmPassword === password) {
            try {
                console.log(username, email, password)
                const response = await axios.post('/register', {username, email, password});
                console.log(response);
            } catch (err) {
                console.log(err)
            };
        } else {
            alert('The password does not match.');
        };
    };

    return (
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
                <button type='submit' className="mt-2 mb-2 btn btn-primary">Register</button>
            </div>
        </form>
    )
}

export default Registration