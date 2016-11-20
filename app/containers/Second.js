import { connect } from 'react-redux'

import SecondScreen from '../components/SecondScreen'
import { navigatePush } from '../actions'


const mapStateToProps = (state) => {
	return {
		name: state.dataState.groups[0].name,
		things: state.dataState.groups[0].things
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onBackPress: () => {
			dispatch(navigatePush('First'))
		},
		onButtonPress: () => {
			dispatch(navigatePush('Third'))
		},
		onModalButtonPress: () => {
			dispatch(navigatePush('Modal'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SecondScreen)
