<template>
	<div>
		<v-toolbar><v-toolbar-title>Admin Area</v-toolbar-title></v-toolbar>
		<v-container class="text-center">
			<v-row
				><v-col cols="12" md="6" offset-md="3">
					<v-dialog
						ref="dialog"
						v-model="dateModal"
						:return-value.sync="date"
						persistent
						width="290px"
					>
						<template v-slot:activator="{ on }">
							<v-text-field
								v-model="processedDate"
								label="New Booking Date Range"
								prepend-inner-icon="mdi-calendar-range"
								readonly
								outlined
								color="accent"
								v-on="on"
							></v-text-field>
						</template>
						<v-date-picker
							v-model="date"
							scrollable
							range
							color="accent"
							:min="new Date().toISOString()"
							:max="maxDate"
							:first-day-of-week="6"
						>
							<v-spacer></v-spacer>
							<v-btn
								text
								color="primary"
								@click="dateModal = false"
								>Cancel</v-btn
							>
							<v-btn
								text
								color="primary"
								@click="$refs.dialog.save(date)"
								>OK</v-btn
							>
						</v-date-picker>
					</v-dialog>
				</v-col>
			</v-row>

			<v-btn color="accent" @click="uploadNewBooking">
				Add new booking
			</v-btn>
		</v-container>
	</div>
</template>

<script>
import { formatDB } from "@/utils/date";
export default {
	props: {
		initialStart: {
			type: Object,
			default: false
		}
	},
	data() {
		return {
			start: this.initialStart,
			end: null,
			date: [],
			dateModal: false
		};
	},
	computed: {
		processedDate() {
			let str = "";
			const format = input =>
				new Date(input).toLocaleDateString("en-GB", {
					dateStyle: "full"
				});
			if (this.date[0]) str += format(this.date[0]);
			if (this.date[1]) str += " --> " + format(this.date[1]);
			return str;
		}
	},
	methods: {
		uploadNewBooking() {
			this.$axios({
				method: "post",
				url: "/api/bookings/add",
				data: {
					start: this.date[0],
					end: this.date[1]
				}
			}).then(result => {
				this.$store.dispatch("updateBookings", result.data);
				this.dateModal = false;
			});
		}
	}
};
</script>
