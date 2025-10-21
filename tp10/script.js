function calcul_moyenne() {
    var n1 = prompt("Donnez la première note 1 :");
    var n2 = prompt("Donnez la deuxième note 2 :");
    var n3 = prompt("Donnez la troisième note 3 :");
    
    var somme = Number(n1) + Number(n2) + Number(n3);

document.write("Voici la somme: " + somme + "<br>");

    var moyenne = somme / 3;

    document.write("Voici la moyenne: " + moyenne  + "<br>");

if (moyenne < 10) {
 document.write("Vous n'êtes pas admis");

}

else {


document.write("Vous êtes admis");
}

} 



function test_age() {
    var age = prompt("Quel est votre âge ?");
 if (age < 18) {
        document.write("Vous êtes mineur.");
        document.bgColor = "red";
    }
    
    else {
    document.write("Vous êtes majeur.");
    document.bgColor="green";

    }



}

function simple_affichage() {
    var nom = prompt("Quel est votre nom ?");
    var prenom = prompt("Quel est votre prénom ?");

    document.write('<div style="margin: auto; width: 300px; border: 2px solid blue;">');
    document.write("Bonjour " + prenom + " " + nom );
    document.write('</div>');
}


function test_couleur() {
    let couleur = prompt("Entrez une couleur:");

    if(couleur === "rouge" || couleur === "red" ) {
        document.body.style.backgroundColor = "red";
    }
    else if(couleur === "vert" || couleur === "green" ) {
        document.body.style.backgroundColor = "green";
    }
    else if(couleur === "bleu" || couleur === "blue" ) {
        document.body.style.backgroundColor = "blue";
    }
    else if(couleur === "rose" || couleur === "pink" ) {
        document.body.style.backgroundColor = "pink";
    }
    else if(couleur === "jaune" || couleur === "yellow" ) {
        document.body.style.backgroundColor = "yellow";
    }
    else if(couleur === "noir" || couleur === "black" ) {
        document.body.style.backgroundColor = "black";
    }
    else if(couleur === "blanc" || couleur === "white" ) { 
        document.body.style.backgroundColor = "white";
    }
    else if(couleur === "orange" ) { couleur === "orange"
        document.body.style.backgroundColor = "orange";
    }
    else if(couleur === "violet" || couleur === "purple" ) {
        document.body.style.backgroundColor = "purple";
    }
    else {
        document.write("Couleur non reconnue.");
}
}