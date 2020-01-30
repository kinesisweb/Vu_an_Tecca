import { getField, updateField } from "vuex-map-fields";

const format = date => {
	let d = new Date(date);
	return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

export default {
	state: () => ({
		contactDate: [],
		bookings: [],
		prices: [],
		contact: {
			email: "hello@stivesbaybeachchalet.co.uk",
			phone: "07916 283 644"
		},
		links: [
			{ text: "See the sights", href: "#sights", icon: "telescope" },
			{ text: "Take a tour", href: "#tour", icon: "compass-outline" },
			{
				text: "Booking information",
				href: "#information",
				icon: "information-variant"
			},
			{
				text: "Puppy Pals",
				href: "#puppypals",
				icon: "dog"
			},
			{ text: "Get in Touch", href: "#contact", icon: "map-marker" },
			{ text: "Availability", href: "#availability", icon: "calendar" },
			{
				text: "Guestbook",
				href: "#comments",
				icon: "comment-account-outline"
			}
		]
	}),
	getters: {
		getField
	},
	mutations: {
		updateField,
		saveBookings(state, payload) {
			console.log("Saving bookings to store");
			for (let booking of payload) {
				let newBooking = {};
				newBooking.end = format(booking.end);
				newBooking.start = format(booking.start);
				newBooking.id = booking.id;
				newBooking.name = "Unavailable";
				state.bookings.push(newBooking);
			}
		},
		savePrices(state, payload) {
			for (let price of payload) {
				let newPrice = {
					start: format(price.start),
					end: format(price.end),
					name: `£ ${price.amount}`,
					color: "success",
					amount: price.amount,
					id: price.id
				};
				state.prices.push(newPrice);
			}
		},
		reset(state) {
			state.bookings = [];
		},
		resetPrices(state) {
			state.prices = [];
		}
	},
	actions: {
		async nuxtServerInit({ commit }, { req, res }) {
			console.log("Running NuxtServerInit()");
			let bookings, prices;

			try {
				bookings = await this.$axios({
					method: "get",
					url: "/api/bookings/get"
				});

				prices = await this.$axios({
					method: "get",
					url: "/api/prices/get"
				});

				commit("saveBookings", bookings.data);
				commit("savePrices", prices.data);
			} catch (err) {
				console.log(err);
			}
		},
		updateBookings({ commit, state, dispatch }, payload) {
			commit("reset");
			commit("saveBookings", payload);
			dispatch("updatePrices", state.prices);
		},
		updatePrices({ commit }, payload) {
			commit("resetPrices");
			commit("savePrices", payload);
		}
	}
};
