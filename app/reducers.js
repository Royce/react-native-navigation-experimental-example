import { combineReducers } from 'redux'
import * as NavigationStateUtils from 'NavigationStateUtils'

import { NAV_PUSH, NAV_POP, NAV_JUMP_TO_KEY, NAV_JUMP_TO_INDEX, NAV_RESET } from './actions'
const initialNavState = {
	index: 1,
	routes: [
		{ key: 'Login', title: 'Login' },
		{ key: 'First', title: 'First' }
	]
}

function navigationState(state = initialNavState, action) {
	switch (action.type) {
	case NAV_PUSH:
		if (state.routes[state.index].key === (action.state && action.state.key)) return state
		return NavigationStateUtils.push(state, action.state)

	case NAV_POP:
		if (state.index === 0 || state.routes.length === 1) return state
		return NavigationStateUtils.pop(state)

	case NAV_JUMP_TO_KEY:
		return NavigationStateUtils.jumpTo(state, action.key)

	case NAV_JUMP_TO_INDEX:
		return NavigationStateUtils.jumpToIndex(state, action.index)

	case NAV_RESET:
		return {
			...state,
			index: action.index,
			routes: action.routes
		}

	default:
		return state
	}
}



function createThing() {
	var list = function () {
		var n = Math.round(Math.random()*5);
		var arr = [];
		for (var i = 0; i < n; i++) {
			arr.push(i);
		}
		return arr;
	}
	return {
		name: "Name",
		a: list(),
		b: list(),
		c: list(),
		d: list(),
		e: list()
	}
}

function createGroup(name) {
	return {
		name: name,
		things: [createThing(), createThing(), createThing(), createThing()]
	}
}

const initialDataState = {
	groups: [createGroup("Alpha"), createGroup("Beta"), createGroup("Cordial"), createGroup("Dog")],
	user: {
		name: "Charlie Chopsticks",
	}
}

function dataState(state = initialDataState, action) {
	switch (action.type) {

	default:
		return state
	}
}

const appReducers = combineReducers({
	navigationState,
	dataState
})

export default appReducers
