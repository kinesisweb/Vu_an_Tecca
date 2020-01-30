exports.up = function(knex) {
	return knex.schema.createTable("prices", table => {
		table.increments("id").primary();
		table.date("start").notNullable();
		table.date("end").notNullable();
		table.decimal("amount", 6, 2);
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("prices");
};
