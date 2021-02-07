import React from 'react';
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;
    return(
        <div key={product._id} class="card">
              <a href="product.html">
                  <img class="medium" src={product.image} alt={product.name}/>
              </a>
              <div class="card-body">
                  <a href={product/product._id}>
                      <h2>{product.brand}</h2>
                  </a>    
                  <Rating 
                    rating={product.Rating} 
                    numReviews={product.numReviews}> 
                  </Rating>
                  <div class="price">
                      Rs. {product.price}/ month        
                  </div>
              </div>                        
        </div> 
    );
}