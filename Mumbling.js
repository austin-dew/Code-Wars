//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
    let a = s.toLowerCase().split('');
    let n = [];
    
    for(let i = 0; i < s.length; i++) {
      let t = a[i].toUpperCase();
      for(let j = 0; j < i; j++) {
        t += a[i];
      }
      n.push(t);
    }
    
      return n.join('-');
  }