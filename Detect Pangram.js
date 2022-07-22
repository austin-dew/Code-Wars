// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string){
    let alpha = [];
    for(let i = 65; i < 91; i++) {
      alpha.push(String.fromCharCode(i).toLowerCase())
    }
    
    let count = 0;
    alpha.forEach(c => {
      count += string.toLowerCase().indexOf(c) !== -1 ? 1 : 0;
    })
    
    return count === 26;
  }