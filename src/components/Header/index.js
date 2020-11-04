import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from '@material-ui/core';

import './styles.css';
import { Link } from 'react-router-dom';
function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__icon"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png"
					alt="airbnb clone"
				/>
			</Link>
			<div className="header__center">
				<input type="text" />
				<SearchIcon />
			</div>
			<div className="header__right">
				<p>Become a Host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
