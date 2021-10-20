// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]

module.exports = (players) => {
  var teams = [];
  players
    .filter((d) => d.isActive == true)
    .map((d) => {
      return { team: d.team, points: d.points };
    })
    .reduce((acc, curr) => {
      if (!acc[curr.team]) {
        acc[curr.team] = { team: curr.team, points: 0 };
        teams.push(acc[curr.team]);
      }
      acc[curr.team].points += curr.points;
      return acc;
    }, {});

  var sortedTeams = teams.sort((a, b) => b.points - a.points);
  return sortedTeams;
};
