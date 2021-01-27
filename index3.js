let baseUrl ="http://localhost:3000/api/teddies/";

let teddyCart = getCart()
/*  fonction d'affichage du panier
function displayTeddy(teddy){
    let htmlToCreate = '';
    htmlToCreate += '<div>'+
     '<img class="img-fluid" src="'+teddy.imageUrl + '">'+
     '<h2>'+teddy.name + '</h2>'
     teddy.price + '€'+
     '</div>'
}
*/
getTeddies(displayCart) 
function displayCart(teddies){
    let htmlToCreate = '';
    
    for(let index = 0; index < teddyCart.length; index++) {
        let id = teddyCart[index]

        let teddy = getTeddyById(teddies, id)

        if (teddy == null) {
            htmlToCreate += '<div>Non disponible</div>'    
        } else {
            htmlToCreate += '<div>'+ teddy.name + '<img class="img-fluid" src="'+teddy.imageUrl + '">' + teddy.price + '€' + '</div>'

        }
    }
    //on rempli la div teddyCart avec le htmlToCreate
    let displayTeddyCart = document.getElementById('teddyCart');
    displayTeddyCart.innerHTML = htmlToCreate; 
}

/*
// objet Panier
function Panier()
{
    this.liste = [];
    this.ajouterArticle = function (name, color, price)
    {
        let index = this.getTeddies(name);
        if (index == -1) this.liste.push(new lignePanier(name, color, price));
        else this.liste[index]+1;ajouterQte(qte);
    }
    this.getCartPrice = function ()
    {
        let total = 0;
        for (let i = 0 ; i < this.liste.length ; i++)
        total += this.liste[i].getPriceLine();
        return total;
    }
    this.getTeddies = function(name)
    {
        for (let i = 0 ; i < this.liste.length ; i++)
            if (name == this.liste[i].getName()) return i;
        return -1;
    }
    this.supprimeTeddy = function(name)
    {
        let index = this.getTeddies(name);
        if (index > -1) this.liste.splice(index, 1);
    }

}
*/
// autre piste pour afficher le panier
 /*
function addToCartDisplayer(teddy){
    let htmlToCreate = '';
    htmlToCreate += '<div>'
    htmlToCreate += '<img class="img-fluid" src="'+teddy.imageUrl + '">'
    htmlToCreate += '<h2>'+teddy.name + '</h2>'
    htmlToCreate += '<p>'+teddy.description + '</p>'
    htmlToCreate += teddy.price + '€'
    htmlToCreate += '</div>'

    let teddyChoseDisplayerElement = document.getElementById('teddyCart');

    teddyChoseDisplayerElement.innerHTML = htmlToCreate;
}
*/
// envoi des données du formulaire

window.addEventListener("load", function () {
    function sendData() {
      var XHR = new XMLHttpRequest();
  
      // Liez l'objet FormData et l'élément form
      var FD = new FormData(form);
  
      // Définissez ce qui se passe si la soumission s'est opérée avec succès
      XHR.addEventListener("load", function(event) {
        alert(event.target.responseText);
      });
  
      // Definissez ce qui se passe en cas d'erreur
      XHR.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passé.');
      });
  
      // Configurez la requête
      XHR.open("POST", "http://localhost:3000/api/teddies/order/");
  
      // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
      XHR.send(FD);
    }
  
    // Accédez à l'élément form …
    var form = document.getElementById("form");
  
    // … et prenez en charge l'événement submit.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      sendData();
    });
  });
