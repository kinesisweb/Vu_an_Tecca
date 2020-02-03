<template>
	<v-row>
		<v-col cols="12" md="10" offset-md="1">
			<v-carousel
				:show-arrows-on-hover="$vuetify.breakpoint.mdAndUp"
				class="mx-auto"
				:hide-delimiter-background="$vuetify.breakpoint.mdAndUp"
				:hide-delimiters="$vuetify.breakpoint.smAndDown"
			>
				<v-carousel-item v-for="(view, i) in views" :key="i" :src="view"></v-carousel-item>
			</v-carousel>
		</v-col>
		<v-col cols="12" md="10" offset-md="1">
			<div class="subtitle-1 views-text">
				Boasting unrivalled panoramic coastal views of Riviere Towans –
				from the lounge window taking in Lelant Church, along to Carbis
				Bay and St Ives Harbour, then all the way up to Godrevy
				Lighthouse – it is truly breathtaking to wake up to this
				panorama each day of your stay from your very own window.
			</div>
		</v-col>
	</v-row>
</template>

<script>
import views from "@/assets/images/views";
export default {
	data() {
		return {
			views: views
		};
	},
	mounted() {
		const preload = img => {
			const imageObject = new Image();
			imageObject.src = img;
		};

		views.forEach(x => preload(x));
	}
};
</script>

<style scoped>
.views-text {
	color: rgba(0, 0, 0, 0.6);
}
</style>
