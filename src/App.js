import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductPage from './components/ProductPage';
import ProductCardWrapper from './components/ProductCardWrapper';


class App extends Component {
  constructor(){
    super();
    this.state={
      isShowing :true,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ProductCardWrapper/>
        {(this.state.isShowing) ? <ProductPage/> : null}


      </div>
    );
  }
}

export default App;
