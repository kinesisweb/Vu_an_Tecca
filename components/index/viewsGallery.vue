<template>
	<v-row>
		<v-col cols="12" md="8" offset-md="2">
			<v-carousel
				show-arrows-on-hover
				class="mx-auto"
				:hide-delimiter-background="$vuetify.breakpoint.mdAndUp"
			>
				<v-carousel-item v-for="(view, i) in views" :key="i">
					<v-row class="fill-height" align="center" justify="center">
						<div class="image-overlay fill-height">
							<v-img :src="view" />
						</div>
					</v-row>
				</v-carousel-item>
			</v-carousel>
		</v-col>
		<v-col cols="12" md="8" offset-md="2">
			<div class="title font-weight-light" style="line-height: 1.7">
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
	}
};
</script>
