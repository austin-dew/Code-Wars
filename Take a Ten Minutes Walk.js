//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
    let start = {x: 0, y: 0};
    
    for(let i = 0; i < walk.length; i++) {
      switch(walk[i]) {
          case 'n':
            start.y += 1;
          break;
          case 's':
            start.y -= 1;
          break;
          case 'e':
            start.x += 1;
          break;
          case 'w':
            start.x -= 1;
          break;
          default:
      }
    }
    return JSON.stringify(start) === JSON.stringify({x: 0, y: 0}) && walk.length === 10;
  }