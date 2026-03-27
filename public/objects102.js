let firstFilm = {
    name: 'Man of Steel',
    year: 2013,
    director: 'Zack Snyder'
};

let anotherFilm = {
    name: 'The Flash',
    year: '2024',
    director: 'James Gunn'
}

let getFilmSummary = function(movie) {
    console.log(`${movie.name} by ${movie.director}`);
}

// a neat way to pass a whole object as the entire function argument
getFilmSummary(firstFilm);

// Try not to do the following: you'll end up with it 'undefined'
console.log(getFilmSummary(anotherFilm));

// lastly, if you want to use functions and objects together, you can 'break' the rule that is: functions return only one thing.
let superheroFranchises = function(movies) {
    
}