exports.up = function(knex) {
	return knex.schema.createTable("bookings", table => {
		table.increments("id").primary();
		table.date("start").notNullable();
		table.date("end").notNullable();
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("bookings");
};
