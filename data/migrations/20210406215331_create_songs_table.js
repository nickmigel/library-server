
exports.up = function (knex) {
    return knex.schema.createTable('songs', tbl => {
        tbl.increments()
        tbl.string('song_name').notNullable()
        tbl.string('artist_name').notNullable()
        tbl.string('song_length').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('songs')
};
