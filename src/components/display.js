import React from 'react';

const Display = ({ brand, style, size, upcID }) => (
  < div className='item' >
    <p><span className="label">Brand : </span>{brand}</p>
    <p><span className="label">Style : </span>{style}</p>
    <p><span className="label">Size : </span>{size}</p>
    <p><span className="label">UPC ID : </span>{upcID}</p>
  </div >
)

export default Display;





