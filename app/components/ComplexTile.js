import React, {PropTypes} from 'react'
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
} from 'react-native'

const List = ({header, items, alignRight}) => {
	return (
		<View style={styles.list}>
			<Text style={styles.listHeader}>{header}</Text>
			{items.map(item =>
				<Text key={item} style={[styles.listItems, {textAlign: 'right'}]}>{`Thing item`}</Text>)}
		</View>
	)
}

const ComplexTile = (props) => {
	return (
		<View style={styles.tile}>
			<View style={styles.lists}>
				<List header={"Blip Blop"} items={props.thing.a} alignRight={true} />
				<List header={"Bleeeeeep"} items={props.thing.b} />
			</View>
			<View style={styles.separator} />
			<View style={styles.lists}>
				<List header={"Chalieeeee"} items={props.thing.c} />
				<List header={"Squireel"} items={props.thing.d} />
				<List header={"Sloopsd d"} items={props.thing.e} alignRight={true} />
			</View>
		</View>
	)
}

ComplexTile.propTypes = {
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
		flexDirection: 'row',
	},
	lists: {
		borderColor: 'red',
		borderWidth: 1,
		flex: 1,
	},
	list: {
		borderColor: 'red',
		borderWidth: 1,
		margin: 3,
	},
	separator: {
		width: 2,
	},
	listHeader: {
		fontSize: 12,
		color: '#F4F4E9',
	},
	listItems: {
		fontSize: 10,
		color: '#F4F4E9',
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

export default ComplexTile
