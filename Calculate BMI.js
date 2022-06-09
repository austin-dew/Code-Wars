//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
function bmi(weight, height) {
  
    let beemeye = weight / (height * height);
    console.log(beemeye);
    
    if(beemeye <= 18.5){
      return "Underweight"
    }
    else if(beemeye <= 25.0){
      return "Normal"
    }
    else if(beemeye <=30.0) {
      return "Overweight"
    }
    else {
      return "Obese"
    }
    
    return "";
  }