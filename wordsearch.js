const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
  
    for (const row of letters) {   // Iterate over each row of letters
      const verticalWord = [];
  
      for (const column of row) {  // Iterate over each column of the current row
        verticalWord.push(column); // Add the character to the vertical word array
      }
  
      // Convert the vertical array to a string
      const verticalJoin = verticalWord.join('');
  
      // Checks to see if the word is present (horizontally or vertically)
      if (horizontalJoin.includes(word) || verticalJoin.includes(word)) {
        return true;
      }
    }
  
    // Word not found
    return false;
  };
  
  module.exports = wordSearch;
  