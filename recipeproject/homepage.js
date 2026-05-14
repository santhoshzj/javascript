async function loadRecipes(query = "") {
    let response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    
    let data = await response.json();
    let innerhtml = "";
    data.recipes.forEach((recipe) => {
        innerhtml += `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h2>${recipe.name}</h2>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div> `;
    });
    document.getElementById("recipesContainer").innerHTML = innerhtml;
 }

 document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    loadRecipes(query);
 });




 loadRecipes();