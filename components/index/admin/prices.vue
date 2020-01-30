<template>
	<v-overlay :value="active">
		<v-card>
			<v-card-title
				><span v-if="current.id">Edit&nbsp;</span
				><span v-else>Set&nbsp;</span> Price for Week<v-spacer />
				<v-btn icon @click="$emit('close')">
					<v-icon>mdi-close</v-icon>
				</v-btn>
			</v-card-title>
			<v-card-text>
				<v-list class="my-10">
					<v-list-item v-if="current.start">
						<v-icon class="mr-10">mdi-clock-start</v-icon>
						Week starting:
						{{
							current.start.toLocaleDateString("en-GB", {
								dateStyle: "full"
							})
						}}
					</v-list-item>
					<v-list-item v-if="current.end">
						<v-icon class="mr-10">mdi-clock-end</v-icon>
						Week ending:
						{{
							current.end.toLocaleDateString("en-GB", {
								dateStyle: "full"
							})
						}}
					</v-list-item>
					<v-list-item>
						<v-text-field
							label="Price"
							v-model="amount"
							outlined
							prefix="£"
						/>
					</v-list-item>
				</v-list>

				<v-btn
					block
					color="success"
					@click="uploadNewPrice"
					v-if="!current.id"
				>
					Set Price
				</v-btn>
				<div v-else>
					<v-btn block color="info" @click="uploadEditPrice">
						Edit Price
					</v-btn>
					<v-btn
						block
						color="error"
						@click="deletePrice"
						class="mt-4"
					>
						Delete Price
					</v-btn>
				</div>
			</v-card-text></v-card
		>
	</v-overlay>
</template>

<script>
import { formatDB } from "@/utils/date";

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
			default: () => {}
		}
	},
	data() {
		return {
			amount: null,
			id: null
		};
	},
	methods: {
		uploadNewPrice() {
			this.$axios({
				method: "post",
				url: "/api/prices/add",
				data: {
					start: formatDB(this.current.start),
					end: formatDB(this.current.end),
					amount: this.amount,
					id: this.id
				}
			}).then(result => {
				this.$store.dispatch("updatePrices", result.data);
				this.$emit("close");
			});
		},
		uploadEditPrice() {
			this.$axios({
				method: "put",
				url: "/api/prices/edit",
				data: {
					start: formatDB(this.current.start),
					end: formatDB(this.current.end),
					id: this.current.id,
					amount: this.amount
				}
			}).then(result => {
				this.$store.dispatch("updatePrices", result.data);
				this.$emit("close");
			});
		},
		deletePrice() {
			this.$axios({
				method: "delete",
				url: "/api/prices/" + this.current.id
			}).then(result => {
				this.$store.dispatch("updatePrices", result.data);
				this.$emit("close");
			});
		}
	},
	watch: {
		current(v) {
			this.amount = v.amount;
		}
	}
};
</script>
