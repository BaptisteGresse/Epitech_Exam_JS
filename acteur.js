let actors = [{name: "Daniel Radcliffe", birthdate: "23/07/1989", role: "Harry Potter"},
              {name: "Emma Watson", birthdate: "15/04/1990", role: "Hermione Granger"},
              {name: "Rupert Grint", birthdate: "24/08/1988", role: "Ron Weasley"},
              {name: "Alan Rickman", birthdate: "21/02/1946", role: "Severus Rogue"},
              {name: "Tom Felton", birthdate: "22/09/1987", role: "Drago Malefoy"},
              {name: "Bonnie Wright", birthdate: "17/02/1991", role: "Ginnie Weasley"},
              {name: "Matthew Lewis", birthdate: "27/06/1989", role: "Neville Londubat"},
              {name: "Michael Gambon", birthdate: "19/10/1940", role: "Albus Dumbledore"}];

console.log("- - - - Liste des prenoms en majuscules - - - -");

for(let i = 0; i < actors.length; i++) {

    console.log(actors[i].name.toUpperCase().split(' ').slice(0, 1).join());
}
console.log("- - - - Années de naissance des acteurs - - - -");
for(let i = 0; i < actors.length; i++) {
    console.log(actors[i].birthdate.slice(6, 10));
}   

console.log("- - - - Le plus jeune - - - -");

temp = 0;
for(let i = 0; i < actors.length; i++) {
    if(actors[i].birthdate.slice(6, 10) > temp) {
        temp = actors[i].birthdate.slice(6, 10);
    }
}
for(let i = 0; i < actors.length; i++) {
    if(actors[i].birthdate.slice(6, 10).includes(temp) == true) {
        console.log(actors[i].name);
    }
}

console.log("- - - - Le plus vieux - - - -");

temp = 2021;
for(let i = 0; i < actors.length; i++) {
    if(actors[i].birthdate.slice(6, 10) < temp) {
        temp = actors[i].birthdate.slice(6, 10);
    }
}
for(let i = 0; i < actors.length; i++) {
    if(actors[i].birthdate.slice(6, 10).includes(temp) == true) {
        console.log(actors[i].name);
    }
}

console.log("- - - - Dates de naissance des acteurs avec le mois en toutes lettres - - - -");

let o = [];
for(let i = 0; i < actors.length; i++) {

    o = actors[i].birthdate.split('/');
    if(o[1] == "01") {
        o[1] = "Janvier";
    } else if(o[1] == "02") {
        o[1] = "Fevrier";           
    } else if(o[1] == "03") {
        o[1] = "Mars";
    } else if(o[1] == "04") {
        o[1] = "Avril";
    } else if(o[1] == "05") {
        o[1] = "Mai";      
    } else if(o[1] == "06") {
        o[1] = "Juin";      
    } else if(o[1] == "07") {
        o[1] = "Juillet";      
    } else if(o[1] == "08") {
        o[1] = "Aout";    
    } else if(o[1] == "09") {
        o[1] = "Septembre"; 
    } else if(o[1] == "10") {
        o[1] = "Octobre"; 
    } else if(o[1] == "11") {
        o[1] = "Novembre"; 
    } else if(o[1] == "12") {
        o[1] = "Decembre";  
    }
    console.log(o.join(" ").split());
}

console.log("- - - - Age des acteurs - - - -");

let date = new Date();
for(let i = 0; i < actors.length; i++) {
    console.log(actors[i].name + " a " + (date.getFullYear() - actors[i].birthdate.slice(6, 10)) + " ans");
}

console.log("- - - - Prenom acteur = Prenom role - - - -");

for(let i = 0; i <actors.length; i++) {
    console.log(actors[i].name.split(' ').splice(0, 1).toString() + "=" + actors[i].role.split(' ').splice(0, 1).toString());
}
