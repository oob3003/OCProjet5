let total = 0;

let teddyCart = getCart();

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
            total += teddy.price
        }

    }
    //on rempli la div teddyCart avec le htmlToCreate
    let displayTeddyCart = document.getElementById('teddyCart');
    displayTeddyCart.innerHTML = htmlToCreate; 
    //on rempli la div totalCart avec le total
    let displayTotalCart = document.getElementById('totalCart');
    displayTotalCart.innerHTML = total; 
}

// je crée la fonction "send" pour envoyer les datas user au serveur
function send(product_id) {
    // je crée l'objet AJAX qui sera notre requête "envoyer/recevoir" au serveur
    let contact = new XMLHttpRequest ()   // XMLHttpRequest est un objet AJAX
        contact.onreadystatechange = function () {  // ceci est une fonction AJAX
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
                //console.log(this.responseText) // pour tester dans la console
                var response = JSON.parse(this.responseText);  // "parse" transforme le JSON en JS
                document.getElementById('result').innerHTML = response.postData.text; 
                 //console.log(response); // pour tester dans la console
            }
        };
    contact.open("POST", "http://localhost:3000/api/teddies/order");
    contact.setRequestHeader("Content-Type","application/json");
    contact.send(JSON.stringify({value:product_id})); // "stringify" transforme le JS en JSON
};                      // OCP5 ({value:product_id}) 

// annulation du comportement par défaut lors di clic sur "Envoyer"
const envoi = document.querySelector("input[value='Envoyer']");
envoi.addEventListener('click', function(event){
    event.preventDefault();
    const saisie = document.getElementById('firstName');
    send(saisie.name);
    return(saisie.name);
});











/*// envoi des données du formulaire

document.getElementById('form').addEventListener("submit",  (e)=> {
    e.preventDefault();
    console.log(document.getElementById('form'));
    function sendData() {
      var XHR = new XMLHttpRequest();
  
      // Liez l'objet FormData et l'élément form
      var FD = new FormData(form);
  
      // Définissez ce qui se passe si la soumission s'est opérée avec succès
      XHR.addEventListener("submit", function(event) {
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
  });*/