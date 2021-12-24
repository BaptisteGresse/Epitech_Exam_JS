let movies = [
    {title: "Harry Potter à l'école des sorciers", releaseYear: 2001,
    director: "Chris Colombus", description: "Le début du destin magique d'un garçon pas comme les autres"},
    {title: "Harry Potter et la chambre des secrets", releaseYear: 2002,
    director: "Chris Colombus", description: "Dans les entrails de Poudlard, le mal se réveille"},
    {title: "Harry Potter et le prisonnier d'azkaban", releaseYear: 2004,
    director: "Alfonso Cuaron", description: "Les secrets du passé glissent. Tout ce qui a été imaginé sera transformé"},
    {title: "Harry Potter et la coupe de feu", releaseYear: 2005,
    director: "Mike Newell", description: "Des heures sombres et difficiles s'annoncent"},
    {title: "Harry Potter et l'ordre du phénix", releaseYear: 2007,
    director: "David Yates", description: "La rébellion commence à Poudlard"},
    {title: "Harry Potter et le prince de sang-mélé", releaseYear: 2009,
    director: "David Yates", description: "De sombres secrets dévoilés pour faire face à la bataille finale"}];

console.log("- - - - Description dans le désordre - - - -");

for(let i = 0; i < movies.length; i++) {
    console.log(movies[i].description.split(' ').sort( () => .5 - Math.random() ).join(' '));
} 
console.log("- - - - Titres des films réalisé par David Yates - - - -");

titleOfDirector("David Yates");

function titleOfDirector(director) {
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].director.toLowerCase() == director.toLowerCase()) {
            console.log(movies[i].title);
        } 
    }
}

console.log("- - - - Titres des films sortis dans une année paire - - - -");

for(let i = 0; i < movies.length; i++) {
    if(movies[i].releaseYear % 2 == 0) {
        console.log(movies[i].title);
    }
}

console.log("- - - - Titres des films sortis dans une année impaire - - - -");

for(let i = 0; i < movies.length; i++) {
    if(movies[i].releaseYear % 2 != 0) {
        console.log(movies[i].title);
    }
}

console.log("- - - - Titres des films dont la description comporte le mot secret - - - -");

for(let i = 0; i < movies.length; i++) {
    if(movies[i].description.includes("secrets") == true) {
        console.log(movies[i].title);
    }
}

console.log("- - - - Affiche les 3 premiers mots de la description - - - -");

for(let i = 0; i < movies.length; i++) {
    console.log(movies[i].description.split(' ').slice(0, 3).join(' '));
}


