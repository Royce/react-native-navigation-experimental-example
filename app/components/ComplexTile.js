import React, {PropTypes} from 'react'
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	View,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />

const List = ({header, items, alignRight}) => {
	const alignStyle = {textAlign: alignRight ? 'right' : 'left'}
	return (
		<View style={styles.list}>
			<Text style={[styles.listHeader, alignStyle]}>{header}</Text>
			{items.map(item =>
				<View key={item} style={[{flexDirection: 'row'}]}>
					{myIcon}
					<Text style={[styles.listItems, alignStyle]}>{`Thing item`}</Text>
				</View>
			)}
		</View>
	)
}

const ComplexTile = (props) => {
	return (
		<View style={styles.tile}>
			<View style={styles.lists}>
				<List header={"Blip Blop"} items={props.thing.a} />
				<List header={"Bleeeeeep"} items={props.thing.b} />
			</View>
			<View style={styles.separator} />
			<View style={styles.lists}>
				<List header={"Chalieeeee"} items={props.thing.c} alignRight={true} />
				<List header={"Squireel"} items={props.thing.d} alignRight={true} />
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
