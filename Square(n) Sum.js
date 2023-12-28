//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){
    let squared = [];
    for(let i = 0; i < numbers.length; i++) {
      squared.push(numbers[i] * numbers[i])
    }
    
    return squared.reduce((accumulator, currentValue) => accumulator + currentValue,0);
  }