import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const loadingS = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#0D3EFF'
	},
	iconS: {
		width: 70,
		height: 70
	},
	imgContainer: {
		flex: 5,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	logoS: {
		width: 200,
		height: 50
	},
	containerBtn:{
		flex: 2, 
		justifyContent: 'center'
	},
	container: {
		flex: 1
	}

});

module.exports = loadingS;