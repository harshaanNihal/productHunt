import React, { Component } from 'react';
import FuzzySearch from './FuzzySearch';


class Header extends Component {
	constructor() {
		super();
		this.state = {
			isSearching: false
		}
	}
	handleClick=()=>{
		this.setState({isSearching:true})
	}
	render() {
		return (
			<section className="headerWrapper">
			<div className="header">
				<img src="https://picsum.photos/50"/>
				<button onClick={this.handleClick} className="header-search"><i/><span>Discover your next favourate Thing...</span></button>
				<ul className="nav-item">
					<li>Ask</li>
					<li>Ship</li>
					<li>Makers</li>
					<li>Jobs</li>
					<li>Events</li>
					<li>...</li>
				</ul>
				<div>
					<button className="login-btn">LOG IN</button>
					<button className="orange">SIGN UP</button>
				</div>
			</div>
			{this.state.isSearching && <FuzzySearch/>}
			</section>


		);
	}
}

export default Header;
