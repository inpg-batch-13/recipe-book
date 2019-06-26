var recipes = [{
  name: 'satay',
  ingredients: ['chicken', 'soy sauce', 'onion']
}, {
  name: 'bakso',
  ingredients: ['meat', 'water', 'salt']
}, {
  name: 'fried rice',
  ingredients: ['rice', 'ketchup', 'oil', 'egg']
}]


// function findRecipe(menuName) {
//   // your code here
//   var result = []
//   for(var i = 0; i <= recipes.length; i++) {
//     if (recipes[i].name === menuName) {
//     return 'Menu Name :' + recipes[i].name + '\n' +
//     'INGREDIENTS :' + recipes[i].ingredients 
//     }

//   }
//   return result
// }

function findRecipe(menuName) {
  // your code here
  var recipes;
  for (var i = 0; i < recipes.length; i++) {
    if (recipes[i].name === menuName) {
      recipe = recipes[i]
    }
  }
    return `
    Menu Name : ${recipe.name}
    INGREDIENTS : 
    ${recipe.ingredients.map(function(str) { return '-' + str}
    .join('\n'))}
    ` 
    
}

// test case:

console.log(findRecipe('bakso'))
// MENU NAME: bakso
// INGREDIENTS:
// - meat
// - water
// - salt
