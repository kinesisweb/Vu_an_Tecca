<template>
	<div id="page-top">
		<comp-toolbar />
		<comp-hero>
			<comp-quotation />
		</comp-hero>
		<v-container fluid>
			<v-row>
				<v-col style="justify-content: center; display: flex;">
					<v-card class="pt-4" flat>
						<v-card-title style="justify-content: center">
							Website under construction
						</v-card-title>
						<v-card-text>
							In the meantime, you can contact Jaqueline via email
							or phone:
							<v-list
								><v-list-item
									><v-icon class="mr-4">mdi-phone</v-icon>
									07916 283 644</v-list-item
								>
								<v-list-item>
									<v-icon>mdi-email</v-icon>
									<v-btn
										text
										href="mailto:consulting@teraphim.plus.com"
									>
										consulting@teraphim.plus.com
									</v-btn>
								</v-list-item>
								<v-list-item>
									<v-icon class="mr-4">mdi-web</v-icon> Or
									visit
									<v-btn
										text
										href="https://www.chycor.co.uk/rivieretowans-vuantecca/"
									>
										https://www.chycor.co.uk/rivieretowans-vuantecca/
									</v-btn>
								</v-list-item>
							</v-list>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import CompToolbar from "@/components/index/toolbar";
import CompHero from "@/components/index/hero";

export default {
	components: {
		CompToolbar,
		CompHero
	},
	data() {
		return {
			minHeight: 0
		};
	}
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1904px) {
	.container:not(.container--fluid) {
		max-width: 1300px;
	}
}

.calendar-container {
	position: relative;
	padding-bottom: 150%;
	height: 0;
	overflow: hidden;
}
.calendar-container iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.carousel-caption {
	padding: 10px 20px 10px 20px;
	position: absolute;
	top: 0;
	background: rgba(191, 54, 12, 0.5);
}

.carousel-container {
	position: relative;
}
</style>

<style>
.image-overlay {
	position: relative;
	display: inline-flex;
	width: 100%;
}

.image-overlay::after {
	content: "";
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-image: linear-gradient(
		to bottom right,
		rgba(191, 54, 12, 0.1),
		rgba(191, 54, 12, 0.2)
	);
}
</style>
