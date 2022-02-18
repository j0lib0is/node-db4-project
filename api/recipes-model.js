const db = require('../data/db-config.js');

// Data Access
async function getRecipeById(recipe_id) {
	const result = await db('recipes')
		.join('steps', 'recipes.recipe_id', 'steps.recipe_id')
		.join('step_ing as si', 'si.step_id', 'steps.step_id')
		.join('ingredients', 'ingredients.ingredient_id', 'si.ingredient_id')
		.where('recipes.recipe_id', recipe_id)
		.select('recipes.recipe_id', 'recipe_name', 'steps.step_id', 'step_number', 'step_instructions', 'ingredients.ingredient_id', 'ingredient_name', 'quantity');

	if (result[0].length == 0) {
		return null;
	}

	const constructedRecipe = {
		recipe_id: result[0].recipe_id,
		recipe_name: result[0].recipe_name,
		steps: []
	};

	if (result[0].step_id == null) {
		return constructedRecipe;
	}

	for (let step of result) {
		const constructedStep = {
			step_id: step.step_id,
			step_number: step.step_number,
			step_instructions: step.step_instructions,
			ingredients: []
		}

		for (let step of result) {
			constructedStep.ingredients.push({
				ingredient_id: step.ingredient_id,
				ingredient_name: step.ingredient_name,
				quantity: step.quantity
			});
		}
		
		constructedRecipe.steps.push(constructedStep);
	}

	return constructedRecipe;
}

// Exports
module.exports = {
	getRecipeById
};