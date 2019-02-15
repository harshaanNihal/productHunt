import React, { Component } from 'react';
import ProductCard from './ProductCard';


class ProductCardWrapper extends Component {
  render() {
    return (
      <div className ="card-wrapper">
        <ProductCard/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
       <ProductCard />
      </div>
    );
  }
}

export default ProductCardWrapper