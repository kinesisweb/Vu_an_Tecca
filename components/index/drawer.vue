<template>
	<v-navigation-drawer
		:value="value"
		@input="$emit('input')"
		app
		temporary
		dark
	>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title>Vu an Tecca Quick Menu</v-list-item-title>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list dense>
			<v-list-item
				link
				v-for="(link, idx) in links"
				:key="idx"
				:href="link.href"
			>
				<v-list-item-icon>
					<v-icon>mdi-{{ link.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ link.text }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
	props: {
		value: Boolean
	},
	computed: {
		...mapFields(["links"])
	}
};
</script>
