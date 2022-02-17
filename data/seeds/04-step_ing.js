exports.seed = function(knex, Promise) {
  return knex('step_ing').insert([
    { step_id: 1, ingredient_id: 2, quantity: '1 pack' },
    { step_id: 2, ingredient_id: 1, quantity: '1 pound' },
    { step_id: 3, ingredient_id: 3, quantity: '6 cups' },
    { step_id: 4, ingredient_id: 5, quantity: '4 oz' },
    { step_id: 5, ingredient_id: 4, quantity: '1 pound' },
    { step_id: 6, ingredient_id: 6, quantity: '2 tbsp' },
    { step_id: 7, ingredient_id: 8, quantity: '4 cups' },
    { step_id: 8, ingredient_id: 9, quantity: '1 can' },
    { step_id: 9, ingredient_id: 7, quantity: '4 links' }
  ]);
};
