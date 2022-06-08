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
var searchedRandomMealEl = document.querySelector('#searched-meal')
var backBtn1El = document.querySelector("#backBtn1");
var backBtn2El = document.querySelector("#backBtn2");
var backBtn3El = document.querySelector("#backBtn3");
var ingredientInputEl = document.querySelector("#ingredientInput");
var currentIngredientEl = document.querySelector("#currentIngredient");
var ingredientDiv = document.querySelector(".current-ingredient");
var searchedRandomDrinkEl = document.querySelector('#searched-random-drink')
var randomDrinkEl = document.querySelector(".random-drink");
var randomDrink = document.querySelector("#randomDrink");
var randomMealBtn = document.querySelector('#randomMealBtn');
var randomDiv = document.querySelector('.random-meal');
var randomMealEl = document.querySelector('#randomMeal');
var searchedIngredientEl = document.querySelector('#searched-ingredient');
var state = 'main';

var getUserIngredients = function () {
    //search by ingredient name
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + ingredientInputEl.value)
        .then(function (response) {
            //console.log(response)
            return response.json()
        })
        .then(function (data) {
            //console.log(data)
            ingredientDiv.textContent = " "

            var ingredientNameEl = document.createElement('p');
            ingredientNameEl.textContent = 'Ingredient: ' + data.ingredients[0].strIngredient;
            currentIngredientEl.appendChild(ingredientNameEl);

            var ingredientsEl = document.createElement('p');
            ingredientsEl.textContent = 'Description: ' + data.ingredients[0].strDescription;
            currentIngredientEl.appendChild(ingredientsEl);
            getLocalStorageIngredients();
            getIngredientsImg(ingredientInputEl.value);
        })
        .catch(function (err) {
            console.log(err)
        });
};

var getIngredientsImg = function (ingredient) {
    var imgEl = document.createElement('img');
    imgEl.src = 'https://www.thecocktaildb.com/images/ingredients/' + ingredient + '.png';
    currentIngredientEl.appendChild(imgEl);
};

function getIngredients(obj) {
    return Object.keys(obj)
        .filter(key => key.includes('Ingredient'))
        .map(ingredient => obj[ingredient])
        .filter(ingredient => ingredient);
};

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

            var img = document.createElement('img');
            img.src = data.drinks[0].strDrinkThumb;
            console.log(data.drinks[0]);
            randomDrink.appendChild(img);

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

            var img = document.createElement('img');
            img.src = data.meals[0].strMealThumb;
            console.log(data.meals[0]);
            randomMealEl.appendChild(img);

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

            var ingredientsRan = document.createElement('p')
            ingredientsRan.textContent = 'Ingredients: ' + ingredients;
            currentDrink.appendChild(ingredientsRan)
            console.log(ingredients)

            var img = document.createElement('img');
            img.src = data.drinks[0].strDrinkThumb;
            console.log(data.drinks[0]);
            currentDrink.appendChild(img);
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

var items = [];
var getLocalStorageDrinks = function () {

    var cocktail = cocktailInput.value
    items.push(cocktail)
    localStorage.setItem("Drinks", JSON.stringify(items))

};

var getLocalStorageIngredients = function () {
    var ingredients = ingredientInputEl.value
    items.push(ingredients)
    localStorage.setItem("Ingredients", JSON.stringify(items))
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
});

searchDrinkBtnEl.addEventListener('click', function () {
    var text = cocktailTextEl.value;
    console.log(text);
    getUserDrink();
    getLocalStorageDrinks();
    //grab strDrink
    //grab strIngredient 1-#
});

randomMealBtn.addEventListener('click', function () {
    getRandomMeal();
});

randomDrinkBtnEl.addEventListener('click', function () {
    getRandomDrink();
});

backBtn1El.addEventListener('click', function () {
    state = 'main';
    displayState();
});

backBtn2El.addEventListener('click', function () {
    state = 'main';
    displayState();
});

backBtn3El.addEventListener('click', function () {
    state = 'main';
    displayState();
});

init();

















