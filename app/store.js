import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store =  new Vuex.Store({
	// 엄격 모드에서는 Vuex 상태가 변이 핸들러 외부에서 변이 될 때 마다 오류가 발생합니다. 
	// 이렇게하면 디버깅 도구로 모든 상태 변이를 명시적으로 추적 할 수 있습니다.
	//strict: TNS_ENV !== 'production' ? true : false,

	state: {
		counter : 0
	},
	mutations: {
		increment(state, payload){
			if(payload) {
				state.counter += payload;
			} 
			else {
				state.counter++;
			}
			
		}
	},
	// 액션 내에서 비동기 작업을 수행 할 수 있습니다.
	actions: {
		increment(context, payload){
			/*
			setTimeout(() => {
				context.commit('increment', payload)
			}, 1000);
			*/
			if(payload) {
				setInterval(() => {
					context.commit('increment', payload);
				}, 1000);
			}
			else {
				setInterval(() => {
					context.commit('increment');
				}, 1000);
			}
			
		}
	},
	getters:{
		getCount: (state) => {
			return state.count;
		},

		getCountIncrement: (state, getters) => {
			return getters.getCount + 2;
		}
	},
	computed: {
		doneTodosCount () {
			return this.$store.getters.getCount;
		}
	},
});
