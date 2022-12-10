import React from 'react'

function addProduct() {
  return (
    <form>
      <div className='bg-secondary shadow-lg w-50 card border-primary d-flex flex-column justify-content-center mx-auto align-items-center'>
        <h1>Add a new Product</h1>
        <div className="form-group mb-2 w-75">
          <label htmlFor="productName">Product Name</label>
          <input className="form-control" id="productName" placeholder="Product Name"></input>
        </div>
        <div className="form-group mb-2 w-75">
        <label htmlFor="productDescription">Product Description</label>
          <textarea className="form-control" id="productDescription" placeholder="Product Description"></textarea>
        </div>
        <div className="form-group mb-2 w-75">
          <label htmlFor="productPrice">Product Price</label>
          <input type="number" className="form-control" id="productPrice" placeholder="Product Price"></input>
        </div>
        <button type="submit" className="mt-2 mb-2 btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default addProduct