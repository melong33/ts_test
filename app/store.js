/**
 * https://github.com/vuejs/vuex/blob/dev/examples/counter/store.js
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	// 엄격 모드에서는 Vuex 상태가 변이 핸들러 외부에서 변이 될 때 마다 오류가 발생합니다. 
	// 이렇게하면 디버깅 도구로 모든 상태 변이를 명시적으로 추적 할 수 있습니다.
	strict: TNS_ENV !== 'production' ? true : false,
	state: {
		counter : 0,
		polling: null
	},
	mutations: {
		increment(state, payload){
			if(payload){
				state.counter += payload;
			}
			else {
				state.counter++;
			}
		},
		incrementinit(state, payload){
			state.counter = 0;
		}
	},
	actions: {
		updateValue(context, payload) {		
			context.commit('increment', payload);
			console.log("updateValue!!");
		}
	},
	getters: {
		getCount: state => {
			return state.counter;
		}
	}
});
