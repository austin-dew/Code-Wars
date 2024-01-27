//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
function twoSort(s) {
    let a =  s.sort()[0].split('').map((c,i) => c += '***');
    a[a.length - 1] = a[a.length - 1].slice(0,1);
    return a.join('');
  }