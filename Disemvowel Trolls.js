//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
    return str.split('').filter(c => c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u'&&
                                     c !== 'A' && c !== 'E' && c !== 'I' && c !== 'O' && c !== 'U' ).join('');
  }