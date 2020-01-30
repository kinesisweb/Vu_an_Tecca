<template>
	<v-toolbar elevation="24" color="accent" dark>
		<v-app-bar-nav-icon v-show="$vuetify.breakpoint.smAndDown" @click="$emit('input', !value)"></v-app-bar-nav-icon>

		<v-toolbar-title>St Ives Bay Beach Chalet</v-toolbar-title>

		<v-spacer></v-spacer>
		<div v-show="$vuetify.breakpoint.mdAndUp" v-if="mode !== 'admin'">
			<v-btn
				text
				@click="processLink({text: 'See the Sights', href: '#sights'})"
				:small="$vuetify.breakpoint.mdAndDown"
			>See the Sights</v-btn>
			<v-btn
				text
				@click="processLink({text: 'Take the Tour', href: '#tour'})"
				:small="$vuetify.breakpoint.mdAndDown"
			>Take a Tour</v-btn>
			<v-btn
				text
				@click="processLink({text: 'Booking Information', href: '#information'})"
				:small="$vuetify.breakpoint.mdAndDown"
			>Information</v-btn>
			<v-btn
				text
				:small="$vuetify.breakpoint.mdAndDown"
				@click="processLink({text: 'Puppy Pals', href: '#puppypals'})"
			>Puppy Pals</v-btn>
			<v-btn
				text
				@click="processLink({text: 'Contact Us', href: '#contact'})"
				:small="$vuetify.breakpoint.mdAndDown"
			>Get in Touch</v-btn>
			<v-btn
				text
				@click="processLink({text: 'Check Availability', href: '#availability'})"
				:small="$vuetify.breakpoint.mdAndDown"
			>Availability</v-btn>
			<v-btn
				text
				@click="processLink({text: 'Guestbook', href: '#comments'})"
				:small="$vuetify.breakpoint.mdAndDown"
			>Guestbook</v-btn>
			<v-btn icon @click="theme = !theme">
				<v-icon v-if="theme === true">mdi-weather-night</v-icon>
				<v-icon v-else>mdi-weather-sunny</v-icon>
			</v-btn>
		</div>
		<div v-else>
			<v-subheader>Admin Login</v-subheader>
		</div>
	</v-toolbar>
</template>

<script>
export default {
	props: {
		value: Boolean,
		mode: {
			type: String
		}
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
	},
	methods: {
		processLink(data) {
			document.title = `Vu an Tecca – ${data.text}`;
			window.history.pushState(
				null,
				null,
				window.location.href.split("#")[0] + data.href
			);
			document.querySelector(data.href).scrollIntoView({
				behavior: "smooth"
			});
		}
	}
};
</script>
