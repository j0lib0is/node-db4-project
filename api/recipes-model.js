const db = require('../data/db-config.js');

// Data Access
async function getRecipeById(recipe_id) {
	const result = await db('recipes')
		.join('steps', 'recipes.recipe_id', 'steps.recipe_id')
		.join('step_ing as si', 'si.step_id', 'steps.step_id')
		.where('recipes.recipe_id', recipe_id)
		.select('recipes.recipe_id', 'recipe_name', 'steps.step_id', 'step_number', 'step_instructions');

	if (result[0].length == 0) {
		return null;
	}

	const recipe = {
		recipe_id: result[0].recipe_id,
		recipe_name: result[0].recipe_name,
		steps: []
	};

	if (result[0].step_id == null) {
		return recipe;
	}

	for (let step of result) {
		recipe.steps.push({
			step_id: step.step_id,
			step_number: step.step_number,
			step_instructions: step.step_instructions,
		});
	}

	console.log(recipe);
	return recipe;

	// - Should resolve a representation of the recipe similar to the one shown in the **Data Model** above.
  // - The function will pull information from several tables using Knex and then create a response object using loops, objects, array methods etc.
  // - There are many ways to solve this, but from a performance standpoint the fewer trips to the database the better!

	// {
	// 	"recipe_id" : 1,
	// 	"recipe_name": "Spaghetti Bolognese",
	// 	"created_at": "2021-01-01 08:23:19.120",
	// 	"steps": [
	// 		{
	// 			"step_id": 11,
	// 			"step_number": 1,
	// 			"step_instructions": "Put a large saucepan on a medium heat",
	// 			"ingredients": []
	// 		},
	// 		{
	// 			"step_id": 12,
	// 			"step_number": 2,
	// 			"step_instructions": "Add 1 tbsp olive oil",
	// 			"ingredients": [
	// 				{ "ingredient_id": 27, "ingredient_name": "olive oil", "quantity": 0.014 }
	// 			]
	// 		},
	// 	]
	// }
}

// Exports
module.exports = {
	getRecipeById
};