let array = [0, 1, 1, 1, 1, 0, 1, 0, 0];

function sortArray(arr) {
  zeros = 0;
  ones = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) zeros++;
    if (arr[i] == 1) ones++;
  }
  let array = [];
  for (let i = 0; i < zeros; i++) {
    array.push(0);
  }
  for (let i = 0; i < ones; i++) {
    array.push(1);
  }
  return array;
}

console.log(sortArray(array));