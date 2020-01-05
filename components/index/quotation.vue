<template>
	<div style="width: 100%;" class="quotation-container">
		<div class="quotation deep-orange--text">
			When the original owners chose a name for this chalet, they
			certainly knew what they were doing – 'Vu An Tecca' is Cornish for
			'Prettiest View'.
		</div>
	</div>
</template>

<style>
.quotation-container {
	width: 100%;
	position: absolute;
	background-color: rgba(0, 0, 0, 0.7);
	padding: 20px;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.quotation {
	position: relative;
	quotes: "“" "”" "‘" "’";
	max-width: 90%;
	text-align: center;
}

.quotation::before,
.quotation::after {
	font-size: 5em;
	top: -0.5em;
	opacity: 0.5;
	position: absolute;
}

.quotation::before {
	content: open-quote;
	left: -0.7em;
}

.quotation::after {
	content: close-quote;
	right: -0.7em;
}
</style>
