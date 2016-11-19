import { connect } from 'react-redux'

import LoginScreen from '../components/LoginScreen'
import { navigatePush } from '../actions'


const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('First'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen)
