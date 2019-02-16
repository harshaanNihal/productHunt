import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import ProductCardWrapper from './components/ProductCardWrapper';


class App extends Component {
  constructor(){
    super();
    this.state = {
      isShowing :false,
    }
  }

  handleIsShowing=()=>{
    console.log("hello");
    this.setState({ isShowing: !this.state.isShowing })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <ProductCardWrapper handleIsShowing={this.handleIsShowing}/>
        {this.state.isShowing && <ProductPage handleIsShowing={this.handleIsShowing}/> }


      </div>
    );
  }
}

export default App;
