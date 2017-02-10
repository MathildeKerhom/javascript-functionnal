function countWords(inputWords) {
  return result = inputWords.reduce((acc, item) => {
  	if(!acc[item]) {
  		acc[item] = 1;
  	} else {
  		acc[item]++;
  	}
  	
  	return acc;
  }, {}) // l'accumulateur est un objet vide car on veut retourner un objet

}

module.exports = countWords