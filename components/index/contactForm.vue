<template>
	<v-form ref="form" @submit.prevent="sendContact" id="contact-form">
		<v-card>
			<v-card-text>
				<v-row>
					<v-col>
						<v-icon>mdi-email</v-icon>
						<span>
							If you'd prefer, you can contact us directly via
							this form
						</span>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-text-field
							v-model="name"
							label="Your name"
							outlined
							color="accent"
							:rules="[rules.required]"
							prepend-inner-icon="mdi-account"
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="6">
						<v-text-field
							v-model="email"
							label="Email Address"
							color="accent"
							:rules="[rules.required, rules.email]"
							outlined
							prepend-inner-icon="mdi-at"
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="6">
						<v-text-field
							v-model="phone"
							label="Phone Number"
							color="accent"
							outlined
							prepend-inner-icon="mdi-phone"
						></v-text-field>
					</v-col>

					<v-col cols="12" class="mt-n6 mb-0 py-0">
						<slide-up-down :active="!!email && !!phone">
							<v-subheader>I prefer to be contacted via:</v-subheader>
							<v-radio-group v-model="contactPrefer" row class="mt-0">
								<v-radio label="Email" value="email"></v-radio>
								<v-radio label="Phone" value="phone"></v-radio>
							</v-radio-group>
						</slide-up-down>
					</v-col>

					<v-col>
						<v-dialog ref="dialog" v-model="dateModal" :return-value.sync="date" persistent width="290px">
							<template v-slot:activator="{ on }">
								<v-text-field
									v-model="processedDate"
									label="Date range"
									prepend-inner-icon="mdi-calendar-range"
									readonly
									outlined
									color="accent"
									v-on="on"
									persistent-hint
									hint="If you're enquiring about a specific range of dates, you can select them here. Click the 'from' date first, then the 'to' date."
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
								<v-btn text color="primary" @click="dateModal = false">Cancel</v-btn>
								<v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
							</v-date-picker>
						</v-dialog>
					</v-col>
					<v-col cols="12">
						<v-textarea
							v-model="comment"
							outlined
							label="Your Message"
							auto-grow
							:rows="4"
							color="accent"
							:rules="[rules.required]"
						></v-textarea>
					</v-col>
				</v-row>
				<v-row>
					<v-col class="text-center">
						<v-btn type="submit" color="accent" :loading="submitting" dark>Submit</v-btn>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<slide-up-down :active="message.text">
							<v-alert dense text :type="message.type">{{ message.text }}</v-alert>
						</slide-up-down>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-form>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
	data() {
		return {
			name: "",
			email: "",
			phone: "",
			contactPrefer: "",
			dateModal: false,
			comment: "",
			submitting: false,
			rules: {
				required: v => !!v || "Required",
				email: v =>
					/^\w+@\w+\.\w+/i.test(v) || "Not a valid email address"
			},
			message: {}
		};
	},
	computed: {
		...mapFields({ date: "contactDate" }),
		processedDate() {
			let str = "";
			const format = input => input.replace(/-/g, "/");
			if (this.date[0]) str += format(this.date[0]);
			if (this.date[1]) str += " --> " + format(this.date[1]);
			return str;
		},
		maxDate() {
			let date = new Date();
			date.setFullYear(date.getFullYear() + 1);
			return date.toISOString();
		}
	},
	methods: {
		sendContact() {
			this.submitting = true;
			const data = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				contactPrefer: this.contactPrefer,
				dateRange: this.date,
				comment: this.comment
			};
			this.$axios({
				method: "post",
				url: "/api/contact",
				data
			})
				.then(res => {
					this.message.type = "success";
					this.message.text = "Thank you. Your message has been sent";
					this.$refs.form.$el.reset();
				})
				.catch(err => {
					this.message.type = "error";
					this.message.text =
						"There was an error sending your message. Try again later.";
				})
				.finally(() => {
					this.submitting = false;
					setTimeout(() => {
						this.message = {};
					}, 5000);
				});
		}
	}
};
</script>
