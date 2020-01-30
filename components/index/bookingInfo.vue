<template>
	<v-container id="booking-info-section">
		<template v-for="(item, idx) in list">
			<v-row :key="item.title">
				<v-card flat style="width: 100%">
					<v-card-title>
						<v-icon color="accent">mdi-{{ item.icon }}</v-icon>
						<span style="margin-left: 1em;">{{ item.title }}</span>
					</v-card-title>
					<v-card-text v-html="item.content"></v-card-text>
				</v-card>
			</v-row>
			<v-divider :key="item.title + '-divider'" v-if="idx < list.length - 1" />
		</template>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					icon: "gavel",
					title: "Booking and Cancellation Policies",
					content: `<ul><li>Person making booking must be over 21 years of age</li>
 <li>One third deposit is payable at the time of booking.</li>
 <li>For bookings made within 28 days of arrival, the full balance is payable at the time of booking.</li>
 <li>Payments to be made via cheque, BACS or Faster payments</li>
 <li>Cancellation within two weeks of commencement will be liable for the full amount; however, we will make every effort to re-book and refund your fees promptly.</li>
 <li>A damages deposit of £100 is requested at the time of booking to cover anything not reasonably considered general wear and tear. However, this will be refunded within 24 hours once the foregoing is determined. Please be sure to give us the bank account details into which you wish us to make your damages deposit refund.</li></ul>`
				},
				{
					icon: "hotel",
					title: "Bedding and Linen",
					content: `You're on holiday so leave the donkey work to us. As part of your package, we provide hand towels, toilet rolls and tea towels (Guests are just requested to bring their own beach/bath towels).  We provide feather pillows, sumptuous quilts, quality quilt covers, pillow cases and fitted sheets on all of the beds at no extra charge.`
				},
				{
					icon: "smoking-off",
					title: "No Smoking",
					content:
						"No smoking in or around the property is permitted."
				},
				{
					icon: "kettle-outline",
					title: "Cream Tea",
					content: `There is nothing worse than arriving after a long trip and having to dash out to the  shops just to be able to have a cup of tea. When you arrive at Vu An Tecca you will find a complimentary cream tea on arrival just to get you in the Cornish holiday spirit - Enjoy!`
				},
				{
					icon: "radiator",
					title: "Heating",
					content: `The bathroom is heated by chrome heated towel rail. Bedrooms are heated by electric convector heaters. A remote-controlled electric fire is located in the lounge.  The property is fully double glazed throughout for heat retention.`
				},
				{
					icon: "lightbulb-on-outline",
					title: "Electricity",
					content: `We provide your first week's average electricity in with the price (£7). Yes, that's correct, the first week is on us. After that, electricity is via a £1 coin meter which is located in the hallway.`
				},
				{
					icon: "television",
					title: "Entertainment",
					content: `<ul><li>LCD Freeview flat-screen TV in the lounge</li>
<li>DVD player</li>
<li>DVDs (family suitable) for your use</li>
<li>A selection of books, playing cards and family games are provided for your enjoyment.</li>
<li>Free Wi-Fi</li></ul>`
				},
				{
					icon: "clock-outline",
					title: "Arrival and Departure",
					content: `<ul><li><b>Arrival</b>: Saturday 2.30pm onwards</li>
                    <li><b>Departure</b>: Saturday by 10am</li></ul>
                    <p class="mt-4">In special circumstances, we can vary departure time, but this must be agreed in advance of your stay.</p>`
				}
			]
		};
	}
};
</script>

<style lang="scss">
#booking-info-section ul {
	list-style-type: none !important;
	padding-left: 0;

	li {
		margin: 0.5em;
	}
}
</style>