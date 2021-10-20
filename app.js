var runTest = require("./calculateTeamPoints.js");
const players = [
    {
        "team": "red",
        "name": "john",
        "points": 10,
        "isActive": false
    },
    {
        "team": "red",
        "name": "mike",
        "points": 20,
        "isActive": true
    },
    {
        "team": "blue",
        "name": "mike",
        "points": 10,
        "isActive": true
    },
    {
        "team": "green",
        "name": "carl",
        "points": 15,
        "isActive": true
    },
    {
        "team": "green",
        "name": "jose",
        "points": 25,
        "isActive": true
    },
    {
        "team": "red",
        "name": "sue",
        "isActive": false,
        "points": 35
    }
  ]
  
console.log(runTest(players));