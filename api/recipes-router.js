// Imports
const express = require('express');
const recipes = require('./recipes-model');
const router = express.Router();

// Endpoints
router.get('/:id', (req, res, next) => {
	recipes.getRecipeById(req.params.id)
		.then(recipe => {
			res.json(recipe);
		})
		.catch(next);
});

// Exports
module.exports = router;