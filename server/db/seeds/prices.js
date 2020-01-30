exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("prices")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("prices").insert([
				{
					id: 1,
					start: "2020-04-25",
					end: "2020-05-01",
					amount: 460.0
				},
				{
					id: 2,
					start: "2020-05-02",
					end: "2020-05-08",
					amount: 550.0
				},
				{ id: 3, start: "2020-05-09", end: "2020-05-15", amount: 550 },
				{ id: 4, start: "2020-06-13", end: "2020-06-19", amount: 650 },
				{ id: 5, start: "2020-07-04", end: "2020-07-10", amount: 750 },
				{ id: 6, start: "2020-08-08", end: "2020-08-14", amount: 850 },
				{ id: 7, start: "2020-08-29", end: "2020-09-04", amount: 650 },
				{ id: 8, start: "2020-10-03", end: "2020-10-09", amount: 480 },
				{ id: 9, start: "2020-10-10", end: "2020-10-16", amount: 480 },
				{ id: 10, start: "2020-10-17", end: "2020-10-23", amount: 480 },
				{ id: 11, start: "2020-12-19", end: "2020-12-25", amount: 480 },
				{ id: 12, start: "2020-12-26", end: "2021-01-01", amount: 480 }
			]);
		});
};
