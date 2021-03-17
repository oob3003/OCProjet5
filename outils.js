let url ="http://localhost:3000/api/teddies/";

function getTeddies() { 
    fetch(url)
    .then(function(response) {
        response.json()
        .then(function(data){
            displayTeddies(data)
        })
    })
    .catch(error => alert("Erreur : " + error));
};

// fonction pour afficher les prix a deux decimales
function displayPrice (teddyPrice) {
    return String(parseFloat(teddyPrice/100).toFixed(2)) + '&nbsp;€'; 
};

function getTeddy(_id) {
    fetch(url+_id)
    .then(function(response) {
        response.json()
        .then(function(teddy) {
            displayTeddy(teddy)
        })
    })
.catch(error => alert("Erreur : " + error));
};

// création du panier
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

// parcourir la liste des teddies pour trouver le teddy dont l'_id a été choisi
function getTeddyById(listeTeddies, id){
    for(let index=0; index < listeTeddies.length; index++){
        if(id === listeTeddies[index]._id){
            return listeTeddies[index]
        }
    }
    return null
}

// vérif formulaire

function verifAlphaNumTiret(fieldId) {
    return verif(fieldId, /^[a-zA-Z]+([-'\s][a-zA-Z]+[-'\s][a-zA-Z]+)?$/, "le champ ci-dessus doit comporter uniquement des lettres sans accent et un éventuellement un ou des tirets")
}

function verifyAddress (fieldId) {
    return verif(fieldId, /^[0-9a-zA-Z-\s]+$/, "le champ ci-dessus doit comporter uniquement des chiffres, lettres et tirets")
}

function verifyZIP (fieldId) {
    return verif(fieldId, /^[0-9]{5}$/, "le champ ci-dessus doit comporter cinq chiffres")
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
    myInput.value = myInput.value.trim();
    if (myInput.value == "") {
        myError.innerHTML = "le champ est requis";
        return false;
    } else if (myRegEx.test(myInput.value) == false) {
        myError.innerHTML = message
        return false;
    } else {
        myError.innerHTML = "";
        return true;
    }
};

// Envoi du panier au serveur pour obtenir la confirmation de commande
function sendOrder(order) {
    const option = {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
            "Content-Type":"application/json"
        }
    }
    fetch(url+"order",option)
    .then(response => response.json())
    .then(response => {
        document.getElementById('container').innerHTML = '<div> Merci pour votre commande numéro : ' + response.orderId + '</div>';
        localStorage.removeItem("teddyCart"); 
    })
    .catch(error => alert("Erreur : " + error));
}
