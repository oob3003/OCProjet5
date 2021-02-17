let teddies = [{
    "colors": ["Tan", "Chocolate", "Black", "White"],
    "_id": "5be9c8541c9d440000665243",
    "name": "Norbert",
    "price": 2900,
    "imageUrl": "http://localhost:3000/images/teddy_1.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    "colors": ["Pale brown", "Dark brown", "White"],
    "_id": "5beaa8bf1c9d440000a57d94",
    "name": "Arnold",
    "price": 3900,
    "imageUrl": "http://localhost:3000/images/teddy_2.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    "colors": ["Brown"],
    "_id": "5beaaa8f1c9d440000a57d95",
    "name": "Lenny and Carl",
    "price": 5900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "http://localhost:3000/images/teddy_3.jpg"
}, {
    "colors": ["Brown", "Blue", "Pink"],
    "_id": "5beaabe91c9d440000a57d96",
    "name": "Gustav",
    "price": 4500,
    "imageUrl": "http://localhost:3000/images/teddy_4.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    "colors": ["Beige", "Tan", "Chocolate"],
    "_id": "5beaacd41c9d440000a57d97",
    "name": "Garfunkel",
    "price": 5500,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "http://localhost:3000/images/teddy_5.jpg"
}]

function testGetTeddyByIdSucces() {
    console.log("je teste avec un Id existant: 5beaa8bf1c9d440000a57d94")
    let expectedResult = {
        "colors": ["Pale brown", "Dark brown", "White"],
        "_id": "5beaa8bf1c9d440000a57d94",
        "name": "Arnold",
        "price": 3900,
        "imageUrl": "http://localhost:3000/images/teddy_2.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    let result = getTeddyById(teddies, "5beaa8bf1c9d440000a57d94")

    if (JSON.stringify(result) == JSON.stringify(expectedResult)) {
        console.log("success")
    } else {
        console.log("fail")
    }

}

function testGetTeddyByIdFail() {
    console.log("je teste avec un Id erroné: 5beaa8")
    let expectedResult = null
        
   
    let result = getTeddyById(teddies, "5beaa8")

    if (result === expectedResult) {
        console.log("success")
    } else {
        console.log("fail")
    }

}

testGetTeddyByIdSucces()
testGetTeddyByIdFail()

// fonction pour afficher les prix a deux decimales

function testDisplayPriceSuccess() {
    console.log("je teste avec un prix sans décimale: 2500")
    let expectedPriceResult = "25.00&nbsp;€"
    
    
    let resultPrice = displayPrice(2500)
    if (resultPrice === expectedPriceResult) {
        console.log("success")
    } else {
        console.log("fail")
    }

    console.log("je teste avec un prix sans décimale: 2500.01")
    expectedPriceResult = "25.00&nbsp;€"
    
    
    resultPrice = displayPrice(2500.01)
    if (resultPrice === expectedPriceResult) {
        console.log("success")
    } else {
        console.log("fail")
    }
}

testDisplayPriceSuccess()
//testDisplayPriceFail()