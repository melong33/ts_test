<template>
	<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
		<Label text="Best gradient." horizontalAlignment="center" style="color: white; padding: 20" />
		<button @tap="increment" text="increment + 1" />
		<button @tap="increment2" text="increment + 2" />
		<button @tap="incrementinit" text="incrementinit" />
		<button :text="counter"/>
	</Gradient>
</template>

<script>

export default {
	data() {
		return {
			message: 1
		};
	},
	methods: {
		increment() {
			this.$store.commit('increment');
		},
		increment2() {
			this.$store.commit('increment', 2);
		},
		incrementinit() {
			this.$store.commit('incrementinit');
		}
	},
	computed: {
		counter :{
			get: function () {
				return this.$store.getters.getCount;
			},
			set: function (newValue) {
				this.$store.commit('increment', newValue);
			}
		}
	},
};
</script>

<style>
</style>