import React from 'react';
import data from './data';

function App() {
  return (
    <div class="grid-container">
    <header class="row">
        <div>
            <a class="brand" href="index.html">The Box Company <i class="fa fa-gift"></i></a>
        </div>
        <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    </header>
    <main>
        <div class="row center">
          {
            data.products.map(product => (
              <div key={product._id} class="card">
              <a href="product.html">
                  <img class="medium" src={product.image} alt={product.name}/>
              </a>
              <div class="card-body">
                  <a href="product.html">
                      <h2>{product.brand}</h2>
                  </a>    
                  <div class="rating">
                      <span><i class="fa fa-star"></i></span>
                      <span><i class="fa fa-star"></i></span>
                      <span><i class="fa fa-star"></i></span>
                      <span><i class="fa fa-star"></i></span>
                      <span><i class="fa fa-star"></i></span>
                  </div>
                  <div class="price">
                      Rs. {product.price}/ month        
                  </div>
              </div>                        
          </div> 
            ))
          }
            
        </div>
    </main>
    <footer class="row center">All Rights Reserved</footer>
</div>
  );
}

export default App;

