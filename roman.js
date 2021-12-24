let books = [
    {tome: 1, title: "Harry Potter à l'Ecole des Sorciers",
    description: "Que cache la trappe du troisieme étage?"},
    {tome: 2, title: "Harry Potter et la Chambre des secrets",
    description: "Harry résoudra t'il le mystère de la Chambre des Secrets?"},
    {tome: 3, title: "Harry Potter et le prisonnier d'azkaban",
    description: "Qui est Sirius Black"},
    {tome: 4, title: "Harry Potter et la coupe de feu",
    description: "Qui gagnera le tournoi des trois sorciers?"},
    {tome: 5, title: "Harry Potter et l'ordre du phénix",
    description: "Harry et ses amis réussiront-ils à sauver Sirius Black (Harry en a révé)?"},
    {tome: 6, title: "Harry Potter et le prince de sang-mélé",
    description: "Qui est le prince de sang-mélé?"},
    {tome: 7, title: "Harry Potter et les reliques de la mort",
    description: "Harry parviendra t'il à retrouver tous les horcruxes et à les détruire?"}];

console.log("- - - - Titre Des Livres - - - -");

for(let i = 0; i < books.length; i++) { 
    console.log(books[i].title);
}

console.log("- - - - Titre des tomes 1 et 7 - - - -");

for(let i = 0; i < books.length; i++) { 
    if(i == 0  || i == 6) 
        console.log(books[i].title); 
}

console.log("- - - - Titre des livres sous forme de chaîne de caractères - - - -");

console.log(arrayToString(books));

function arrayToString(array) { 
    let temp = "";
    for(let i = 0; i < books.length; i++) {  
        temp = temp + (books[i].title.toString())+"|";
    }
    temp = temp.slice(0, -1)
    return temp;
}

console.log("- - - - Somme des numéros de tome - - - -");

console.log(sommeOfId(books));

function sommeOfId(array) {
    let result = 0;
        for(let i = 0; i < array.length; i++) { 
            result = (array[i].tome) + result;
        }   
    return (result);
}

console.log("- - - - Description comportant le mot Harry - - - -");

console.log(searchWord("harry"));

function searchWord(word) { 
    let temp = [];
    for(let i = 0; i < books.length; i++) { 
        if(books[i].description.toLowerCase().includes(word.toLowerCase()) == true) {
            temp.push(books[i].description);
        }
    }
    return temp;
} 

console.log("- - - - Description comportant le mot amis - - - -");

console.log(searchWord("amis"));

console.log("- - - - Tailles des titres dans les livres - - - -");

console.log(maxSizeTitle(books));

function maxSizeTitle(array) { 
    let tab = [];
    for(let i = 0; i < array.length; i++) { 
        tab.push(array[i].title.length);
    }
return(tab);
}

console.log("- - - - Titre Maximum - - - -");
let temp = "";
for(let i = 0; i < books.length; i++) {
    if(books[i].title.length > temp.length) {
        temp = books[i].title;
    }
}
for(let i = 0; i < books.length; i++) {
    if(books[i].title.length == temp.length) {
        console.log(books[i].title)
    }
}

console.log("- - - - Titre Minimum - - - -");
for(let i = 0; i < books.length; i++) {
    if (books[i].title.length < temp.length) {
        temp = books[i].title;
    }
}
console.log(temp);

    









 



