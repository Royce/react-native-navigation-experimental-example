import { connect } from 'react-redux'

import ThirdScreen from '../components/ThirdScreen'
import { navigateReset } from '../actions'


const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigateReset([{key: 'Login'}, {key: 'First'}], 1))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ThirdScreen)
