<template>
	<v-lazy v-model="isActive" :options="{
			threshold: 1
		}" transition="fade">
		<v-col cols="12" md="10" offset-md="1" class="pa-0">
			<v-row v-if="$vuetify.breakpoint.smAndDown">
				<v-item-group v-model="window" class="text-center" style="width: 100%;" mandatory>
					<v-item v-for="n in slides" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
						<v-btn :input-value="active" icon @click="toggle" :class="{ 'active-item': active }">
							<v-icon>mdi-record</v-icon>
						</v-btn>
					</v-item>
				</v-item-group>
			</v-row>
			<v-row align="center">
				<v-item-group
					v-model="window"
					class="shrink mr-6"
					mandatory
					tag="v-flex"
					v-if="$vuetify.breakpoint.mdAndUp"
				>
					<v-item v-for="(slide, idx) in slides" :key="idx" v-slot:default="{ active, toggle }">
						<div>
							<v-btn :input-value="active" icon @click="toggle" :class="{ 'active-item': active }">
								<v-icon>mdi-record</v-icon>
							</v-btn>
						</div>
					</v-item>
				</v-item-group>

				<v-col>
					<v-window v-model="window" style="min-height: 550px;">
						<v-window-item v-for="(slide, idx) in slides" :key="idx">
							<v-card class="pa-md-4" flat>
								<v-card-text>
									<v-toolbar class="mb-4" align="center" color="accent" dark>
										<strong class="title">
											{{
											slide.title
											}}
										</strong>
										<v-spacer></v-spacer>
										<v-btn text @click="nextRoom">
											Next
											<v-icon>mdi-chevron-right</v-icon>
										</v-btn>
									</v-toolbar>

									<v-row>
										<v-col
											cols="12"
											md="6"
											class="tour-photo-element"
											:class="{
												'text-center':
													$vuetify.breakpoint
														.smAndDown
											}"
										>
											<div class="image-overlay">
												<img :src="slide.image" style="max-width: 100%; height: auto; max-height: 50vh" />
											</div>
										</v-col>
										<v-col cols="12" md="6" v-html="slide.caption"></v-col>
									</v-row>
								</v-card-text>
							</v-card>
						</v-window-item>
					</v-window>
				</v-col>
			</v-row>
		</v-col>
	</v-lazy>
</template>

<script>
import rearGarden from "@/assets/images/rear garden.jpg";
import lounge from "@/assets/images/lounge.jpg";
import bedroom1 from "@/assets/images/bedroom1.jpg";
import bedroom2 from "@/assets/images/bedroom2.jpg";
import kitchen from "@/assets/images/kitchen.jpg";
import bathroom from "@/assets/images/bathroom.jpg";
import parking from "@/assets/images/parking.jpg";
import children from "@/assets/images/childrenspark.jpg";

export default {
	mounted() {
		this.slides.forEach(slide => {
			const img = new Image();

			img.onload = () => {
				this.minHeight =
					img.height > this.minHeight ? img.height : this.minHeight;
				console.log(this.minHeight);
			};
			img.src = slide.image;
		});
	},
	methods: {
		nextRoom() {
			const next = this.window + 1;
			this.window = next >= this.slides.length ? 0 : next;
		}
	},
	data() {
		return {
			rearGarden,
			lounge,
			bedroom1,
			bedroom2,
			kitchen,
			children,
			isActive: false,
			window: 0,
			slides: [
				{
					image: lounge,
					title: "Lounge",
					colour: "blue",
					caption: `<p class="subtitle-1">When our chalet was re-built recently, we decided our emphasis
                would be towards spacious, luxurious living so Vu an Tecca
                accommodates 4 people very comfortably rather than 6+ in cramped
                quarters. That said, there is a travel cot for infants.
                Featuring modern décor throughout, the lounge boasts comfortable
                ivory leather sofas and the dining area enjoys contemporary
                chrome & glass dining suite with ivory leather dining chairs.</p>`
				},
				{
					image: rearGarden,
					title: "Rear Garden",
					colour: "yellow",
					caption: `<p class="subtitle-1">But if you get tired of the panoramic views to the front of the
                chalet (though we can't see that happening!) there is a unique
                enclosed private garden area to the rear of the chalet where a
                mature planted screen provides an excellent wind break and
                natural private sun trap. Deck chairs, table and parasol are
                provided for use in the garden.</p>`
				},
				{
					image: children,
					title: "Children's Park",
					caption: `<p class="subtitle-1">If the stunning walks and the beautiful beaches don't tire them out, try the activity park at the rear of the chalet.</p>
					<p class="subtitle-1">Includes slide, adventure playground, rockers and even a fun-sized boat area in the sand.</p>`
				},
				{
					image: bedroom1,
					title: "Master Bedroom",
					colour: "pink",
					caption: `<p class="subtitle-1">After an exhausting day on the beach or browsing the galleries and shops there is nothing worse than a poor nights sleep,
          so it's been our aim to provide hotel quality beds and bedding.<p>

<p class="subtitle-1">The master bedroom overlooks the rear garden area and features a King Size posturepedic bed with 2 x full size built-in wardrobes,
dressing table area and large bedside cabinets. Flat screen LCD TV with Freeview & built in DVD player.
This spacious bedroom is ideal for any guests with mobility issues as space is abundant.</p>`
				},
				{
					image: bedroom2,
					title: "Twin Bedroom",
					colour: "pink",
					caption: `<p class="subtitle-1">The twin bedroom also enjoys 2 x posturepedic single beds with storage beneath, 2 x double wardrobes, chest of drawers, bedside table,
shelves and suitcase store. Flat screen LCD TV with Freeview & remote control. Free Wifi provided.</p>`
				},
				{
					image: kitchen,
					title: "Kitchen",
					colour: "teal",
					caption: `<p class="subtitle-1">The fully equipped, modern, Ikea kitchen has full size fridge freezer, microwave, stainless steel oven and extractor unit with glass convection hob over
          (essential in our opinion for 1-2 weeks stay) - the kitchen is fully equipped to oblige the most demanding Nigella or Jamie!</p>

<p class="subtitle-1">A full sized washing machine is located the external laundry/store room.</p>`
				},
				{
					image: bathroom,
					title: "Bathroom",
					caption: `<p class="subtitle-1">The fully-tiled spacious bathroom enjoys a four-piece, full-sized suite comprising:</p>

<ul style="margin-bottom: 1em;"><li>Full sized Bath</li>
<li>WC, wash-hand basin</li>
<li>Large separate shower cubicle with electric power shower</li></ul>
<p class="subtitle-1">An additional useful feature, not found in many chalets, is a large storeroom off the bathroom for suitcases, 
bags, coats etc. In here you will find an iron and an ironing board, and all cleaning equipment such as a vacuum, brooms, cloaks store etc.</p>`
				},
				{
					image: parking,
					title: "Parking",
					caption: `<p class="subtitle-1">Ample car parking is available immediately to the front of the chalet, so you won't have to ferry cases or shopping any distance.</p>`
				}
			]
		};
	}
};
</script>

<style scoped>
.active-item {
	color: #bf360c !important;
}

@media only screen and (min-width: 960px) {
	.tour-photo-element {
		min-height: 400px;
	}
}
</style>
