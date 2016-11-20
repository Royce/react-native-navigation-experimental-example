import React, {PropTypes} from 'react'
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	ListView,
} from 'react-native'

import NavButton from './NavButton'
import BasicTile from './BasicTile'
import Color from '../colors'

const FirstScreen = (props) => {
	const dsConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const ds = dsConfig.cloneWithRows(props.groups);

	return (
		<View style={styles.container}>
			<StatusBar
			     backgroundColor={Color.background}
			     barStyle="light-content"
			   />
 			<Text style={styles.title}>First Screen</Text>

			<NavButton destLabel="Settings" buttonHandler={props.onSettingsPress} />

			<ListView
        dataSource={ds}
        renderRow={g =>
					<BasicTile group={g} buttonHandler={props.onButtonPress}/>
				}
      />

		</View>
	)
}

FirstScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.background,
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		margin: 30
	},
	spacer: {
		marginTop: 20,
		alignSelf: 'stretch'
	}
})

export default FirstScreen
