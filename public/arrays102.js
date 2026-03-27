// * README */
// an isolated experiment to practice searching for items elements in arrays AWAY from a frontend so that the logic conceptually is clear when applying it in the frontend.


// Basically, we want a long list of players who have some things in common - they've played at clubs previously, they may be from the same country, and they might have similar disciplinary records.

// note: array data generated with Gemini.

const championsLeaguePlayers = [
  {
    id: 1,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    position: "Forward",
    country: "France",
    minutesPlayed: 901,
    cards: { yellow: 2, red: 0 },
    previousClubs: ["Paris Saint-Germain", "Monaco"],
    previousLeaguesPlayedIn: ["Ligue 1"],
  },
  {
    id: 2,
    name: "Aurélien Tchouaméni",
    club: "Real Madrid",
    position: "Midfielder",
    country: "France",
    minutesPlayed: 745,
    cards: { yellow: 3, red: 0 },
    previousClubs: ["Monaco", "Bordeaux"],
    previousLeaguesPlayedIn: ["Ligue 1"], // Played with Mbappé at Monaco
  },
  {
    id: 3,
    name: "Erling Haaland",
    club: "Manchester City",
    position: "Forward",
    country: "Norway",
    minutesPlayed: 699,
    cards: { yellow: 0, red: 0 },
    previousClubs: ["Borussia Dortmund", "RB Salzburg", "Molde"],
    previousLeaguesPlayedIn: ["Bundesliga", "Austrian Bundesliga", "Eliteserien"],
  },
  {
    id: 4,
    name: "Bernardo Silva",
    club: "Manchester City",
    position: "Midfielder",
    country: "Portugal",
    minutesPlayed: 851,
    cards: { yellow: 1, red: 1 },
    previousClubs: ["Monaco", "Benfica"],
    previousLeaguesPlayedIn: ["Ligue 1", "Primeira Liga"], // Played with Mbappé at Monaco
  },
  {
    id: 5,
    name: "Rodri",
    club: "Manchester City",
    position: "Midfielder",
    country: "Spain",
    minutesPlayed: 810,
    cards: { yellow: 2, red: 0 },
    previousClubs: ["Atlético Madrid", "Villarreal"],
    previousLeaguesPlayedIn: ["La Liga"],
  },
  {
    id: 6,
    name: "Lamine Yamal",
    club: "Barcelona",
    position: "Forward",
    country: "Spain",
    minutesPlayed: 681,
    cards: { yellow: 4, red: 0 },
    previousClubs: [],
    previousLeaguesPlayedIn: ["La Liga"], // Same nationality as Rodri/Paredes
  },
  {
    id: 7,
    name: "Aitor Paredes",
    club: "Athletic Club",
    position: "Defender",
    country: "Spain",
    minutesPlayed: 565,
    cards: { yellow: 4, red: 1 },
    previousClubs: ["Mirandés", "Basconia"],
    previousLeaguesPlayedIn: ["La Liga", "Segunda División"],
  },
  {
    id: 8,
    name: "Harry Kane",
    club: "Bayern Munich",
    position: "Forward",
    country: "England",
    minutesPlayed: 830,
    cards: { yellow: 1, red: 0 },
    previousClubs: ["Tottenham Hotspur", "Leicester City", "Millwall"],
    previousLeaguesPlayedIn: ["Premier League", "Championship"],
  },
  {
    id: 9,
    name: "Eric Dier",
    club: "Bayern Munich",
    position: "Defender",
    country: "England",
    minutesPlayed: 540,
    cards: { yellow: 2, red: 0 },
    previousClubs: ["Tottenham Hotspur", "Sporting CP"],
    previousLeaguesPlayedIn: ["Premier League", "Primeira Liga"], // Played with Kane at Spurs
  },
  {
    id: 10,
    name: "Michael Olise",
    club: "Bayern Munich",
    position: "Forward",
    country: "France",
    minutesPlayed: 712,
    cards: { yellow: 1, red: 0 },
    previousClubs: ["Crystal Palace", "Reading"],
    previousLeaguesPlayedIn: ["Premier League", "Championship"], // Same nationality as Mbappé
  },
  {
    id: 11,
    name: "Vitinha",
    club: "Paris Saint-Germain",
    position: "Midfielder",
    country: "Portugal",
    minutesPlayed: 1079,
    cards: { yellow: 6, red: 1 },
    previousClubs: ["Porto", "Wolves"],
    previousLeaguesPlayedIn: ["Primeira Liga", "Premier League"], // Same nationality as Bernardo Silva
  },
  {
    id: 12,
    name: "Achraf Hakimi",
    club: "Paris Saint-Germain",
    position: "Defender",
    country: "Morocco",
    minutesPlayed: 920,
    cards: { yellow: 3, red: 0 },
    previousClubs: ["Inter Milan", "Borussia Dortmund", "Real Madrid"],
    previousLeaguesPlayedIn: ["Serie A", "Bundesliga", "La Liga"],
  },
  {
    id: 13,
    name: "Mateo Kovačić",
    club: "Manchester City",
    position: "Midfielder",
    country: "Croatia",
    minutesPlayed: 620,
    cards: { yellow: 2, red: 0 },
    previousClubs: ["Chelsea", "Real Madrid", "Inter Milan"],
    previousLeaguesPlayedIn: ["Premier League", "La Liga", "Serie A"], // Played with Hakimi at Real Madrid/Inter
  },
  {
    id: 14,
    name: "İlkay Gündoğan",
    club: "Manchester City",
    position: "Midfielder",
    country: "Germany",
    minutesPlayed: 580,
    cards: { yellow: 1, red: 0 },
    previousClubs: ["Barcelona", "Borussia Dortmund", "Nürnberg"],
    previousLeaguesPlayedIn: ["La Liga", "Bundesliga"], // Played with Haaland at City (previously) and Hakimi at Dortmund
  },
  {
    id: 15,
    name: "Robert Lewandowski",
    club: "Barcelona",
    position: "Forward",
    country: "Poland",
    minutesPlayed: 750,
    cards: { yellow: 2, red: 0 },
    previousClubs: ["Bayern Munich", "Borussia Dortmund", "Lech Poznań"],
    previousLeaguesPlayedIn: ["Bundesliga", "Ekstraklasa"], // Played with Gündoğan at Dortmund/Barca
  },
  {
    id: 16,
    name: "Jude Bellingham",
    club: "Real Madrid",
    position: "Midfielder",
    country: "England",
    minutesPlayed: 880,
    cards: { yellow: 3, red: 0 },
    previousClubs: ["Borussia Dortmund", "Birmingham City"],
    previousLeaguesPlayedIn: ["Bundesliga", "Championship"], // Same nationality as Kane/Dier
  },
  {
    id: 17,
    name: "Antonio Rüdiger",
    club: "Real Madrid",
    position: "Defender",
    country: "Germany",
    minutesPlayed: 900,
    cards: { yellow: 4, red: 0 },
    previousClubs: ["Chelsea", "Roma", "Stuttgart"],
    previousLeaguesPlayedIn: ["Premier League", "Serie A", "Bundesliga"], // Same nationality as Gündoğan
  },
  {
    id: 18,
    name: "Alphonso Davies",
    club: "Bayern Munich",
    position: "Defender",
    country: "Canada",
    minutesPlayed: 790,
    cards: { yellow: 2, red: 0 },
    previousClubs: ["Vancouver Whitecaps"],
    previousLeaguesPlayedIn: ["MLS"],
  },
  {
    id: 19,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    position: "Midfielder",
    country: "Germany",
    minutesPlayed: 855,
    cards: { yellow: 2, red: 0 },
    previousClubs: ["RB Leipzig", "Stuttgart"],
    previousLeaguesPlayedIn: ["Bundesliga"], // Played with Davies and Dier at Bayern
  },
  {
    id: 20,
    name: "Morten Hjulmand",
    club: "Sporting CP",
    position: "Midfielder",
    country: "Denmark",
    minutesPlayed: 820,
    cards: { yellow: 5, red: 0 },
    previousClubs: ["Lecce", "Admira Wacker", "Copenhagen"],
    previousLeaguesPlayedIn: ["Serie A", "Austrian Bundesliga", "Danish Superliga"],
  }
];

/* Part 1: Asking some yes/no questions about the data.
    - 1.1: The "Some" Check: Use .some() to find out if there is at least one player in the list who has played over 1000 minutes. (Store the result in a variable called hasMarathonPlayer).

    - The "Every" Check: Use .every() to see if every player in the list has at least 0 yellow cards. (Store this in allFairPlayers).
    
    - The "Includes" Check: Use the previousLeaguesPlayedIn array of a specific player (let's pick uclPlayers[2], which is Haaland). Use .includes() to check if he has ever played in the "Bundesliga".
*/