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

function getTeddyById(listeTeddies, id){
    for(let index=0; index < listeTeddies.length; index++){
        if(id === listeTeddies[index]._id){
            return listeTeddies[index]
        }
    }
    return null
}