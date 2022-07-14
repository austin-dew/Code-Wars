//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b) => {
        return a - b
      })[0];
    }
  }

// alt
// return Math.min(...args)