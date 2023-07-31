import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const mutations = {
	turnChange(state, player) {
		state.turn = player
		console.log(`turn: ${state.turn}`)
	},
	getResult(state, res) {
		state.rollResult.push(res)
	},
	clearResult(state) {
		state.rollResult = []
	},
	pushResultPool(state, res) {
		if (state.resultPool.length > 1) state.resultPool = []
		state.resultPool.push(res)
		console.log(state.resultPool)
	},
	instantEnd(state) {
		state.resultPool = []
	},
	updatePointP1(state, bet) {
		state.playerOneStatus.points += bet
		state.playerTwoStatus.points -= bet
		console.log(`Player One 点数：${state.playerOneStatus.points}`)
		console.log(`Player Two 点数：${state.playerTwoStatus.points}`)
	},
	updatePointP2(state, bet) {
		state.playerOneStatus.points -= bet
		state.playerTwoStatus.points += bet
		console.log(`Player One 点数：${state.playerOneStatus.points}`)
		console.log(`Player Two 点数：${state.playerTwoStatus.points}`)
	},
	finalUpdateP1(state, detame) {
		state.playerOneFinal[detame]++
	},
	finalUpdateP2(state, detame) {
		state.playerTwoFinal[detame]++
	},
	gameReset(state) {
		state.turn = ''
		state.playerOneStatus = {
			points: 15000,
			bet: 100,
		}
		state.playerTwoStatus = {
			points: 15000,
			bet: 100,
		}
		state.playerOneFinal = {}
		state.playerTwoFinal = {}
	},
}

const state = {
	turn: '',
	rollResult: [],
	resultPool: [],
	playerOneStatus: {
		points: 15000,
		bet: 100,
	},
	playerTwoStatus: {
		points: 15000,
		bet: 100,
	},
	playerOneFinal: {
		'ピンゾロ！': 0,
		'ゾロ目！！': 0,
		'シゴロ！！': 0,
		'通常の目': 0,
		'ヒフミ！！': 0,
		'目なし': 0,
	},
	playerTwoFinal: {
		'ピンゾロ！': 0,
		'ゾロ目！！': 0,
		'シゴロ！！': 0,
		'通常の目': 0,
		'ヒフミ！！': 0,
		'目なし': 0,
	},
}

export default new Vuex.Store({
	state,
	mutations,
})
