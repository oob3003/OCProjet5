/*
let url ="http://localhost:3000/api/teddies";

fetch(url)
  .then(function(response) {
    response.json()
    .then(function(data){
      parseTeddies(data)
    })
  })
.catch(error => alert("Erreur : " + error));
*/
getTeddies(parseTeddies)

function parseTeddies(teddies) {
  let teddyDisplayerElement = document.getElementById('teddyDisplayer')
  let htmlToCreate = ''

  for(let index = 0; index < teddies.length; index++) {
    let teddy = teddies[index]
    htmlToCreate += '<div>'
    htmlToCreate += '<img class="img-fluid" src="'+teddy.imageUrl + '">'
    htmlToCreate += '<h2>'+teddy.name + '</h2>'
    htmlToCreate += '<p>'+teddy.description + '</p>'
    htmlToCreate += teddy.price + '€'
    htmlToCreate += '</div>'
    htmlToCreate += '<a href= "./page2.html?id='+teddy._id+'">voir le produit</a>'
  }

  teddyDisplayerElement.innerHTML = htmlToCreate
}  
