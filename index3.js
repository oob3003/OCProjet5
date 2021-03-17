let total = 0;

let teddyCart = getCart();
  if (teddyCart.length<1) {
    document.getElementById('form').innerHTML = 'Le panier est vide'
  }

window.onload = getTeddies() 

function displayTeddies(teddies){
    let htmlToCreate = '';
    
    for(let index = 0; index < teddyCart.length; index++) {
        let id = teddyCart[index]

        let teddy = getTeddyById(teddies, id)

        if (teddy == null) {
            htmlToCreate += '<div>Non disponible</div>'    
        } else {
            htmlToCreate += '<div class="card-title">' + teddy.name + '&nbsp;' + '<img class="card-img-top" src="' + teddy.imageUrl + '">' + displayPrice(teddy.price) + '</div>'
            total += teddy.price
        }

    }
    //on rempli la div teddyCart avec le htmlToCreate
    let displayTeddyCart = document.getElementById('teddyCart');
    displayTeddyCart.innerHTML = htmlToCreate; 
    //on rempli la div totalCart avec le total
    let displayTotalCart = document.getElementById('totalCart');
    displayTotalCart.innerHTML = displayPrice (total); 

}

let myForm = document.getElementById('form');
myForm.addEventListener('submit', function(e) {
  //validation JS des champs du formulaire

  let success = true

  success = verifAlphaNumTiret('firstName') && success
  success = verifAlphaNumTiret('lastName') && success
  success = verifAlphaNumTiret('city') && success
  success = verifyAddress('address') && success
  success = verifyZIP('ZIP') && success
  success = verifyEmail('email') && success
  
  e.preventDefault();

  if (success) {
    sendForm();
  } 
});

// création de la fonction qui récupère la saisie des champs du formulaire et les envoie au serveur

function sendForm () {

  let product_ids = [] 
  for (let index = 0; index < teddyCart.length; index++) {
    let id = teddyCart[index]
    product_ids.push(id)
  }
  //crétion de l'objet de contact
  let order = { 
    "contact": {
      "firstName": document.getElementById('firstName').value,
      "lastName": document.getElementById('lastName').value,
      "address": document.getElementById('address').value,
      "city": document.getElementById('city').value,
      "email": document.getElementById('email').value,
    },
    "products": product_ids
  }

  sendOrder(order) 

  let requestForm = new XMLHttpRequest()
    requestForm.onreadystatechange = function () {
      console.log(this.status)
      if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
        console.log(this.responseText);//console.log pour vérifier le contenu de la réponse du serveur
        var response = JSON.parse (this.responseText);
        //console.log(response);
        document.getElementById('container').innerHTML = '<div> Merci pour votre commande numéro : ' + response.orderId + '</div>' + '<div> Prix total : ' + displayPrice(total); '</div>'
      }
    };
  requestForm.open("POST", "http://localhost:3000/api/teddies/order");
  requestForm.setRequestHeader("Content-Type", "application/json");
  console.log(order); //console.log pour vérifier l'objet envoyer au serveur
  requestForm.send(JSON.stringify(order));
};



