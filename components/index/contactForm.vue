<template>
	<v-form ref="form">
		<v-card>
			<v-card-text>
				<v-row>
					<v-col>
						<v-icon>mdi-email</v-icon>
						<span
							>You can contact us directly via this form if you'd
							prefer</span
						>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-text-field
							v-model="name"
							label="Your name"
							outlined
							prepend-inner-icon="mdi-account"
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="6">
						<v-text-field
							v-model="email"
							label="Email Address"
							outlined
							prepend-inner-icon="mdi-at"
						></v-text-field>
					</v-col>

					<v-col cols="12" sm="6">
						<v-text-field
							v-model="phone"
							label="Phone Number"
							outlined
							prepend-inner-icon="mdi-phone"
						></v-text-field>
					</v-col>

					<v-col cols="12" class="mt-n10 mb-0 py-0">
						<slide-up-down :active="!!email && !!phone">
							<v-subheader
								>I prefer to be contacted via:</v-subheader
							>
							<v-radio-group v-model="contactPrefer" row>
								<v-radio label="Email" value="email"></v-radio>
								<v-radio label="Phone" value="phone"></v-radio>
							</v-radio-group>
						</slide-up-down>
					</v-col>

					<v-col>
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
									label="Date range"
									prepend-inner-icon="mdi-calendar-range"
									readonly
									outlined
									v-on="on"
									persistent-hint
									hint="If you're enquiring about a specific range of dates, you can select them here. Click the 'from' date first, then the 'to' date."
								></v-text-field>
							</template>
							<v-date-picker
								v-model="date"
								scrollable
								range
								:min="new Date().toISOString()"
								:max="maxDate"
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
					<v-col cols="12">
						<v-textarea
							v-model="comment"
							outlined
							label="Your Message"
							auto-grow
							:rows="4"
						></v-textarea>
					</v-col>
				</v-row>
				<v-row>
					<v-col class="text-center">
						<v-btn color="accent" dark>Submit</v-btn>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-form>
</template>

<script>
export default {
	data() {
		return {
			name: null,
			email: null,
			phone: null,
			contactPrefer: null,
			date: [],
			dateModal: false,
			comment: null
		};
	},
	computed: {
		processedDate() {
			let str = "";
			const format = input =>
				new Date(input).toLocaleString("en-GB", {
					dateStyle: "full"
				});
			if (this.date[0]) str += format(this.date[0]);
			if (this.date[1]) str += " --> " + format(this.date[1]);
			return str;
		},
		maxDate() {
			let date = new Date();
			date.setFullYear(date.getFullYear() + 1);
			return date.toISOString();
		}
	}
};
</script>
