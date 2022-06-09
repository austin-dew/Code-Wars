// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
function printerError(s) {
    return `${s.split('').filter(c => c > 'm').length}/${s.length}`;
}