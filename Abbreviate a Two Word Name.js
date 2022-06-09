// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name){
    let names = name.split(' ');
    
    return `${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}`;
  }