
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix !== 'undefined') {
    return matrix.map((item, i) => item.sort((a, b) => !(i & 1) ? b - a : a - b).reverse()).flat();
  } else {
    return [];
  };
}

console.log(module.exports([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ]))
