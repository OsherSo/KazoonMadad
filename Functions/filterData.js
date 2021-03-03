let homeGames = {};
let awayGames = {};

class HomeStats {
  constructor(name) {
    this.name = name;
    this.place = "Home";
    this.goalsAgainst = 0;
    this.goalsFor = 0;
    this.rivalteams = [];
  }
}

class AwayStats {
  constructor(name) {
    this.name = name;
    this.place = "Away";
    this.goalsAgainst = 0;
    this.goalsFor = 0;
    this.rivalteams = [];
  }
}

function initialize(playingTeams) {
  for (let team of playingTeams) {
    homeGames[team] = new HomeStats(team);
    awayGames[team] = new AwayStats(team);
  }
}

function starilaizeData(data, playingTeams, league) {
  if (league === "Brazil" || league === "Switzerland") {
    for (let game of data) {
      if (
        playingTeams.some((x) => x == game.Away) &&
        playingTeams.some((x) => x == game.Home)
      ) {
        if (!homeGames[game.Home].rivalteams.some((x) => x == game.Away)) {
          homeGames[game.Home].goalsFor += parseInt(game.HG);
          awayGames[game.Away].goalsFor += parseInt(game.AG);
          homeGames[game.Home].goalsAgainst += parseInt(game.AG);
          awayGames[game.Away].goalsAgainst += parseInt(game.HG);
          homeGames[game.Home].rivalteams.push(game.Away);
          awayGames[game.Away].rivalteams.push(game.Home);
        }
      }
    }
  } else {
    for (let game of data) {
      if (
        playingTeams.some((x) => x == game.AwayTeam) &&
        playingTeams.some((x) => x == game.HomeTeam)
      ) {
        if (
          !homeGames[game.HomeTeam].rivalteams.some((x) => x == game.AwayTeam)
        ) {
          homeGames[game.HomeTeam].goalsFor += parseInt(game.FTHG);
          awayGames[game.AwayTeam].goalsFor += parseInt(game.FTAG);
          homeGames[game.HomeTeam].goalsAgainst += parseInt(game.FTAG);
          awayGames[game.AwayTeam].goalsAgainst += parseInt(game.FTHG);
          homeGames[game.HomeTeam].rivalteams.push(game.AwayTeam);
          awayGames[game.AwayTeam].rivalteams.push(game.HomeTeam);
        }
      }
    }
  }
}

function avg(playingTeams) {
  let avgHomeFor = 0;
  let avgHomeAgainst = 0;

  for (let team in homeGames) {
    homeGames[team].avgFor =
      homeGames[team].goalsFor / homeGames[team].rivalteams.length;
    homeGames[team].avgAgainst =
      homeGames[team].goalsAgainst / homeGames[team].rivalteams.length;
    avgHomeFor += homeGames[team].avgFor;
    avgHomeAgainst += homeGames[team].avgAgainst;
  }
  for (let team in awayGames) {
    awayGames[team].avgFor =
      awayGames[team].goalsFor / awayGames[team].rivalteams.length;
    awayGames[team].avgAgainst =
      awayGames[team].goalsAgainst / awayGames[team].rivalteams.length;
  }
  return {
    avgHome: {
      avgHomeFor: avgHomeFor / playingTeams.length,
      avgHomeAgainst: avgHomeAgainst / playingTeams.length,
    },
  };
}

function filterData(data, playingTeams, league) {
  homeGames = {};
  awayGames = {};
  initialize(playingTeams);
  starilaizeData(data, playingTeams, league);
  return { homeGames, awayGames, avg: avg(playingTeams) };
}

module.exports = filterData;
