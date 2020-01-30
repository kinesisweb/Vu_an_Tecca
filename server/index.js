const express = require("express");
const { Nuxt, Builder } = require("nuxt");
const baybeach = express.Router();
const common = require("../../lib/common.js");
const cookieParser = require("cookie-parser");
baybeach.use(require("cookie-parser")(process.env.BAYBEACH_COOKIE_SECRET));

const bookings = require("./bookings");
const admin = require("./admin");

const contact = require("../../lib/email.js");

baybeach.get("/api/prices/get", admin.getPrices);
baybeach.post("/api/prices/add", admin.addPrice);
baybeach.put("/api/prices/edit", admin.editPrice);
baybeach.delete("/api/prices/:id", admin.deletePrice);

baybeach.get("/calendar/css", (req, res) => {
	res.setHeader("Content-Type", "text/css");
	res.sendFile(__dirname + "/calendar-style.css");
});

baybeach.get("/api/bookings/get", bookings.get);
baybeach.post("/api/bookings/add", admin.isAuth, bookings.add);
baybeach.delete(
	"/api/bookings/delete/:id",
	admin.isAuth,
	bookings.deleteBooking
);

baybeach.post("/api/login", admin.login);
baybeach.get("/api/logout", admin.logout);

baybeach.post("/api/contact", async (req, res) => {
	const fields = await common.parseForm(req, res);

	const auth = {
		user: process.env.BAYBEACH_EMAIL_USER,
		pass: process.env.BAYBEACH_EMAIL_PASS
	};
	const message = {
		from: fields.email,
		subject: "Message from Vu an Tecca contact form",
		html: `<table><tr><td>Name: </td><td>${fields.name}</td></tr>
      <tr><td>Email: </td><td>${fields.email}</td></tr>
      <tr><td>Phone: </td><td>${fields.phone}</td></tr>
      <tr><td>Contact preference: </td><td>${fields.contactPrefer}</td></tr>
      <tr><td>Date range: </td><td>${fields.dateRange.join(" --> ")}</td></tr>
      <tr><td>${fields.comment}</td></tr></table>`
	};

	contact({ auth, message })
		.then(result => {
			res.status(200).send("Email sent");
		})
		.catch(err => {
			console.log(err);
			res.status(500).send("Error sending message");
		});
});

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
	console.log("Starting Nuxt...");
	// Init Nuxt.js
	const nuxt = new Nuxt(config);

	// Build only in dev mode
	const builder = new Builder(nuxt);
	await builder.build();

	await nuxt.ready();

	// Give nuxt middleware to express
	baybeach.use(nuxt.render);
}
start();

module.exports = baybeach;
