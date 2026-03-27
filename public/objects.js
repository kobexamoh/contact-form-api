let movie = {
    name: 'Man of Steel',
    year: 2013,
    director: 'Zack Snyder'
};

//console.log(movie);

console.log(`My favourite movie is ${movie.name}, and it was released in ${movie.year} by ${movie.director}`);


// and now for reassigning the property of an object

movie.name = 'Justice League';

console.log(`Afterwards, ${movie.director} released ${movie.name} and it was quite controversional.`);