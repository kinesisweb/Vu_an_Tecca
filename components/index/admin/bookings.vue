<template>
	<v-overlay :value="active">
		<v-card>
			<v-card-title
				>Booking Admin<v-spacer />
				<v-btn icon @click="$emit('close')">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<v-list class="my-10">
					<v-list-item>
						<v-icon class="mr-10">mdi-clock-start</v-icon>
						Booking starts:
						{{ currentStart }}
					</v-list-item>
					<v-list-item>
						<v-icon class="mr-10">mdi-clock-end</v-icon>
						Booking ends:
						{{ currentEnd }}
					</v-list-item>
				</v-list>

				<v-btn block color="error" @click="deleteBooking()">
					Delete Booking
				</v-btn>
			</v-card-text>
		</v-card>
	</v-overlay>
</template>

<script>
export default {
	props: {
		active: {
			type: Boolean,
			default: false
		},
		role: {
			type: String,
			default: ""
		},
		current: {
			type: Object,
			default: () => {
				event: {
				}
			}
		}
	},
	data() {
		return {};
	},
	methods: {
		deleteBooking() {
			this.$axios({
				method: "delete",
				url: "/api/bookings/delete/" + this.currentID
			}).then(result => {
				this.$store.dispatch("updateBookings", result.data);
				this.$emit("close");
			});
		}
	},
	computed: {
		currentStart() {
			if (this.role !== "admin") return null;
			if (!this.current || !this.current.event) return null;

			return new Date(this.current.event.start).toLocaleDateString(
				"en-GB",
				{
					dateStyle: "long"
				}
			);
		},
		currentEnd() {
			if (this.role !== "admin") return null;
			if (!this.current || !this.current.event) return null;

			return new Date(this.current.event.end).toLocaleDateString(
				"en-GB",
				{
					dateStyle: "long"
				}
			);
		},
		currentID() {
			return this.current.event.id;
		}
	}
};
</script>
