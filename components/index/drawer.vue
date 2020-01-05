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
			<v-list-item link>
				<v-list-item-icon>
					<v-icon>mdi-link</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>Test link</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	props: {
		value: Boolean
	}
};
</script>
