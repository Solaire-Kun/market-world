import React, { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from "react-router-dom";

function Support() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('/support', { title, description });
        if (res.data.error) return alert(res.data.error);
        alert('Successfully submitted!');
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                <h1>Got any questions or issues?</h1>
                <div className="form-group mb-2 w-75">
                    <label>Title</label>
                    <input required type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} placeholder="Title"></input>
                </div>
                <div className="form-group mb-2 w-75">
                    <label >Description</label>
                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                </div>
                <button type='submit' className="mt-2 mb-2 btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Support