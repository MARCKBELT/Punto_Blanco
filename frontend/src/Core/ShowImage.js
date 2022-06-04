import React from 'react';
import {API} from '../config';
import './ShowImage.css';

const ShowImage = ({item, url}) => (
  <div className="product-img card-img-top">

       <img
      src={`${API}/${url}/Images/${item.id}`}
    
      alt={item.producto}
      className="mb-3 img-cont"
      style={{maxHeight: "600px", maxWidth:"300px"}}/>
  </div>
)

export default ShowImage;