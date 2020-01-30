<template>
	<div>
		<v-carousel height="auto" hide-delimiter-background>
			<v-carousel-item v-for="(comment, i) in comments" :key="i">
				<div
					class="image-overlay"
					style="min-height: 85vh; max-height: 85vh; width: auto"
				>
					<img
						:src="comment"
						style="background-size: contain; max-height: 100%; max-width: 100%;"
					/>
				</div>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script>
import comments from "@/assets/images/comments";
export default {
	data() {
		return {
			comments: comments
		};
	},
	mounted() {
		for (let comment of comments) {
			const img = new Image();
			img.src = comment;
		}
	}
};
</script>
