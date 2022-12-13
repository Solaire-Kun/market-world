import React from 'react';
import { useNavigate } from "react-router-dom";

function Support() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        alert('Successfully submitted!');
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
                <h1>Got any questions or issues?</h1>
                <div className="form-group mb-2 w-75">
                    <label>Title</label>
                    <input required type="text" className="form-control" placeholder="Title"></input>
                </div>
                <div className="form-group mb-2 w-75">
                    <label >Description</label>
                    <textarea className="form-control" placeholder="Description"></textarea>
                </div>
                <button type='submit' className="mt-2 mb-2 btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Support