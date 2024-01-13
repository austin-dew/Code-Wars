//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
const quarterOf = (month) => {
    // Your code here
    let a = month / 12;
    return a <= .25 ? 1 : (a <= .5 ? 2 : (a <= .75 ? 3 : 4))
  }