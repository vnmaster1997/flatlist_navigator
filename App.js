import React, {Component} from 'react';
import {RootStack, LoginStack} from './router';
export default class App extends Component{
	render() {
		return(
			<LoginStack />
		);
	}
}
