import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Color from '../colors'
import NavButton from './NavButton'

const SettingsScreen = (props) => {
	return (
		<View style={styles.container}>
				<Text style={styles.title}>{props.name}</Text>

				<NavButton destLabel="First" buttonHandler={props.onBackPress} />

				<View style={styles.spacer}>
					<NavButton destLabel="Logout" buttonHandler={props.onLogoutPress} />
				</View>
		</View>
	)
}

SettingsScreen.propTypes = {
	onBackPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.background,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	},
	spacer: {
		marginTop: 20,
		alignSelf: 'stretch'
	}
})

export default SettingsScreen
