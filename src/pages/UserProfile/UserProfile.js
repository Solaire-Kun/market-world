import React, { useState, useEffect, useContext } from 'react';
import axios from '../../api/axios';
import { AuthContext } from '../../Context/AuthContext';

function UserProfile() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [id, setId] = useState('');
    const { auth } = useContext(AuthContext);

    const updateUser = async (e) => {
        e.preventDefault();
        if (password.length < 6) return alert('The password must be at least 6 characters.');
        if (confirmPassword === password) {
            const res = await axios.patch(`/users/${id}`, { username, password, id });
            if (res.data.error) return alert(res.data.error);
            setUsername(sessionStorage.setItem('username', username));
            alert('User successfully updated!');

        } else {
            alert('The password does not match.');
        };
    };

    useEffect(() => {
        setUsername(sessionStorage.getItem('username'));
        setId(sessionStorage.getItem('id'));
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {auth && (
                <div className="d-flex flex-column container-fluid justify-content-center text-justify align-items-center">
                    <form onSubmit={updateUser}>
                        <img className="rounded mx-auto mb-2 mt-2 border-dark img-fluid bg-dark" src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" width="300" height="300" alt="" />
                        <div className="form-group mb-2">
                            <label htmlFor="username">New Username</label>
                            <input required type="text" className="form-control" id="username" onChange={(e) => setUsername(e.target.value)} placeholder={username}></input>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="password">New Password</label>
                            <input required type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="New Password"></input>
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <input required type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm New Password"></input>
                        </div>
                        <button type='submit' className="mt-2 mb-2 mx-auto d-flex btn btn-primary">Save Changes</button>
                    </form>
                </div>
            )}
            {!auth && (
                <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                    <h1>You cant edit your profile if you are not logged in.</h1>
                </div>
            )}

        </>

    )
}

export default UserProfile