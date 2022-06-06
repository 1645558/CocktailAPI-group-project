//button for randomm drink that will show a drink and rhe different ingredients that are needed to make it
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// www.thecocktaildb.com/api/json/v1/1/random.php

var ownAPI = "1"
var randBtn = document.querySelector("#btnRandom")

var getUserDrink
var nameURL = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
fetch(nameURL)


