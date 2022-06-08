//button for randomm drink that will show a drink and rhe different ingredients that are needed to make it
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
// www.thecocktaildb.com/api/json/v1/1/random.php

var randBtn = document.querySelector(".btnRandomScreen");
var cocktailBtn = document.querySelector('.btnSearchScreen');
var ingredientBtn = document.querySelector('.btnSearchIngredientsScreen');

var mainEl = document.querySelector('.main');

var searchCocktailEl = document.querySelector('.search-cocktail');
var randomCocktailEl = document.querySelector('.random-cocktail');
var searchIngredientEl = document.querySelector('.search-ingredient');
var inputIngredientsEl = document.querySelector('.ingredientText')
var currentDrinkEl = document.querySelector('.current-drink');

var searchDrinkBtnEl = document.querySelector("#searchDrinkBtn");
var randomDrinkBtnEl = document.querySelector("#randomDrinkBtn");
var searchIngredientsBtnEl = document.querySelector("#searchIngredientsBtn");
var searchedDrinkEl = document.querySelector('#searched-drink');

var cocktailTextEl = document.querySelector(".cocktailText");
var cocktailInput = document.querySelector("#cocktailInput");
var currentDrink = document.querySelector('#currentDrink');

var backBtn1El = document.querySelector("#backBtn1");
var backBtn2El = document.querySelector("#backBtn2");
var backBtn3El = document.querySelector("#backBtn3");

var ingredientInputEl = document.querySelector("#ingredientInput");
var currentIngredientEl = document.querySelector("#currentIngredient");
var ingredientDiv = document.querySelector(".current-ingredient");

var randomDrinkEl = document.querySelector(".random-drink");
var randomDrink = document.querySelector("#randomDrink");
var randomMealBtn = document.querySelector('#randomMealBtn');
var randomDiv = document.querySelector('.random-meal');
var randomMealEl = document.querySelector('#randomMeal');

var state = 'main';

var getUserIngredients = function () {
    //search by ingredient name
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + ingredientInputEl.value)
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            ingredientDiv.textContent = " "

            var ingredientName = document.createElement('p');
            ingredientName.textContent = 'Ingredient: ' + data.ingredients[0].strIngredient;
            currentIngredientEl.appendChild(ingredientName)

            var ingredientdes = document.createElement('p');
            ingredientdes.textContent = data.ingredients[0].strDescription;
            currentIngredientEl.appendChild(ingredientdes)
        })
        .catch(function (err) {
            console.log(err)
        });
};

function getIngredients(obj) {
    return Object.keys(obj)
        .filter(key => key.includes('Ingredient'))
        .map(ingredient => obj[ingredient])
        .filter(ingredient => ingredient);
}

var getRandomDrink = function () {
    //search random cocktail
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            randomDrinkEl.textContent = " "

            var drinkNameRan = document.createElement('p');
            drinkNameRan.textContent = 'Drink: ' + data.drinks[0].strDrink;
            console.log(data.drinks[0]);
            randomDrink.appendChild(drinkNameRan);

            var ingredients = getIngredients(data.drinks[0]);
            //console.log(ingredients);
            //for (var i = 0; i < ingredients.length; i++) {
            var ingredientsRan = document.createElement('p')
            ingredientsRan.textContent = 'Ingredients: ' + ingredients;
            randomDrink.appendChild(ingredientsRan)
            console.log(ingredients)
            // }
            // // if (ingredients != null) {
            // //     console.log(ingredients)
            // }
            //var ingredientRan = document.createElement('p');
            //ingredientRan.textContent = 'Ingredients: ' + data.drinks[0].strIngredient;
            //console.log(ingredients)
            //}
        })
        .catch(function (err) {
            console.log(err)
        });

};

var getRandomMeal = function () {
    //search random meal
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (data) {
            console.log(data)

            randomDiv.textContent = '';

            var mealRan = document.createElement('p');
            mealRan.textContent = 'Name: ' + data.meals[0].strMeal
            randomMealEl.appendChild(mealRan)

        })
        .catch(function (err) {
            console.log(err)
        });
};

var getUserDrink = function () {
    //search by cocktail name
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailInput.value)
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (data) {

            currentDrinkEl.textContent = '';

            var drinkName = document.createElement('p');
            drinkName.textContent = 'Drink: ' + data.drinks[0].strDrink;
            console.log(data.drinks[0]);
            currentDrink.appendChild(drinkName);

            var instructions = document.createElement('p');
            instructions.textContent = 'Intructions: ' + data.drinks[0].strInstructions
            currentDrink.appendChild(instructions);

            var ingredients = getIngredients(data.drinks[0]);
            //console.log(ingredients);
            //for (var i = 0; i < ingredients.length; i++) {
            var ingredientsRan = document.createElement('p')
            ingredientsRan.textContent = 'Ingredients: ' + ingredients;
            currentDrink.appendChild(ingredientsRan)
            console.log(ingredients)
            // var ingredient = document.createElement('p');
            // ingredient.textContent = 'ingredient 1: ' + data.drinks[0].strIngredient1
            // currentDrink.appendChild(ingredient)
        })
        .catch(function (err) {
            console.log(err)
        });
};

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

randBtn.addEventListener('click', function () {
    state = 'random-cocktail'
    displayState();
});

cocktailBtn.addEventListener('click', function () {
    state = 'search-cocktail'
    displayState();
});

ingredientBtn.addEventListener('click', function () {
    state = 'search-ingredient'

    displayState();
});

searchIngredientsBtnEl.addEventListener('click', function () {
    getUserIngredients();
})
searchDrinkBtnEl.addEventListener('click', function () {
    var text = cocktailTextEl.value
    console.log(text);
    getUserDrink();
    //grab strDrink
    //grab strIngredient 1-#
});

randomMealBtn.addEventListener('click', function () {
    getRandomMeal();
})

randomDrinkBtnEl.addEventListener('click', function () {
    getRandomDrink();
})

backBtn1El.addEventListener('click', function () {
    state = 'main';
    displayState();
})
backBtn2El.addEventListener('click', function () {
    state = 'main';
    displayState();
})
backBtn3El.addEventListener('click', function () {
    state = 'main';
    displayState();
})


init();

















