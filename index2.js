let baseUrl ="http://localhost:3000/api/teddies/";

let teddyChoisi = window.location.search;
let urlParams = new URLSearchParams(teddyChoisi)
teddyChoisi = urlParams.get('id');
//teddyChoisi = teddyChoisi.replace ('?id=','/'); plus nécessaire.
fetch(baseUrl+teddyChoisi)
    .then(function(response) {
        response.json()
        .then(function(teddy) {
            displayTeddy(teddy)
        })
    })
.catch(error => alert("Erreur : " + error));

function displayTeddy(teddy){
    let htmlToCreate = '';
    htmlToCreate += '<div>'
    htmlToCreate += '<img class="img-fluid" src="'+teddy.imageUrl + '">'
    htmlToCreate += '<h2>'+teddy.name + '</h2>'
    htmlToCreate += '<p>'+teddy.description + '</p>'
    htmlToCreate += teddy.price + '€'
    htmlToCreate += '</div>'

    htmlToCreate += '<div>Couleurs disponibles :'
    let colors = teddy.colors
    for (let i = 0; i < colors.length; i++) {
      htmlToCreate += '<a href> <div class="echantillon" style="background-color:' + colors[i] + '"></div></a>'
    }
    htmlToCreate += '</div>'


    let displayTeddyDiv = document.getElementById('idProduit');
    displayTeddyDiv.innerHTML = htmlToCreate;
}

//écouter le bouton id="ajouterAuPanier"

const addToCart = document.getElementById('ajouterAuPanier');    // On récupère l'élément sur lequel on veut détecter le clic
addToCart.addEventListener('click', function() { 
    addTeddyToCart()         // On écoute l'événement click
    addToCart.innerHTML = "C'est dans le panier !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});
// ajouter l'id du Teddy choisi au tableau du panier dans le localStorage.
function addTeddyToCart() {
    let teddyCartString = localStorage.getItem('teddyCart')
    let teddyCart 
    if (!teddyCartString) {
        teddyCart = []
    } else {
        teddyCart = JSON.parse(teddyCartString)
    }

    teddyCart.push(teddyChoisi)

    localStorage.setItem('teddyCart', JSON.stringify(teddyCart))

    console.log(localStorage.getItem('teddyCart'))
}