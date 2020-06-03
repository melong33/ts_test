<template>
	<StackLayout>
		<Label class="message" :text="counter" />
		<button text="msg" @tap="onClick"></button>>
		<button text="msg2" @tap="onclick2"></button>>
		<button text="msg2" @tap="counter = counter+5"></button>>
		<label :text="message" />
	</StackLayout>
</template>

<script>
//import permissions from "nativescript-permissions";

export default {
	data() {
		return {
			counter: 1,
			message: "temp"
		};
	},
	methods: {
		onClick() {
			this.message = "message - 1 - " + this.counter++;
			/*
			permissions
				.requestPermission(
					android.Manifest.permission.INTERNET,
					"I need these permissions because I'm cool"
				)
				.then(() => {
					console.log("Woo Hoo, I have the power!");
				})
				.catch(() => {
					console.log("Uh oh, no permissions - plan B time!");
				});
				*/
		},
		onclick2: function() {
			setTimeout(() => {
				this.counter += 2;
			}, 5000);
		}
	}
};
</script>

<style scoped>
.message {
	vertical-align: center;
	text-align: center;
	font-size: 20;
	color: #333333;
}
</style>