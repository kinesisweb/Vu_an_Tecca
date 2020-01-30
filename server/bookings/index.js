const knex = require("../db/knex.js");
const common = require("../../../lib/common.js");

const get = async function(req, res) {
	const data = await knex("bookings").select();
	res.status(200).json(data);
};

const deleteBooking = async function(req, res) {
	await knex("bookings")
		.where("id", req.params.id)
		.del();
	const refresh = await knex("bookings").select();
	res.status(200).json(refresh);
};

const add = async function(req, res) {
	const fields = await common.parseForm(req, res);
	await knex("bookings").insert({ start: fields.start, end: fields.end });
	const refresh = await knex("bookings").select();
	res.status(200).json(refresh);
};

module.exports = {
	get,
	deleteBooking,
	add
};
