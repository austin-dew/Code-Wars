//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word){
    let dupEncString = '';
    word = word.toLowerCase();
    word.split('').forEach(c => {
      if(word.split(c).length - 1 === 1) {
        dupEncString += '\('
      }
      else {
        dupEncString += '\)'
      }
    });
      
    return dupEncString;
  }
  