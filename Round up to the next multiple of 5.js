//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
function roundToNext5(n){
    return n % 5 === 0 ? n : roundToNext5(n + 1);
  }