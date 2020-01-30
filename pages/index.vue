<template>
	<div id="page-top" class="mb-10">
		<comp-drawer v-model="drawer" />
		<comp-toolbar v-model="drawer" />
		<comp-hero>
			<comp-quotation />
		</comp-hero>

		<section id="sights">
			<v-banner single-line sticky color="deep-orange darken-4">
				<v-icon slot="icon" size="36" dark>mdi-telescope</v-icon>
				<span class="headline font-weight-bold font-italic">See the sights &nbsp;</span>
				<template v-slot:actions>
					<v-btn icon @click="pageTop">
						<v-icon>mdi-chevron-up</v-icon>
					</v-btn>
				</template>
			</v-banner>

			<v-container class="mb-12">
				<v-row>
					<v-col></v-col>
				</v-row>
				<comp-views-gallery />
			</v-container>
		</section>

		<section id="tour">
			<v-banner single-line sticky color="deep-orange darken-4">
				<v-icon slot="icon" size="36" dark>mdi-compass-outline</v-icon>
				<span class="headline font-weight-bold font-italic">Take a tour &nbsp;</span>
				<template v-slot:actions>
					<v-btn icon @click="pageTop">
						<v-icon>mdi-chevron-up</v-icon>
					</v-btn>
				</template>
			</v-banner>

			<v-container>
				<v-row>
					<comp-window-scroll />
				</v-row>
			</v-container>
		</section>

		<section id="information">
			<v-banner single-line sticky color="deep-orange darken-4">
				<v-icon slot="icon" size="36" dark>mdi-information-variant</v-icon>
				<span class="headline font-weight-bold font-italic">Booking Information &nbsp;</span>
				<template v-slot:actions>
					<v-btn icon @click="pageTop">
						<v-icon>mdi-chevron-up</v-icon>
					</v-btn>
				</template>
			</v-banner>

			<v-container>
				<v-row>
					<comp-booking-info />
				</v-row>
			</v-container>
		</section>

		<section id="puppypals">
			<v-banner single-line sticky color="deep-orange darken-4">
				<v-icon slot="icon" size="36" dark>mdi-dog</v-icon>
				<span class="headline font-weight-bold font-italic">Puppy Pals &nbsp;</span>
				<template v-slot:actions>
					<v-btn icon @click="pageTop">
						<v-icon>mdi-chevron-up</v-icon>
					</v-btn>
				</template>
			</v-banner>

			<v-container>
				<v-row>
					<comp-puppy-pals />
				</v-row>
			</v-container>
		</section>

		<section id="contact">
			<v-banner single-line sticky color="deep-orange darken-4">
				<v-icon slot="icon" size="36" dark>mdi-map-marker</v-icon>
				<span class="headline font-weight-bold font-italic">Get in Touch &nbsp;</span>
				<template v-slot:actions>
					<v-btn icon @click="pageTop">
						<v-icon>mdi-chevron-up</v-icon>
					</v-btn>
				</template>
			</v-banner>

			<v-container>
				<v-row dense>
					<v-col cols="12" md="6">
						<v-card style="height: 480px;">
							<v-img
								:src="require('@/assets/images/exterior.jpg')"
								class="white--text align-end"
								gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
							>
								<v-card-title>Contact Details</v-card-title>
							</v-img>

							<v-card-text class="pa-0 ma-0">
								<v-list dense class="pa-0 ma-0">
									<v-list-item>
										<v-icon class="mr-4">mdi-account-badge-horizontal-outline</v-icon>
										<span style="padding-left:16px">
											Contact Jaqueline for more
											information
										</span>
									</v-list-item>
									<v-list-item>
										<v-icon class="mr-4">mdi-phone</v-icon>
										<span style="padding-left:16px">07916 283 644</span>
									</v-list-item>
									<v-list-item>
										<v-icon class="mr-4">mdi-at</v-icon>
										<v-btn
											text
											href="mailto:hello@stivesbaybeachchalet.co.uk"
											style="text-transform: none;"
											target="_blank"
										>hello@stivesbaybeachchalet.co.uk</v-btn>
									</v-list-item>
								</v-list>
							</v-card-text>
						</v-card>
					</v-col>
					<v-col cols="12" md="6">
						<iframe
							src="https://www.google.com/maps/d/embed?mid=1fIZ7utUDknBfWgymj44IMWC7qNNQpXdR&hl=en"
							width="100%"
							height="480"
						></iframe>
					</v-col>
				</v-row>

				<comp-contact-form />
			</v-container>
		</section>

		<section id="availability">
			<v-banner single-line sticky color="deep-orange darken-4">
				<v-icon slot="icon" dark>mdi-calendar</v-icon>
				<span class="headline font-weight-bold font-italic">Check Availability &nbsp;</span>
				<template v-slot:actions>
					<v-btn icon @click="pageTop">
						<v-icon>mdi-chevron-up</v-icon>
					</v-btn>
				</template>
			</v-banner>

			<v-container>
				<comp-availability :role="role" />
			</v-container>
		</section>

		<section id="comments">
			<v-banner single-line sticky color="deep-orange darken-4">
				<v-icon slot="icon" dark>mdi-comment-account-outline</v-icon>
				<span class="headline font-weight-bold font-italic">Guestbook &nbsp;</span>
				<template v-slot:actions>
					<v-btn icon @click="pageTop">
						<v-icon>mdi-chevron-up</v-icon>
					</v-btn>
				</template>
			</v-banner>

			<v-container>
				<comp-guestbook />
			</v-container>
		</section>
	</div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

import CompDrawer from "@/components/index/drawer";
import CompToolbar from "@/components/index/toolbar";
import CompHero from "@/components/index/hero";
import CompQuotation from "@/components/index/quotation";
import CompViewsGallery from "@/components/index/viewsGallery";
import CompWindowScroll from "@/components/index/windowScroll";
import CompBookingInfo from "@/components/index/bookingInfo";
import CompPuppyPals from "@/components/index/puppyPals";
import CompContactForm from "@/components/index/contactForm";
import CompAvailability from "@/components/index/availability";
import CompGuestbook from "@/components/index/guestbook";

export default {
	components: {
		CompDrawer,
		CompToolbar,
		CompHero,
		CompQuotation,
		CompViewsGallery,
		CompWindowScroll,
		CompBookingInfo,
		CompPuppyPals,
		CompContactForm,
		CompAvailability,
		CompGuestbook
	},
	data() {
		return {
			minHeight: 0,
			drawer: false,
			role: ""
		};
	},
	mounted() {
		const match = window.matchMedia("(prefers-color-scheme: dark)");
		const dark = match.matches;
		//if (dark) this.$vuetify.theme.dark = true;
		this.role = this.$cookies.get("role");
	},
	methods: {
		pageTop() {
			document.querySelector("#page-top").scrollIntoView({
				behavior: "smooth"
			});
		}
	}
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1904px) {
	.container:not(.container--fluid) {
		max-width: 1300px;
	}
}

.calendar-container {
	position: relative;
	padding-bottom: 150%;
	height: 0;
	overflow: hidden;
}
.calendar-container iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.carousel-caption {
	padding: 10px 20px 10px 20px;
	position: absolute;
	top: 0;
	background: rgba(191, 54, 12, 0.5);
}

.carousel-container {
	position: relative;
}
</style>

<style>
.image-overlay {
	position: relative;
	display: inline-flex;
	align-items: flex-start;
}

.image-overlay::after {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-image: linear-gradient(
		to bottom right,
		rgba(191, 54, 12, 0.1),
		rgba(191, 54, 12, 0.2)
	);
}
</style>
