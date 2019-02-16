import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        {/* <h1>Today</h1> */}
        <div>
          <img src="https://picsum.photos/90" />
        </div>
        <div className="product-details">
          <h3><a href="">Design Tools</a></h3>
          <p>A place to follow & learn from the best designers.</p>
          <div>
            <button className="message"><i class="fas fa-comment"><span>5</span></i></button>
            <button className="design"><span><i class="far fa-edit"></i></span>Design Tools</button>
          </div>
        </div>
        <button className="right-btn"><i class="fas fa-caret-up"></i></button>
      </div>
    );
  }
}

export default ProductCard;
