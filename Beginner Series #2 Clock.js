//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
    return Math.abs(new Date(0,0,0,h,m,s) - new Date(0,0,0,0,0,0));
  }