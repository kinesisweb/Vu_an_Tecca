exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("bookings")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("bookings").insert([
				{ id: 1, start: "2019-12-28", end: "2020-04-24" },
				{ id: 2, start: "2020-05-16", end: "2020-06-12" },
				{ id: 3, start: "2020-06-20", end: "2020-07-03" },
				{ id: 4, start: "2020-07-11", end: "2020-08-07" },
				{ id: 5, start: "2020-08-15", end: "2020-08-28" },
				{ id: 6, start: "2020-09-05", end: "2020-10-02" },
				{ id: 7, start: "2020-10-24", end: "2020-12-18" }
			]);
		});
};
