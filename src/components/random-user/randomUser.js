import React from 'react';
import axios from 'axios';

import './RandomUser.css';
import random from './random.svg';
import randomFemale from './randomFemale.svg';
import randomMale from './randomMale.svg';

export default class RandomUser extends React.Component {
	constructor() {
		super();
		this.state = {
			user: null,
		};
		this.getUser = this.getUser.bind(this);
		this.getUserFemale = this.getUserFemale.bind(this);
		this.getUserMale = this.getUserMale.bind(this);
	}

	componentDidMount() {
		setTimeout(() => this.getUser(), 20 * 60);
	}

	getUser() {
		axios
			.get('https://randomuser.me/api')
			.then((res) => {
				this.setState({ user: res.data.results[0] });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	getUserFemale() {
		axios
			.get('https://randomuser.me/api/?gender=female')
			.then((res) => {
				this.setState({ user: res.data.results[0] });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	getUserMale() {
		axios
			.get('https://randomuser.me/api/?gender=male')
			.then((res) => {
				this.setState({ user: res.data.results[0] });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return this.state.user ? (
			<div className="randomUserContainer">
				<div className="randomUser">
					<div className="nameContainer">
						<h1 className="name">
							{this.state.user.name.title} {this.state.user.name.first} {this.state.user.name.last}
						</h1>
					</div>
					<div className="infoContainer">
						<div className="infoContainerImg">
							<img className="picture" alt="Random User" src={this.state.user.picture.large} />
						</div>
						<div className="infoContainerText">
							<div className="birthdate">{this.state.user.dob.date.substring(0, 10)}</div>
							<div className="age">({this.state.user.dob.age} years old)</div>
							<div className="email">{this.state.user.email} </div>
							<div className="phone">{this.state.user.phone}</div>
						</div>
					</div>
					<div className="buttonsContainer">
						<button className="buttonRandom" onClick={this.getUser}>
							<img className="random" src={random} alt="Random" />
						</button>
						<button className="buttonFemale" onClick={this.getUserFemale}>
							<img className="randomFemale" src={randomFemale} alt="Random Female" />
						</button>
						<button className="buttonMale" onClick={this.getUserMale}>
							<img className="randomMale" src={randomMale} alt="Random Male" />
						</button>
					</div>
				</div>
			</div>
		) : (
			<div className="randomUserContainer">
				<div className="loadingContainer">
					<div className="loading">
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		);
	}
}
