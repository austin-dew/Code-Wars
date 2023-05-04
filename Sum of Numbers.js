//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum(a, b)
{
   let start = Math.min(a,b);
   let end = Math.max(a,b);
   let sum = 0;
  
   for (let i = start; i <= end; i++) {
     sum += i;
   }
  
   return sum;
}