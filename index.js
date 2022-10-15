// function int(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(int(1, 4));

// function newArray(x, y) {
//   let array = [];
//   for (let i = x; i <= y; i++) array.push(i);

//   return array;
// }

// console.log(newArray(1, 4));

// const a = 0;
// console.log(Math.log(a));

// function invert(arr) {
//   return arr.map((item) => item * -1);
// }
// console.log(invert([1, 2, 3, 4, 5]));

function arrSum(arr, val) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === val) {
        newArr.push(i, j);
        return newArr;
      }
    }
  }
}
console.log(arrSum([5, 45], 50));

function palindrome(str) {
  let string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  let length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) return false;
  }
  return true;
}

console.log(palindrome('Buttub'));
