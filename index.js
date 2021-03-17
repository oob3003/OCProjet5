window.onload = getTeddies()

function displayTeddies(teddies) {
  let teddyDisplayerElement = document.getElementById('teddyDisplayer')
  let htmlToCreate = ''

  for(let index = 0; index < teddies.length; index++) {
    let teddy = teddies[index]
    htmlToCreate += '<div class="oursonContainer">'
    htmlToCreate += '<img class="img-fluid" src="'+teddy.imageUrl + '">'
    htmlToCreate += '<h2>'+teddy.name + '</h2>'
    htmlToCreate += '<p>'+teddy.description + '</p>'
    htmlToCreate += displayPrice(teddy.price)
    htmlToCreate += '&nbsp;&nbsp;'
    htmlToCreate += '<a href= "./page2.html?id='+teddy._id+'">voir le produit</a>'
    htmlToCreate += '</div>'
  }

  teddyDisplayerElement.innerHTML = htmlToCreate
}  
