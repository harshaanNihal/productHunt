import React, { Component } from 'react';
import FuzzySearch from './modules/FuzzySearch';


class Header extends Component {
	constructor() {
		super();
		this.state = {
			isSearching: false
		}
	}
	handleClick=(e)=>{
		if(e.target.classList.contains('fuzz-child')) return;
		this.setState({isSearching:!this.state.isSearching})
	}
	render() {
		return (
			<section className="headerWrapper">
			<div className="header">
				<img src="https://picsum.photos/35"/>
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
			{this.state.isSearching && <FuzzySearch handleClick={this.handleClick}/>}
			</section>


		);
	}
}

export default Header;
