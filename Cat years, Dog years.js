//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears = 0, dogYears = 0;
    if(humanYears >= 1) {
        catYears += 15;
        dogYears += 15
      }
    if(humanYears >= 2) {
      catYears += 9
      dogYears += 9
    }
    if(humanYears > 2) {
      for(let i = 0; i < humanYears - 2; i++) {
        catYears += 4
        dogYears += 5
      }
    }
    
    return [humanYears,catYears,dogYears];
  }
  