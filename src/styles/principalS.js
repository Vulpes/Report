import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const principalS = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: '#FFF'
	},
	containerBtn: {
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 20

	},
	containerGeral: {
		flex: 7,
		flexDirection: 'row',
		justifyContent: 'center',
		margin: 20
	},
	btn: {

		backgroundColor: '#0C73E8',
		width: 100,
		height: 50,
		padding: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	txt: {
		color: '#fff'
	}
});

module.exports = principalS;