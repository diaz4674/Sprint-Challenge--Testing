
exports.up = function(knex) {
    return knex.schema.createTable('games', tbl => {
        tbl.increments()
  
        tbl.string('title', 255).notNullable()
        tbl.string('genre', 255).notNullable()
        tbl.string('releaseYear', 255).notNullable()
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTableIfExists('games')
  };
  