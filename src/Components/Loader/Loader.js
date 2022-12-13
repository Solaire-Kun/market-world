import React from 'react';
import './Loader.css';

function Loader() {
  return (
    <div className='d-flex mx-auto flex-column align-items-center justify-content-center'>
        <div className='mt-2 spinner'>
            <div></div>
        </div>
        <h3 className='mt-3 text-center text-white'>Loading data...</h3>
    </div>
  )
}

export default Loader