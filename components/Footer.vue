<template>
	<v-footer color="accent" dark>
		<v-container>
			<v-row>
				<v-col cols="6" md="4" lg="auto" class="mx-auto" v-for="(link, idx) in links" :key="idx">
					<v-btn text x-small :href="link.href">
						{{
						link.text
						}}
					</v-btn>
				</v-col>

				<v-col cols="12">
					<v-divider />
				</v-col>

				<v-col cols="12" md="6">
					<v-card color="transparent" flat class="text-center">
						<v-card-title class="justify-center">Any questions? Please get in touch</v-card-title>
						<v-card-text>You can call Jacqui on {{ contact.phone }}</v-card-text>
						<v-card-actions class="justify-center">
							<v-btn
								:small="$vuetify.breakpoint.smAndDown"
								color="secondary"
								href="#contact-form"
							>Contact Form</v-btn>
							<v-btn
								:small="$vuetify.breakpoint.smAndDown"
								:href="'mailto:' + contact.email"
								class="text-lowercase"
								color="secondary"
							>{{ contact.email }}</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>

				<v-col cols="12" md="6">
					<v-card color="transparent" flat class="text-center">
						<v-card-title class="justify-center">On the Internet</v-card-title>
						<v-card-text>Find us on the following sites</v-card-text>
						<v-card-actions class="justify-center">
							<v-btn tile color="secondary" href="https://www.airbnb.co.uk/rooms/25393321" target="_blank">
								<airbnb-icon />
							</v-btn>
							<v-btn
								tile
								color="secondary"
								href="https://www.tripadvisor.co.uk/VacationRentalReview-g528841-d12389244-Beachside_luxury_Chalet_with_spectacular_panoramic_Coastal_Views_Free_parking-Hayle_C.html"
								target="_blank"
							>
								<tripadvisor-icon />
							</v-btn>
							<v-btn
								tile
								color="secondary"
								href="https://www.facebook.com/Beautiful-Beach-Chalet-in-Cornwall-2656883487720485/?ref=search&__tn__=%2Cd%2CP-R&eid=ARC0_oguu-jlAjANyHc2RYTdYTidxxepbzay2Od3zjP90G15nX57EBvRzMtxgKsrJQxGWHOK0A3Ni0U_"
								target="_blank"
							>
								<v-icon>mdi-facebook-box</v-icon>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>

				<v-col cols="12">
					<v-subheader class="justify-center">
						Site Design &copy; 2020 Kinesis Web Design
						<br v-if="$vuetify.breakpoint.smAndDown" />
						<span v-else>&nbsp;–&nbsp;</span>
						Content &copy;
						2020 Vu an Tecca
					</v-subheader>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import airbnbIcon from "@/assets/icons/airbnb.vue";
import tripadvisorIcon from "@/assets/icons/tripadvisor.vue";

export default {
	computed: {
		...mapFields(["contact", "links"])
	},
	components: {
		airbnbIcon,
		tripadvisorIcon
	}
};
</script>
