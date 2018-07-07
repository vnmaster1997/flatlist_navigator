import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

export default class Settings extends Component {
	_handleSignOutPress() {
		this.props.navigation.navigate('Login');
	}
	render() {
		return (
		<ScrollView>
			<List>
				<ListItem
					title="Notifications"
				/>
				<ListItem
					title="Profile"
				/>
				<ListItem
					title="Password"
				/>
			</List>
			<List >
				<Button
					onPress={() => this._handleSignOutPress()}
					title="Sign Out"
					iconRight={{ name: 'cancel' }}
					backgroundColor="#278ff7"
				/>
			</List>
		</ScrollView>
		);
	}
}
