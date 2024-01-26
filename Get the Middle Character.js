//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s)
{
  let slen = s.length;
  return slen % 2 === 0 ? s.substring((slen / 2) - 1, (slen / 2) + 1) : s.substring((slen / 2 ), (slen / 2) + 1);
}