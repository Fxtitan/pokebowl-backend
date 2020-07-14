// Your code here.
// Note that you do NOT need the data for this function!
const pokemon = require("./pokemon.js");
const getRow = require("./get-row.js"); 




const getUrl = (row) => {
  if (row === null) {
    return null
  } else {
    return row[1]
  }
};


//getUrl is supposed to take in a row and output the website
//loop through every single 



// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
