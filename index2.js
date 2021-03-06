let teddyChoisi = window.location.search;
let urlParams = new URLSearchParams(teddyChoisi)
teddyChoisi = urlParams.get('id');
window.onload = getTeddy(teddyChoisi);
//teddyChoisi = teddyChoisi.replace ('?id=','/'); plus nécessaire.

function displayTeddy(teddy){
    let htmlToCreate = '';
    htmlToCreate += '<div>'
    htmlToCreate += '<img class="img-fluid" src="'+teddy.imageUrl + '">'
    htmlToCreate += '<h2>'+teddy.name + '</h2>'
    htmlToCreate += '<p>'+teddy.description + '</p>'
    htmlToCreate += displayPrice(teddy.price)
    htmlToCreate += '</div>'

    htmlToCreate += '<div>Couleurs disponibles :'
    let colors = teddy.colors
    for (let i = 0; i < colors.length; i++) {
      htmlToCreate += '<div class="echantillon" style="background-color:' + colors[i] + '"></div>'
    }
    htmlToCreate += '</div>'

//on rempli la div idProduit avec le htmlToCreate
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
    
    let teddyCart = getCart()
   
    teddyCart.push(teddyChoisi)

    localStorage.setItem('teddyCart', JSON.stringify(teddyCart))
    localStorage.getItem('teddyCart')
    window.location.assign('page3.html')
}
//test addTeddyToCart
/*localStorage.getItem('teddyCart')
console.log(localStorage.getItem('teddyCart'))
console.log(JSON.parse(localStorage.getItem('teddyCart')))*/

  