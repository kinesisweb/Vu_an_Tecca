<template>
	<v-container id="puppy-pals-section">
		<v-row>
			<v-col cols="4" v-if="$vuetify.breakpoint.mdAndUp">
				<v-img :src="corgi" height="315" />
			</v-col>
			<v-col cols="12" md="8">
				<v-card flat>
					<v-img
						class="white--text align-end"
						height="200px"
						:src="corgi"
						v-if="$vuetify.breakpoint.smAndDown"
					>
						<v-card-title style="background: rgba(0,0,0,0.4); padding: 0.5em;">Pets at Vu an Tecca</v-card-title>
					</v-img>
					<v-card-title v-else>
						<v-icon>mdi-paw</v-icon>&nbsp; Pets at Vu an Tecca
					</v-card-title>
					<v-card-text>We are pleased to welcome small, well-behaved dogs for a nominal additional charge of £20 per dog, on the strict proviso that I get extra puppy cuddles.</v-card-text>
				</v-card>
				<v-card flat>
					<v-card-title>
						<v-icon>mdi-beach</v-icon>&nbsp; Pet Friendly Beaches
					</v-card-title>
					<v-card-text>
						<p>From April to May, Riviere Towans Beach is open to all pets.</p>
						<p>From May onwards Mexico Towans beach is available for puppy capers and fun times. Mexico Towans is immediatley adjacent to Riviere Towans and only a very short walk from the chalet.</p>
						<p>If you have any queries, don't hesitate to ask and I will be happy to clarify further.</p>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import corgi from "@/assets/images/corgi.jpg";

export default {
	data() {
		return {
			corgi
		};
	}
};
</script>