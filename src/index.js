
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resArr = [];

  if (matrix === undefined) {
    return [];
}

  for (i = 0; i < matrix.length; i++){
    if (i%2 != 0){
      matrix[i].reverse();
    }
    for (j = 0; j < matrix[i].length; j++) {
     resArr.push(matrix[i][j]);
    }
  }

  return resArr;
}