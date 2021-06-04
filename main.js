const YOUR_APP_ID = "6ca63dc5";
const YOUR_APP_KEY = "fa3a830179a7ff6645114ce794a6ded2";

const featuredRecipeImage = document.querySelector("#featured-recipe-image");
const featuredRecipeTitle = document.querySelector("#featured-recipe-title");
const featuredRecipeAuthor = document.querySelector("#featured-recipe-author");
const featuredRecipeDescription = document.querySelector("#featured-recipe-description");
const featuredRecipeButton = document.querySelector("#featured-recipe-button");
const recipeImage2 = document.querySelector("#recipe-image-2");
const recipeTitle2 = document.querySelector("#recipe-title-2");
const recipeAuthor2 = document.querySelector("#recipe-author-2");
const recipeDescription2 = document.querySelector("#recipe-description-2");
const recipeButton2 = document.querySelector("#recipe-button-2");
const recipeImage3 = document.querySelector("#recipe-image-3");
const recipeTitle3 = document.querySelector("#recipe-title-3");
const recipeAuthor3 = document.querySelector("#recipe-author-3");
const recipeDescription3 = document.querySelector("#recipe-description-3");
const recipeButton3 = document.querySelector("#recipe-button-3");
const recipeImage4 = document.querySelector("#recipe-image-4");
const recipeTitle4 = document.querySelector("#recipe-title-4");
const recipeAuthor4 = document.querySelector("#recipe-author-4");
const recipeDescription4 = document.querySelector("#recipe-description-4");
const recipeButton4 = document.querySelector("#recipe-button-4");
const recipeImage5 = document.querySelector("#recipe-image-5");
const recipeTitle5 = document.querySelector("#recipe-title-5");
const recipeAuthor5 = document.querySelector("#recipe-author-5");
const recipeDescription5 = document.querySelector("#recipe-description-5");
const recipeButton5 = document.querySelector("#recipe-button-5");

let foodToSearch = null;

function handleRecipeClick() {
  fetchRecipe(foodToSearch);
}

function handleFoodChange() {
  foodToSearch = document.querySelector("#food-input").value;
}

async function fetchRecipe(food) {
  const response = await fetch(`https://api.edamam.com/search?q=${food}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
  const recipe = await response.json();
  console.log(recipe);
  getRecipes();
  return recipe;
}

async function getRecipes() {
  const getRecipe = await fetchRecipe(foodToSearch);
  // First recipe //
  featuredRecipeImage.src = getRecipe.hits[0].recipe.image;
  featuredRecipeTitle.innerText = getRecipe.hits[0].recipe.label;
  featuredRecipeAuthor.innerText = getRecipe.hits[0].recipe.source;
  featuredRecipeButton.href = getRecipe.hits[0].recipe.url;
  // Second recipe //
  recipeImage2.src = getRecipe.hits[1].recipe.image;
  recipeTitle2.innerText = getRecipe.hits[1]. recipe.label;
  recipeAuthor2.innerText = getRecipe.hits[1].recipe.source;
  recipeButton2.href = getRecipe.hits[1].recipe.url;
  // Third recipe //
  recipeImage3.src = getRecipe.hits[2].recipe.image;
  recipeTitle3.innerText = getRecipe.hits[2]. recipe.label;
  recipeAuthor3.innerText = getRecipe.hits[2].recipe.source;
  recipeButton3.href = getRecipe.hits[2].recipe.url;
  // Fourth recipe //
  recipeImage4.src = getRecipe.hits[3].recipe.image;
  recipeTitle4.innerText = getRecipe.hits[3]. recipe.label;
  recipeAuthor4.innerText = getRecipe.hits[3].recipe.source;
  recipeButton4.href = getRecipe.hits[3].recipe.url;
  // Fifth recipe //
  recipeImage5.src = getRecipe.hits[4].recipe.image;
  recipeTitle5.innerText = getRecipe.hits[4]. recipe.label;
  recipeAuthor5.innerText = getRecipe.hits[4].recipe.source;
  recipeButton5.href = getRecipe.hits[4].recipe.url;
}

/* INFORMATION AVAILABLE FROM API */
// hits[0].recipe.label
// hits[0].recipe.image
// hits[0].recipe.source
// hits[0].recipe.url
// hits[0].recipe.label