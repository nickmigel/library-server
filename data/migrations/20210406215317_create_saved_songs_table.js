
exports.up = function (knex) {
    return knex.schema.createTable('saved_songs', tbl => {
        tbl.increments()
        tbl.string('song_name').notNullable()
        tbl.string('artist_name').notNullable()
        tbl.string('song_length').notNullable()
        tbl.integer('user_id').notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('saved_songs')
};
