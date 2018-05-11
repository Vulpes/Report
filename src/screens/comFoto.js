import React, { Component } from 'react';
import {
	View,
	Button,
	Text
} from 'react-native';

import { StackNavigatior, } from 'react-navigation';

//importando o estilo
import styles from '../styles/comFotoS';

export default class comFoto extends Component {
	
	static navigationOptions = {
		title: 'Descrição'
	};

	render(){
		const{ navigate } = this.props.navigation;

		return (
			<View style={styles.background}>
				<Text>Com Foto</Text>
			</View>
		);
	}
}