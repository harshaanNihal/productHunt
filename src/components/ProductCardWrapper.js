import React, { Component } from 'react';
import ProductCard from './ProductCard';


class ProductCardWrapper extends Component {
  render() {
    return (
      <div className ="card-wrapper">
        <ProductCard handleIsShowing={this.props.handleIsShowing}/>
        <ProductCard handleIsShowing={this.props.handleIsShowing} />
        <ProductCard handleIsShowing={this.props.handleIsShowing} />
        <ProductCard handleIsShowing={this.props.handleIsShowing} />
       <ProductCard  handleIsShowing={this.props.handleIsShowing}/>
      </div>
    );
  }
}

export default ProductCardWrapper