//https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
    let two = [];
    
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 0; j < numbers.length - 1; j++) {
        if(numbers[i] + numbers[j + 1] === target) {
          return [i, j + 1];
        }
      }
    }
    
    return [0, 1];
  }