import React, { useState } from 'react';
import axios from '../../server/axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const {setAuth} = useContext(AuthProvider);

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post('/login', {email, password});
        console.log(response);
        //setAuth(true);
        console.log(email, password)
    };

    return (
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
    );
};

export default Login