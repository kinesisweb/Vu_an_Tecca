<template>
	<div>
		<v-container>
			<v-subheader>
				Want to know when the chalet is available? Check the dates live
				below.
			</v-subheader>
			<v-subheader>
				Check-in is at 2:30pm on Saturdays, check-out by 10am the
				following Saturday.
			</v-subheader>
		</v-container>
		<v-card>
			<v-toolbar flat class="mb-4">
				<v-toolbar-title>{{ title }}</v-toolbar-title>
				<v-spacer />
				<v-btn icon>
					<v-icon @click="$refs.calendar.prev()">mdi-chevron-left</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon @click="$refs.calendar.next()">mdi-chevron-right</v-icon>
				</v-btn>
			</v-toolbar>
			<v-calendar
				style="min-height: 400px;"
				v-model="start"
				color="primary"
				ref="calendar"
				@click:event="editEvent"
				@click:date="openPriceOverlay"
				:events="filteredEvents"
				:end="calendarSpan"
				:event-color="getEventColor"
				:weekdays="[6, 0, 1, 2, 3, 4, 5]"
			></v-calendar>
			<v-card v-if="role === 'admin'" class="my-4">
				<comp-admin-add-booking :initialStart="start" />

				<comp-admin-bookings
					ref="admin_bookings"
					:active="overlays.booking"
					:role="role"
					:current="currentBooking"
					@close="overlays.booking = false"
				/>

				<comp-admin-prices
					ref="admin_prices"
					:role="role"
					:current="currentPrice"
					:active="overlays.price"
					@close="overlays.price = false"
				/>
			</v-card>
		</v-card>
	</div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { formatDB } from "@/utils/date";
import CompAdminPrices from "./admin/prices";
import CompAdminBookings from "./admin/bookings";
import CompAdminAddBooking from "./admin/addBooking";

export default {
	components: {
		CompAdminPrices,
		CompAdminBookings,
		CompAdminAddBooking
	},
	props: {
		role: String
	},
	data() {
		return {
			start: formatDB(),
			currentBooking: {},
			currentPrice: {},
			overlays: {
				price: false,
				booking: false
			}
		};
	},
	methods: {
		getEventColor(event) {
			return event.color ? event.color : "accent";
		},
		openPriceOverlay(event) {
			let start = new Date(event.date);
			if (event.weekday !== 6) {
				start.setDate(start.getDate() - (event.weekday + 1));
			}
			let end = new Date(event.date);
			end.setDate(end.getDate() + 6);
			this.currentPrice = {
				start,
				end
			};
			this.overlays.price = true;
		},
		editEvent(ev) {
			if (this.role !== "admin") return this.bookingEmail(ev);
			if (ev.event.name !== "Unavailable") this.editPrice(ev);
			else this.editBooking(ev);
		},
		bookingEmail(ev) {
			const { start, end } = ev.event;
			this.contactDate = [this.formatDate(start), this.formatDate(end)];
			document.querySelector("#contact-form").scrollIntoView({
				behavior: "smooth"
			});
		},
		editBooking(ev) {
			this.currentBooking = ev;
			this.overlays.booking = true;
		},
		editPrice(ev) {
			this.currentPrice = {
				start: new Date(ev.event.start),
				end: new Date(ev.event.end),
				amount: ev.event.amount,
				id: ev.event.id
			};
			this.overlays.price = true;
		},
		formatDate(input) {
			const zero = d => (d < 10 ? "0" + d : d);
			const [year, month, date] = input.split("-");
			return `${zero(date)}-${zero(month)}-${year}`;
		}
	},
	computed: {
		...mapFields(["bookings", "prices", "contactDate"]),
		calendarSpan() {
			let d = new Date();
			d.setFullYear(d.getFullYear() + 1);
			return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
		},
		title() {
			const [year, month] = this.start.split("-");
			const months = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			];
			return `${months[parseInt(month, 10) - 1]} ${year}`;
		},
		filteredEvents() {
			const events = [...this.bookings];
			for (let price of this.prices) {
				let skip = false;
				let priceStart = new Date(price.start).getTime();
				let priceEnd = new Date(price.end).getTime();
				for (let booking of this.bookings) {
					let bookingStart = new Date(booking.start).getTime();
					let bookingEnd = new Date(booking.end).getTime();
					if (priceStart >= bookingStart && priceEnd <= bookingEnd)
						skip = true;
				}
				if (skip === false) events.push(price);
			}

			return events;
		}
	},
	watch: {
		start(v) {
			if (new Date(v) < Date.now()) this.start = formatDB();
		}
	}
};
</script>
