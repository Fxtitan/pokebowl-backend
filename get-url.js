// Your code here.
// Note that you do NOT need the data for this function!

const pokemon = [
  ['bulbasaur', 'https://pokeapi.co/api/v2/pokemon/1/'],
  ['ivysaur', 'https://pokeapi.co/api/v2/pokemon/2/'],
  ['venusaur', 'https://pokeapi.co/api/v2/pokemon/3/'],
  ['charmander', 'https://pokeapi.co/api/v2/pokemon/4/'],
  ['charmeleon', 'https://pokeapi.co/api/v2/pokemon/5/'],
  ['charizard', 'https://pokeapi.co/api/v2/pokemon/6/'],
  ['squirtle', 'https://pokeapi.co/api/v2/pokemon/7/'],
  ['wartortle', 'https://pokeapi.co/api/v2/pokemon/8/'],
]

const getUrl = (row) => {
  for (const item of pokemon) {
    if(item.includes(row)) {
      return item[1]
    }
  }
};
console.log(getUrl())



// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
