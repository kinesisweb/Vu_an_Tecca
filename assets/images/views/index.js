const count = 10;
const images = [];

for (let i = 1; i <= count; i++) {
	images.push(require(`./${i}.jpg`));
}

export default images;
