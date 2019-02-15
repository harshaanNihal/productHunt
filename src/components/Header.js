import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<section className="headerWrapper">
			<div className="header">
				<img src="https://picsum.photos/50"/>
				<button className="header-search"><i/><span>Discover your next favourate Thing...</span></button>
				<ul className="nav-item">
					<li>Ask</li>
					<li>Ship</li>
					<li>Makers</li>
					<li>Jobs</li>
					<li>Events</li>
					<li>...</li>
				</ul>
				<div>
					<button>LOG IN</button>
					<button className="orange">SIGN UP</button>
				</div>
			</div>
			</section>

		);
	}
}

export default Header;
