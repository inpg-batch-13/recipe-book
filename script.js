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

function findRecipe(menuName) {

  for (var i = 0 ; i < recipes.length ; i++){
    if (recipes[i].name === menuName){
      return 'MENU NAME: ' + recipes[i].name + '\n' +
      'INGREDIENTS: ' +'\n' + recipes[i].ingredients.map(function(x){
      return  '- ' + x + '\n' 
      }).join('')
    }
  }
}

// test case:

console.log(findRecipe('bakso'))
// MENU NAME: bakso
// INGREDIENTS:
// - meat
// - water
// - salt
