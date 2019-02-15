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
          <h3>Title</h3>
          <p>Description</p>
          <div>
            <button>5</button>
            <button>Design Tools</button>
          </div>
        </div>
        <button>count</button>
      </div>
    );
  }
}

export default ProductCard;
