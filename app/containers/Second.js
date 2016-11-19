import { connect } from 'react-redux'

import SecondScreen from '../components/SecondScreen'
import { navigatePush } from '../actions'


const mapStateToProps = (state) => {
	return {
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
