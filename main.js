const words = require('./words.json');

/*
 copilot solution:
 GitHub Copilot: Sure, I can help you with that. Here's a plan in pseudocode:

1. Load a dictionary of 5 character long words.
2. Generate all possible permutations of the words in the dictionary.
3. For each permutation, check if it forms a magic square.
4. If a magic square is found, return it.

*/

function generateMagicSquare() {
    const permutations = permute(words, words.length);
    for (const permutation of permutations) {
      if (isMagicSquare(permutation)) {
        return permutation;
      }
    }
    return null;
  }
  
  function permute(arr, len) {
    if (len === 1) {
      return arr.map(x => [x]);
    }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)), len - 1);
      for (const r of rest) {
        result.push([arr[i], ...r]);
      }
    }
    return result;
  }
  
  function isMagicSquare(square) {
    const rows = [square.slice(0, 5), square.slice(5, 10), square.slice(10, 15), square.slice(15, 20), square.slice(20)];
    const cols = [[], [], [], [], []];
    const diags = [[], []];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        cols[j][i] = rows[i][j];
        if (i === j) {
          diags[0][i] = rows[i][j];
        }
        if (i + j === 4) {
          diags[1][i] = rows[i][j];
        }
      }
    }
    const sums = [...rows, ...cols, ...diags].map(row => row.join('')).map(str => str.charCodeAt(0) + str.charCodeAt(1) + str.charCodeAt(2) + str.charCodeAt(3) + str.charCodeAt(4));
    return sums.every(sum => sum === sums[0]);
  }
  
  console.log(generateMagicSquare());