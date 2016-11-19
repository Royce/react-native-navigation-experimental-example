import React, {PropTypes} from 'react'
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
} from 'react-native'

import NavButton from './NavButton'
import Color from '../colors'

const LoginScreen = (props) => {
	return (
		<View style={styles.container}>
			<StatusBar
			     backgroundColor={Color.background}
			     barStyle="light-content"
			   />
 			<Text style={styles.title}>Login Screen</Text>

			<NavButton destLabel="First" buttonHandler={props.onButtonPress} />
		</View>
	)
}

LoginScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.background,
		justifyContent: 'center',
		alignItems: 'center'
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

export default LoginScreen
