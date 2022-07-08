//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript
function bouncingBall(h,  bounce,  window) {
    if(bounce <= 0 || bounce >= 1) 
      return -1;
    else if(h <= 0 && window >= h) 
      return -1;
      
    let count = -1;
    while(h > window) {
      h *= bounce
      count += 2;
    }
    
    return count;
  }