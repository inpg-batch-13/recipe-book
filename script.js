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
  // your code here
  for (var i = 0; i <recipes.length; i++){

    if (menuName == recipes[i].name){
      var result =   'MENU NAME: ' + recipes[i].name + 
      '\n' + 'INGREDIENTS:' + 
      '\n' + recipes[i].ingredients.map(
        function (n) {
          return '-' + n + '\n'
        }
      ).join('')
    }
  }
  return result
}

// test case:

console.log(findRecipe('bakso'))
// MENU NAME: bakso
// INGREDIENTS:
// - meat
// - water
// - salt
