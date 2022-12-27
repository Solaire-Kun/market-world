import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserDetails() {
    const { state } = useLocation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(state.admin);
    const [id, setId] = useState('');

    const navigate = useNavigate();

    const updateUser = async (e) => {
        e.preventDefault();
        if (password.length < 6) return alert('The password must be at least 6 characters.');
        if (confirmPassword === password) {
            const res = await axios.patch(`/users/${id}`, { username, email, password, isAdmin, id });
            if (res.data.error) return alert(res.data.error);
            alert('User successfully updated!');

        } else {
            alert('The password does not match.');
        };
    };

    const deleteUser = async (e) => {
        e.preventDefault();
        const res = await axios.delete(`/users/${id}`, { id });
        if (res.data.error) return alert(res.data.error);
        alert('User successfully deleted!');
        navigate('/users');
    };

    useEffect(() => {
        setIsAdmin(state.admin);
        setId(state.id);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="d-flex flex-column container-fluid justify-content-center text-justify align-items-center">
            <form onSubmit={updateUser}>
                <img className="rounded mx-auto mb-2 mt-2 border-dark img-thumbnail bg-dark" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" width="300" height="300" alt="" />
                <div className="form-group mb-2">
                    <label htmlFor="username">New Username</label>
                    <input required type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder={state.username}></input>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="email">New Email</label>
                    <input required type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={state.email}></input>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="password">New Password</label>
                    <input required type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password"></input>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input required type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm New Password"></input>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} id="flexCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Is this user an Administrator?
                    </label>
                </div>
                <button type='submit' className="mt-2 mb-2 mx-auto d-flex btn btn-primary">Save Changes</button>
            </form>
            <Link to='/users' className="btn btn-primary d-flex mb-2 mt-2">Go back</Link>
            <form onSubmit={deleteUser}>
                <button type="submit" className="btn btn-danger d-flex mb-2 mt-2">Delete User</button>
            </form>
            <span>ID: <b>{state.id}</b></span>
        </div>
    )
}

export default UserDetails