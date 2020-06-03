<template>
	<Page>
		<ActionBar title="Welcome to NativeScript-Vue!" android:flat="true" />
		<TabView
			android:tabBackgroundColor="#53ba82"
			android:tabTextColor="#c4ffdf"
			android:selectedTabTextColor="#ffffff"
			androidSelectedTabHighlightColor="#ffffff"			
		>
			<TabViewItem title="Tab 1">
				<GridLayout columns="*" rows="*">
					<MainPage/>
				</GridLayout>
			</TabViewItem>
			<TabViewItem title="Tab 2">
				<GridLayout columns="*" rows="*">
					<DigitalTwins/>
				</GridLayout>
			</TabViewItem>
			<TabViewItem title="Tab 3">
				<GridLayout columns="*" rows="*">
					<UITest/>
				</GridLayout>
			</TabViewItem>

			<TabViewItem title="Tab 4">
				<GridLayout columns="*" rows="*">
					<UITest2/>
				</GridLayout>
			</TabViewItem>

		</TabView>
	</Page>
</template>

<script >
import MainPage from "./MainPage";
import DigitalTwins from "./DigitalTwins";
import UITest from "./UITest"
import UITest2 from "./UITest2"



export default {
	components : {
		MainPage,
		DigitalTwins,
		UITest,
		UITest2
	},
	data() {
		return {
			msg: "테스트입니다."
		};
	},
	methods: {
	}
};
</script>

<style scoped>
ActionBar {
	background-color: #53ba82;
	color: #ffffff;
}

.message {
	vertical-align: center;
	text-align: center;
	font-size: 20;
	color: #333333;
}
</style>
