//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
function isPalindrome(x) {
    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase();
  }