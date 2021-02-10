function getCart() {
    let teddyCartString = localStorage.getItem('teddyCart')
    let teddyCart 
    if (!teddyCartString) {
        teddyCart = []
    } else {
        teddyCart = JSON.parse(teddyCartString)
    }
    return teddyCart
};

function getTeddies(callback) {
    let url ="http://localhost:3000/api/teddies";

    fetch(url)
    .then(function(response) {
        response.json()
        .then(function(data){
            callback(data)
        })
    })
    .catch(error => alert("Erreur : " + error));
}
// parcourir la liste des teddies pour trouver le teddy dont l'_id a été choisi
function getTeddyById(listeTeddies, id){
    for(let index=0; index < listeTeddies.length; index++){
        if(id === listeTeddies[index]._id){
            return listeTeddies[index]
        }
    }
    return null
}

// creer une fonction pour afficher les prix a deux decimales
function displayPrice (teddyPrice) {
    return String(parseFloat(teddyPrice/100).toFixed(2)) + '&nbsp;€'; 
}

// vérif formulaire

function verifAlphaNumTiret(fieldId) {
    return verif(fieldId, /^[a-zA-Z-\s]+$/, "le champ doit comporter uniquement des lettres et tiret(s)")
}

function verifyAddress (fieldId) {
    return verif(fieldId, /^[0-9a-zA-Z-\s]+$/, "le champ doit comporter uniquement des chiffres, lettres et tirets")
}

function verifyEmail (fieldId) {
    let value = document.getElementById(fieldId).value;
    let myError = document.getElementById(fieldId + '-error');
    let errorMessage = "adresse email non valide"
    let partsArobase = value.split('@')

    if (partsArobase.length !== 2) {
        myError.innerHTML = errorMessage
        return false
    }

    let serverMailName = partsArobase[1]
    let partsPoint = serverMailName.split('.')
    
    if (partsPoint.length !== 2) {
        myError.innerHTML = errorMessage
        return false
    }

    return verif(fieldId, /^[0-9a-zA-Z-@.\s]+$/, errorMessage)
}

function verif(fieldId, myRegEx, message) {
    let myInput = document.getElementById(fieldId);
    let myError = document.getElementById(fieldId + '-error');

    if (myInput.value.trim() == "") {
        myError.innerHTML = "le champ est requis";
        return false;
    } else if (myRegEx.test(myInput.value) == false) {
        myError.innerHTML = message
        return false;
    } else {
        myError.innerHTML = "";
        return true;
    }
}
