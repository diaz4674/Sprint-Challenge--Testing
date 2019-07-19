const db = require('../data/dbConfig.js');

module.exports = {
  add,
  update,
  remove,
  getAll,
  findById,
};

async function add(game) {
  const [id] = await db('games').insert(game);
  return findById(id)
}

async function update(id, changes) {
  return null;
}

async function remove(id) {
   const deletedGame = await db('games').where({id}).del();
  return findById(deletedGame)
}

function getAll() {
  return db('games');
}

function findById(id) {
  return db('games').where({id}).first()
}
