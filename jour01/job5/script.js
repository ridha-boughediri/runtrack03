

// let pass="ridha";
// while(pass!="millionnaires"){
//     pass=prompt("entrer le mot de pass");
// }

let joursSemaines= ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
let jour=0;
//on peut utiliser une boucle noramale
// for(jour;jour>joursSemaines.length;jour++){
//     console.table(joursSemaines);

// }



for(let jour in joursSemaines){
    console.table(joursSemaines[jour]);
    //ou
    // console.log(joursSemaines);
}
//on peut aussi avec la boucle for (of )

// for(jour of joursSemaines){
//     console.log(jour);
// }
