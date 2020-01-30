const common = require("../../../lib/common.js");
const sha = require("sha.js");
const bcrypt = require("bcryptjs");
const maxCookieAge = 1000 * 60 * 60 * 24 * 365 * 10;
const knex = require("../db/knex.js");

const deletePrice = async function(req, res) {
	const id = req.params.id;

	await knex("prices")
		.where("id", id)
		.del();

	const refresh = await knex("prices").select();
	res.status(200).json(refresh);
};

const editPrice = async function(req, res) {
	const fields = await common.parseForm(req, res);

	await knex("prices")
		.where("id", fields.id)
		.update({
			start: fields.start,
			end: fields.end,
			amount: fields.amount
		});

	const refresh = await knex("prices").select();
	res.status(200).json(refresh);
};

const addPrice = async function(req, res) {
	const fields = await common.parseForm(req, res);
	await knex("prices").insert({
		start: fields.start,
		end: fields.end,
		amount: fields.amount
	});
	const refresh = await knex("prices").select();
	res.status(200).json(refresh);
};

const isAuth = function(req, res, next) {
	const username = req.signedCookies.username;
	const password = req.signedCookies.password;

	if (
		username === process.env.BAYBEACH_ADMIN_USERNAME &&
		bcrypt.compareSync(password, process.env.BAYBEACH_ADMIN_PASSWORD)
	)
		next();
	else {
		res.status(403).end();
	}
};

const logout = (req, res) => {
	res.cookie("username", "", {
		maxAge: Date.now()
	});
	res.cookie("password", "", {
		maxAge: Date.now()
	});
	res.cookie("role", "", {
		maxAge: Date.now()
	});
	res.status(200).end();
};

const login = async (req, res) => {
	const fields = await common.parseForm(req, res);
	const encPassword = sha("sha256")
		.update(fields.password)
		.digest("hex");
	if (
		fields.username === process.env.BAYBEACH_ADMIN_USERNAME &&
		bcrypt.compareSync(encPassword, process.env.BAYBEACH_ADMIN_PASSWORD)
	) {
		res.cookie("username", fields.username, {
			signed: true,
			httpOnly: true,
			maxAge: maxCookieAge
		});
		res.cookie("password", encPassword, {
			signed: true,
			httpOnly: true,
			maxAge: maxCookieAge
		});
		res.cookie("role", "admin", {
			signed: false,
			httpOnly: false,
			maxAge: maxCookieAge
		});
		res.status(200).send("Login successful");
	} else {
		res.status(403).send("Login failed");
	}
};

const getPrices = async (req, res) => {
	const data = await knex("prices").select();
	res.status(200).json(data);
};

module.exports = {
	isAuth,
	login,
	logout,
	getPrices,
	addPrice,
	editPrice,
	deletePrice
};
