import { connect } from 'react-redux'

import SettingsScreen from '../components/SettingsScreen'
import { navigatePush, navigatePop, navigateReset } from '../actions'


const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onLogoutPress: () => {
			dispatch(navigateReset([{ key: 'Login', title: 'Login' }], 0))
		},
		onBackPress: () => {
			dispatch(navigatePop())
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SettingsScreen)
