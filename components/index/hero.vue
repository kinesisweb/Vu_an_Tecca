<template>
	<div class="hero-image" :style="'background-image: url(' + hero + ')'">
		<div
			class="hero-caption font-weight-medium"
			:class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-1']"
		>Vu an Tecca</div>
		<slot></slot>
	</div>
</template>

<script>
import hero from "@/assets/images/hero.jpg";

export default {
	data() {
		return {
			hero: hero
		};
	}
};
</script>

<style lang="scss">
.hero-image {
	width: 100%;
	height: 85vh;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 100%;

	.hero-caption {
		color: #eee;
		padding: 10px 50px;
		background: rgba(0, 0, 0, 0.3);
	}
}
</style>
