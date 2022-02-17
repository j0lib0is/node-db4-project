// Imports
const knex = require('knex');
const config = require('../knexfile.js');

// Export
module.exports = knex(config.development);