export const formatDB = function(input) {
	if (!input) input = new Date();
	else if (typeof input === "string") input = new Date(input);
	return `${input.getFullYear()}-${input.getMonth() + 1}-${input.getDate()}`;
};
