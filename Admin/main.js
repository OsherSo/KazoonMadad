const leagues = [
  {
    show: true,
    name: "Premier-League",
    url: {
      old: "https://www.football-data.co.uk/mmz4281/1920/E0.csv",
      new: "https://www.football-data.co.uk/mmz4281/2021/E0.csv",
    },
    relevantTeams: `["Liverpool", "Man City", "Man United", "Chelsea", "Leicester", "Tottenham", "Wolves", "Arsenal", "Sheffield United", "Burnley", "Southampton", "Everton", "Newcastle", "Crystal Palace", "Brighton", "West Ham", "Aston Villa"]`,
  },
  {
    show: true,
    name: "Championship",
    url: {
      old: "https://www.football-data.co.uk/mmz4281/1920/E1.csv",
      new: "https://www.football-data.co.uk/mmz4281/2021/E1.csv",
    },
    relevantTeams: `["Brentford", "Cardiff", "Swansea", "Nott'm Forest", "Millwall", "Preston", "Derby", "Blackburn", "Bristol City", "QPR", "Reading", "Stoke", "Sheffield Weds", "Middlesbrough", "Huddersfield", "Luton", "Birmingham", "Barnsley"]`,
  },
  {
    show: true,
    name: "La-Liga",
    url: {
      old: "https://www.football-data.co.uk/mmz4281/1920/SP1.csv",
      new: "https://www.football-data.co.uk/mmz4281/2021/SP1.csv",
    },
    relevantTeams: `["Real Madrid", "Barcelona", "Ath Madrid", "Sevilla", "Villarreal", "Sociedad", "Granada", "Getafe", "Valencia", "Osasuna", "Ath Bilbao", "Levante", "Valladolid", "Eibar", "Betis", "Alaves", "Celta"]`,
  },
  {
    show: true,
    name: "Seria-A",
    url: {
      old: "https://www.football-data.co.uk/mmz4281/1920/I1.csv",
      new: "https://www.football-data.co.uk/mmz4281/2021/I1.csv",
    },
    relevantTeams: `["Juventus", "Inter", "Atalanta", "Lazio", "Roma", "Milan", "Napoli", "Sassuolo", "Verona", "Fiorentina", "Parma", "Bologna", "Udinese", "Cagliari", "Sampdoria", "Torino", "Genoa"]`,
  },
  {
    show: true,
    name: "Bundesliga",
    url: {
      old: "https://www.football-data.co.uk/mmz4281/1920/D1.csv",
      new: "https://www.football-data.co.uk/mmz4281/2021/D1.csv",
    },
    relevantTeams: `["Bayern Munich", "Dortmund", "RB Leipzig", "M'gladbach", "Leverkusen", "Hoffenheim", "Wolfsburg", "Freiburg", "Ein Frankfurt", "Hertha", "Union Berlin", "Schalke 04", "Mainz", "FC Koln", "Augsburg", "Werder Bremen"]`,
  },
  {
    show: true,
    name: "Ligue-1",
    url: {
      old: "https://www.football-data.co.uk/mmz4281/1920/F1.csv",
      new: "https://www.football-data.co.uk/mmz4281/2021/F1.csv",
    },
    relevantTeams: `["Paris SG", "Marseille", "Rennes", "Lille", "Nice", "Reims", "Lyon", "Montpellier", "Monaco", "Strasbourg", "Angers", "Bordeaux", "Nantes", "Brest", "Metz", "Dijon", "St Etienne", "Nimes"]`,
  },
  {
    show: true,
    name: "Primeira-Liga",
    url: {
      old: "https://www.football-data.co.uk/mmz4281/1920/P1.csv",
      new: "https://www.football-data.co.uk/mmz4281/2021/P1.csv",
    },
    relevantTeams: '["Porto", "Benfica", "Sp Braga", "Sp Lisbon", "Rio Ave", "Famalicao", "Guimaraes", "Moreirense", "Santa Clara", "Gil Vicente", "Maritimo", "Boavista", "Pacos Ferreira", "Tondela", "Belenenses", "Portimonense"]',
  }
  // {
  //   show: true,
  //   name: "Eredivise",
  //   url: {
  //     old: "https://www.football-data.co.uk/mmz4281/1819/N1.csv",
  //     new: "https://www.football-data.co.uk/mmz4281/1920/N1.csv",
  //   },
  //   relevantTeams:
  //     '["Ajax", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar", "Vitesse", "Utrecht", "Heracles", "Groningen", "Den Haag", "Willem II", "Heerenveen", "VVV Venlo", "Zwolle", "FC Emmen", "For Sittard"]',
  // },
  // {
  //   show: true,
  //   name: "Süper-Lig",
  //   url: {
  //     old: "https://www.football-data.co.uk/mmz4281/1819/T1.csv",
  //     new: "https://www.football-data.co.uk/mmz4281/1920/T1.csv",
  //   },
  //   relevantTeams:
  //     '["Galatasaray", "Buyuksehyr", "Besiktas", "Trabzonspor", "Yeni Malatyaspor", "Fenerbahce", "Antalyaspor", "Konyaspor", "Alanyaspor", "Kayserispor", "Rizespor", "Sivasspor", "Ankaragucu", "Kasimpasa", "Goztep"]',
  // },
  // {
  //   show: true,
  //   name: "Brazil",
  //   url: {
  //     old: "https://www.football-data.co.uk/new/BRA.csv",
  //     new: "https://www.football-data.co.uk/new/BRA.csv",
  //   },
  //   relevantTeams: `["Flamengo RJ", "Santos", "Palmeiras", "Gremio", "Athletico-PR", "Sao Paulo", "Internacional", "Corinthians", "Fortaleza", "Goias", "Bahia", "Vasco", "Atletico-MG", "Fluminense", "Botafogo RJ", "Ceara"]`,
  // },
  // {
  //   show: true,
  //   name: "Switzerland",
  //   url: {
  //     old: "https://www.football-data.co.uk/new/SWZ.csv",
  //     new: "https://www.football-data.co.uk/new/SWZ.csv",
  //   },
  //   relevantTeams:
  //     '["Young Boys", "Basel", "Lugano", "Thun", "Luzern", "St. Gallen", "Zurich", "Sion", "Xamax"]',
  // }
  // {
  //   show: true,
  //   name: "Jupiler-League",
  //   url: {
  //     old: "https://www.football-data.co.uk/mmz4281/1819/B1.csv",
  //     new: "https://www.football-data.co.uk/mmz4281/1920/B1.csv",
  //   },
  //   relevantTeams:
  //     '["Genk", "Club Brugge", "Standard", "Anderlecht", "Gent", "Antwerp", "St Truiden", "Kortrijk", "Charleroi", "Mouscron", "Waregem", "Eupen", "Cercle Brugge", "Oostende", "Waasland-Beveren"]',
  // },
];

$("#updateLeague").on("click", function () {
  const key = $("#key").val();
  for (let i of leagues) {
    if (i.show === true) {
      $.get(`/admin/up/${key}/${i.name}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {});
    }
  }
});

$("#updateTeams").on("click", function () {
  const key = $("#key").val();
  for (let i of leagues) {
    if (i.show === true) {
      $.post(`/admin/upTeams/${key}`, {
        league: i.name,
        teamsArr: i.relevantTeams,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {});
    }
  }
});

$("#download").on("click", async function () {
  const key = $("#key").val();
  for (let i of leagues) {
    if (i.show === true) {
      await $.post(`/admin/down/${key}`, {
        url: i.url.old,
        fileName: i.name + "20",
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {});
      await $.post(`/admin/down/${key}`, {
        url: i.url.new,
        fileName: i.name + "21",
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {});
    }
  }
});
$("#delete_button").on("click", function () {
  const key = $("#key").val();
  for (let i of leagues) {
    if (i.show === true) {
      $.get(`/admin/del/${key}/${i.name}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function () {});
    }
  }
});
