//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
String.prototype.toJadenCase = function () {
    let w = this.split(' ');
    for(let i = 0; i < w.length; i++) {
      w[i] = w[i][0].toUpperCase() + w[i].substring(1) 
    }
    return w.join(' ')
  };