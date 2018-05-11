import React, { Component } from 'react';
import {
	View,
	Button,
	Image,
	TouchableHighlight,
	Text
} from 'react-native';

import { StackNavigatior, } from 'react-navigation';

//loading

//importando o estilo
import styles from '../styles/loadingS';

//importando as imagens
const icon = require('../img/iconc.png');
const logo = require('../img/logo-white.png');

export default class loading extends Component {
	
	static navigationOptions = {
		title: 'Welcome',
		headerStyle: { backgroundColor: '#0D3EFF'},
		headerTitleStyle: { color: '#fff'},
	};

	render(){
		const{ navigate } = this.props.navigation;

		return (
			<View style={styles.background}>

				<View style={styles.container}>
					<View style={styles.imgContainer}>
						<Image source={icon} style={styles.iconS}/>
						<Image source={logo} style={styles.logoS} />
					</View>
					<View style={styles.containerBtn}>
						<Button title="Vamos Começar" onPress={() => navigate('Principal')}
							color='#0C73E8' 
							accessibilityLabel="Clique aqui para seguir para a tela Principal"
						/>
					</View>
					
				</View>
				
			</View>
		);
	}
}
