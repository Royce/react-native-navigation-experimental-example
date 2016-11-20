import React, {PropTypes} from 'react'
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	ListView,
} from 'react-native'

import ComplexTile from './ComplexTile'

import Color from '../colors'
import NavButton from './NavButton'

const SecondScreen = (props) => {
	const dsConfig = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const ds = dsConfig.cloneWithRows(props.things);
	console.log(props.things);

	return (
		<View style={styles.container}>
			<StatusBar
				 backgroundColor={Color.background}
				 barStyle="light-content"
			 />

			<Text style={styles.title}>{`Group ${props.name}`}</Text>

			<NavButton destLabel="Third" buttonHandler={props.onButtonPress} />

			<View style={styles.spacer}>
				<NavButton destLabel="Modal" buttonHandler={props.onModalButtonPress} />
			</View>

			<ListView
        dataSource={ds}
        renderRow={thing =>
					<ComplexTile thing={thing} />
				}
      />
		</View>
	)
}

SecondScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired,
	onModalButtonPress: PropTypes.func.isRequired
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

export default SecondScreen
