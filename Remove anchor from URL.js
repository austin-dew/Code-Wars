//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url){
    return url.includes('#') ? url.substring(0, url.indexOf('#')) : url;
  }