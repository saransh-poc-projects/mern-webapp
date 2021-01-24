import React from 'react';
import data from './data'; 
import Product from './components/Product'

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
              <Product key={product._id} product={product}></Product>
            ))
          }
            
        </div>
    </main>
    <footer class="row center">All Rights Reserved</footer>
</div>
  );
}

export default App;