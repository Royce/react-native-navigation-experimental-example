import React, {PropTypes} from 'react'
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
} from 'react-native'

const BasicTile = (props) => {
	return (
		<View style={styles.tile}>
			<TouchableOpacity onPress={props.buttonHandler}>
				<Text style={styles.bigText}>{`Group ${props.group.name}`}</Text>
				<View style={styles.details}>
					<Text style={styles.detailText}>Blip bliop</Text>
					<Text style={styles.detailText}>Blip bliop</Text>
					<Text style={[styles.detailText, {color:'green'}]}>{`${props.group.count} IN`}</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

BasicTile.propTypes = {
	buttonHandler: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	tile: {
		margin: 10,
		padding: 15,
		borderLeftWidth: 4,
		alignSelf: 'stretch',
		borderColor: 'green',
		backgroundColor: '#0002',
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	bigText: {
		padding: 40,
		fontSize: 24,
		color: '#F4F4E9',
		textAlign: 'center',
	},
	details: {
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	detailText: {
		color: '#F4F4E9',
		fontSize: 9,
		textAlign: 'right',
	},
})

export default BasicTile
