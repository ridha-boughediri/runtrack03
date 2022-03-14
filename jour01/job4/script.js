function verifierLannee(annee) {

    if ((0 == annee % 4) && (0 != annee % 100) || (0 == annee % 400)) {
        console.log(annee + ' is a bissextile year');
    } else {
        console.log(annee + ' is not a bissextile year');
    }
}

const annee = prompt('entrer lannee:');

verifierLannee(annee);
