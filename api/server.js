// Imports
const express = require('express');
const recipesRouter = require('./recipes-router');

// Server
const server = express();
server.use(express.json());
server.use('/api/recipes', recipesRouter);

// Exports
module.exports = server;