
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          title: 'Pacman', 
          genre: 'Arcade', 
          releaseYear: 1980 
        },
        {
          title: 'Mario', 
          genre: 'Arcade',
          releaseYear: 1980 
        },
        {
          title: 'Doom', 
          genre: 'Shooter', 
          releaseYear: 1980 
        }
      ]);
    });
};
