//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
function saleHotdogs(n){
    return n < 5 ? (100 * n) : (n < 10 && n >= 5 ? (95 * n) : (90 * n));
  }