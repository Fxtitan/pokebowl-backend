// Your code here.
// Note that you do NOT need the data for this function!
const getUrl = (subRay) => {
  for (const poke of pokemon) {
    if(poke.includes(subRay)) {
      return poke
    }
  }
};



// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
