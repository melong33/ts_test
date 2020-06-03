<template>
	<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
		<Label text="Best gradient." horizontalAlignment="center" style="color: white; padding: 20" />
		<button @tap="onClick" text="1" />
		<button @tap="onclick2" text="timer" />
		<button @tap="count = 2" text="+2" />
		<label :text="message" horizontalAlignment="center" style="color: white; padding: 20" />
	</Gradient>
</template>

<script>
import { store } from "../store";

export default {
	data() {
		return {
			message: 1
		};
	},
	computed: {
		count: {
			get: function() {
				return store.state.count;
				//return store.getters.getCount;
				//return store.getters.getCountIncrement;
			},
			set: function(newValue) {
				store.commit("increment", newValue);
			}
		}
	},
	methods: {
		onclick() {
			store.commit("increment", 1);
		},
		onclick2() {
			// store의 actions 호출
			store.dispatch("increment");
		}
	}
};
</script>

<style>
</style>