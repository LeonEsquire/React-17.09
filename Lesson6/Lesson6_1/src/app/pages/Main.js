import React from 'react';
import About from './About';
import { Route } from 'react-router-dom';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<h1>Главная страница</h1>
				<p>Добро пожаловать на наш сайт!</p>
				<Route path="/home/hello" component={About} />
			</div>
		);
	}
}
