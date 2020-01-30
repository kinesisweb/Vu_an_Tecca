<template>
	<v-app dark>
		<comp-hero>
			<comp-quotation />
		</comp-hero>
		<v-card class="text-center mt-10" flat>
			<h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
			<h1 v-else>{{ otherError }}</h1>
			<NuxtLink to="/">Return to Home</NuxtLink>
		</v-card>
	</v-app>
</template>

<script>
import CompHero from "@/components/index/hero";
import CompQuotation from "@/components/index/quotation";
export default {
	layout: "empty",
	components: {
		CompHero,
		CompQuotation
	},
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title
		};
	},
	data() {
		return {
			pageNotFound: "404 Not Found",
			otherError: "An error occurred"
		};
	}
};
</script>

<style scoped>
h1 {
	font-size: 20px;
}
</style>
