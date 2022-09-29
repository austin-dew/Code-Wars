//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num){
    let nums = String(num).split('').map(n => +n * +n).join('');  
    
    return +nums;
  }