<template>
	<v-toolbar elevation="24" color="accent" dark>
		<v-toolbar-title>St Ives Bay Beach Chalet</v-toolbar-title>
	</v-toolbar>
</template>

<script>
export default {
	props: {
		value: Boolean
	},
	computed: {
		theme: {
			get() {
				return this.$vuetify.theme.isDark;
			},
			set() {
				this.$vuetify.theme.dark = !this.theme;
			}
		}
	}
};
</script>
