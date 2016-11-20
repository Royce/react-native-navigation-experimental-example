import { connect } from 'react-redux'

import FirstScreen from '../components/FirstScreen'
import { navigatePush } from '../actions'


const mapStateToProps = (state) => {
	return {
		groups: state.dataState.groups.map(g => {
			return {
				name: g.name,
				count: g.things[0].a.length
			};
		}),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSettingsPress: () => {
			dispatch(navigatePush('Settings'))
		},
		onButtonPress: () => {
			dispatch(navigatePush('Second'))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FirstScreen)
