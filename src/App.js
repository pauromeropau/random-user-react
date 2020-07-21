import React from 'react';
import RandomUser from './components/random-user/RandomUser';

import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<RandomUser />
			</div>
		);
	}
}


