//button for randomm drink that will show a drink and rhe different ingredients that are needed to make it
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// www.thecocktaildb.com/api/json/v1/1/random.php

var randBtn = document.querySelector("#btnRandomScreen");
var cocktailBtn = document.querySelector('#btnSearchScreen');
var ingredientBtn = document.querySelector('#btnSearchIngredientsScreen');

var mainEl = document.querySelector('.main');

var searchCocktailEl = document.querySelector('.search-cocktail');
var randomCocktailEl = document.querySelector('.random-cocktail');
var searchIngredientEl = document.querySelector('.search-ingredient');

var searchDrinkBtnEl = document.querySelector("#searchDrinkBtn");
var randomDrinkBtnEl = document.querySelector("#randomDrinkBtn");
var searchIngredientsBtnEl = document.querySelector("#searchIngredientsBtn");

var cocktailTextEl = document.querySelector(".cocktailText")

var state = 'main';

//search by ingredient name
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka")
.then(function(response) {
    console.log(response)
    return response.json()
})
.then(function(data) {
    console.log(data)
})
.catch(function(err) {
    console.log(err)
});



//search random cocktail
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(function(response) {
    console.log(response)
    return response.json()
})
.then(function(data) {
    console.log(data)
})
.catch(function(err) {
    console.log(err)
});

//search random meal
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
.then(function(response) {
    console.log(response)
    return response.json()
})
.then(function(data) {
    console.log(data)
})
.catch(function(err) {
    console.log(err)
});

var getUserDrink = function(){
//search by cocktail name
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
.then(function(response) {
    console.log(response)
    return response.json()
})
.then(function(data) {
    console.log(data)
})
.catch(function(err) {
    console.log(err)
});
}

var displayUserDrink = function(searchDrink){
cocktailTextEl.textContent = searchDrink
console.log(searchDrink)
}

function init() {
    displayState()
};

function displayState() {
    if (state === 'main') {
      mainEl.style.display = 'block';
      searchCocktailEl.style.display = 'none';
      randomCocktailEl.style.display = 'none';
      searchIngredientEl.style.display = 'none';

    }
    if (state === 'search-cocktail') {
        mainEl.style.display = 'none';
        searchCocktailEl.style.display = 'block';
        randomCocktailEl.style.display = 'none';
        searchIngredientEl.style.display = 'none';
    }
    if (state === 'random-cocktail') {
        mainEl.style.display = 'none';
        searchCocktailEl.style.display = 'none';
        randomCocktailEl.style.display = 'block';
        searchIngredientEl.style.display = 'none';
    }
    if (state === 'search-ingredient') {
        mainEl.style.display = 'none';
        searchCocktailEl.style.display = 'none';
        randomCocktailEl.style.display = 'none';
        searchIngredientEl.style.display = 'block';
    }
};

randBtn.addEventListener('click', function() {
    state = 'random-cocktail'
    displayState();
});

cocktailBtn.addEventListener('click', function() {
    state = 'search-cocktail'
    displayState();
});

ingredientBtn.addEventListener('click', function() {
    state = 'search-ingredient'
    displayState();
});


searchDrinkBtnEl.addEventListener('click', function(){
var text = cocktailTextEl.value
console.log(text);
getUserDrink();
displayUserDrink()
//grab strDrink
//grab strIngredient 1-#
})



init();
  
  
  
  
  
  
  
  
  
  
  
  
  




