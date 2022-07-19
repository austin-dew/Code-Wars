//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }