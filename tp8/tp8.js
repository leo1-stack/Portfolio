function addition() {
    let a = Number(document.getElementById("t1").value);
    let b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a + b;
    document.getElementById("t4").value = "";
}

function soustraction() {
    let a = Number(document.getElementById("t1").value);
    let b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a - b;
    document.getElementById("t4").value = "";
}

function multiplication() {
    let a = Number(document.getElementById("t1").value);
    let b = Number(document.getElementById("t2").value);
    document.getElementById("t3").value = a * b;
    document.getElementById("t4").value = "";
}

function division() {
    let a = Number(document.getElementById("t1").value);
    let b = Number(document.getElementById("t2").value);
    if (b === 0) {
        
        document.getElementById("t3").value = "Erreur";
    } else {
        document.getElementById("t3").value = a / b;
    }
    document.getElementById("t4").value = "";
}

function permute() {
    let a = document.getElementById("t1").value;
    let b = document.getElementById("t2").value;
    let temp = a;
    document.getElementById("t1").value = b;
    document.getElementById("t2").value = temp;
}

function parite() {
    let x = Number(document.getElementById("t3").value);
    if (isNaN(x)) {
        alert("Veuillez d'abord effectuer une opération.");
    } else if (x % 2 === 0) {
        document.getElementById("t4").value = "Pair";
    } else {
        document.getElementById("t4").value = "Impair";
    }
}

function effacer() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
}