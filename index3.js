let baseUrl ="http://localhost:3000/api/teddies/";

let teddyChoisi = window.location.search;

let urlParams = new URLSearchParams(teddyChoisi)
teddyChoisi = urlParams.get('id');

fetch(baseUrl+teddyChoisi)
    .then(function(response) {
        response.json()
        .then(function(teddy) {
            displayTeddy(teddy)
        })
    })
.catch(error => alert("Erreur : " + error));


function lignePanier (name, color, qte, price)
{
    this.nameTeddy = name;
    this.colorTeddy = color;
    this.qteTeddy = qte;
    this.priceTeddy = price;
    {
        this.qteTeddy += qte;
    }
    
    this.getPriceLine = function()
    {
        var resultat = this.priceTeddy;
        return resultat;
    }
    this.getName = function()
    {
        return this.nameTeddy;
    }
}
// objet Panier
function Panier()
{
    this.liste = [];
    this.ajouterArticle = function (name, color, price)
    {
        let index = this.getTeddies(name);
        if (index == -1) this.liste.push(new lignePanier(name, color, price));
        else this.liste[index]1;ajouterQte(qte);
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
