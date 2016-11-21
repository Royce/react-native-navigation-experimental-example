'use strict'

import React, {PropTypes} from 'react'
import {
	NavigationExperimental,
	StyleSheet,
	View,
	Text
} from 'react-native'
import { connect } from 'react-redux'

import Login from './Login'
import First from './First'
import Settings from './Settings'
import Second from './Second'
import Third from './Third'
import Modal from './Modal'
import Color from '../colors'
import { navigatePop } from '../actions'

const NavigationCardStack = require('../components/NavigationCardStack');
const {
	Card: NavigationCard,
	Header: NavigationHeader
} = NavigationExperimental


class AppContainerWithCardStack extends React.Component {
	render() {
		let { navigationState, backAction } = this.props

		return (

			// Redux is handling the reduction of our state for us. We grab the navigationState
			// we have in our Redux store and pass it directly to the <NavigationCardStack />.
			<NavigationCardStack
				navigationState={navigationState}
				onNavigateBack={backAction}
				style={styles.container}
				cardStyle={(key) => key == 'Settings' ? {width: 300} : null }
				renderOverlay={() => (
					<View style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, backgroundColor: '#33f9'}}>
						<Text>Hello</Text>
					</View>
				)}
				renderScene={this._renderScene}
			/>
		)
	}

	_renderScene(props) {
		const { route } = props.scene

		switch(route.key) {
		case 'Login':
			return <Login />
		case 'First':
			return <First />
		case 'Settings':
			return <Settings />
		case 'Second':
			return <Second />
		case 'Third':
			return <Third />
		case 'Modal':
			return <Modal />
		}
	}
}

AppContainerWithCardStack.propTypes = {
	navigationState: PropTypes.object,
	backAction: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.background,
	}
})

export default connect(
	state => ({
		navigationState: state.navigationState
	}),
	dispatch => ({
		backAction: () => {
			dispatch(navigatePop())
		}
	})
)(AppContainerWithCardStack)
