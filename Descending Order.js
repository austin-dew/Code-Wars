//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n){
    return +n.toString().split('').sort((a, b) => {
      return b - a;
    }).join('');
  }