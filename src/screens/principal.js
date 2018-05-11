import React, { Component } from 'react';
import {
	View,
	TouchableOpacity,
	Text
} from 'react-native';

import { StackNavigatior, } from 'react-navigation';

//importando estilo
import styles from '../styles/principalS';

export default class principal extends Component {
	
	static navigationOptions = {
		title: 'Principal'
	};

	render(){
		const{ navigate } = this.props.navigation;

		return (
			<View style={styles.background}>

				<View style={styles.containerGeral}>
					<Text>Selecione uma das opções abaixo para reportar o problema encontrado!!</Text>
				</View>
				<View style={styles.containerBtn}> 
					<TouchableOpacity 
						onPress={() => navigate('ComFoto')}
						style={styles.btn} 
					>
						<Text style={styles.txt}>Com Foto</Text>
					</TouchableOpacity>

					<TouchableOpacity 
						onPress={() => navigate('SemFoto')}
						style={styles.btn} 
					>
						<Text style={styles.txt}>Sem Foto</Text>
					</TouchableOpacity>

				</View>
				
			</View>
		);
	}
}