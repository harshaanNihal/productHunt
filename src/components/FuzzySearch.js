import React, { Component } from 'react';
import fuzzy, { match } from 'fuzzy';

class FuzzySearch extends Component {
  constructor(){
    super();
    this.state={
      data: ["apple","apricot","avocado","banana","bell pepper","bilberry","blackberry","blackcurrant","blood orange","blueberry","boysenberry","breadfruit","canary melon","cantaloupe","cherimoya","cherry","chili pepper","clementine","cloudberry","coconut","cranberry","cucumber","currant","damson","date","dragonfruit","durian","eggplant","elderberry","feijoa","fig","goji berry","gooseberry","grape","grapefruit","guava","honeydew","huckleberry","jackfruit","jambul","jujube","kiwi fruit","kumquat","lemon","lime","loquat","lychee","mandarine","mango","mulberry","nectarine","nut","olive","orange","pamelo","papaya","passionfruit","peach","pear","persimmon","physalis","pineapple","plum","pomegranate","pomelo","purple mangosteen","quince","raisin","rambutan","raspberry","redcurrant","rock melon","salal berry","satsuma","star fruit","strawberry","tamarillo","tangerine","tomato","ugli fruit","watermelon"],
      inputField:"",
    }
  }

  handleClick=(e)=>{
    this.setState({inputField :e.target.value},);
  }

  filteredFizz=()=>{
    var list = this.state.data;
    var results = fuzzy.filter(this.state.inputField, list)
    var matches = results.map((el) =>el.string);
    console.log(matches,results)
    return (match.length) ? matches : this.state.data 
  }

  render() {
    let searchFuzz = this.filteredFizz().splice(0,7);
    // console.log(searchFuzz)
    return (
      <div className="search-container">
        <input onChange={this.handleClick} value={this.state.inputField} className="fuzz fuzz-search" type="text" placeholder="disvover your next favourate thing" />
        {(searchFuzz.length) ? searchFuzz.map(v => <div className="fuzz " ><span className="fuzzItem">{v}</span></div>) : <div className="fuzz " ><span className="fuzzItem">NO RESULT FOUND</span></div>}
      </div>
    );
  }
}

export default FuzzySearch



