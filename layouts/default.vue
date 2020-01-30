<template>
	<v-app>
		<v-content>
			<nuxt />
			<comp-footer />
		</v-content>
	</v-app>
</template>

<script>
import CompFooter from "@/components/Footer";
export default {
	components: {
		CompFooter
	},
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: "mdi-apps",
					title: "Welcome",
					to: "/"
				},
				{
					icon: "mdi-chart-bubble",
					title: "Inspire",
					to: "/inspire"
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: "Vuetify.js"
		};
	}
};
</script>

<style>
html,
html a {
	-webkit-font-smoothing: antialiased;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
	text-rendering: optimizeLegibility !important;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
		"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
		"Helvetica Neue", sans-serif;
}

@media only screen and (min-width: 960px) {
	html,
	body {
		font-size: 16px;
	}
}

html,
body {
	font-size: 14px;
}
</style>
