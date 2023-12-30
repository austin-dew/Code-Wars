//https://www.codewars.com/kata/55f73be6e12baaa5900000d4/solutions/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [laLigaGoals, copaDelReyGoals, championsLeagueGoals].reduce((a,b) => a + b)
  }