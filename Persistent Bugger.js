//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
    let count = 0;
    let isSingle = false;
    while(!isSingle) {
      let nums = String(num).split('')
      
      if(nums.length === 1) return count;
      
      num = nums.reduce((n, i) => n * i)
      count++;
    }
    
  }