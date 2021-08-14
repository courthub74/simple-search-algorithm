//Simple Search Practice

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tar = 5;

function findtar() {
  for (i = 0; i < arr.length; i++) {
    if (tar === arr[i]) {
      return `Target value (${tar}) found`;
    }
  }
  if (tar !== arr[i]) {
    return `Target value (${tar}) not found`;
  }
}

console.log(findtar());
