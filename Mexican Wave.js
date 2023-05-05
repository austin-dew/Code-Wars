//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
function wave(str){
    let w = [];
    for(let i = 0; i < str.length; i++) {
      if(str.charAt(i) === ' ') continue;
      w.push(str.substring(0, i) + str.charAt(i).toUpperCase() + str.substring(i + 1));
    }
    
    return w;
  }