
exports.up = function(knex) {
    return knex.schema.createTable('bookmarks', (table)=>
    {
    table.increments();
    table.integer("user_id").notNullable();
    table.string('title').notNullable();
    table.string('artist').notNullable();
    table.string('url').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.foreign("user_id").references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('bookmarks')
};
