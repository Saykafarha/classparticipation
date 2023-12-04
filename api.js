function connect() {
    var searchTerm = document.getElementById("searchBox").value;

    // Ensure the correct URL format and include the searchTerm
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
        .catch(error => console.error('Error fetching data:', error));
}

function display(data) {
    var allMeals = data.meals;

    // Check if there are any meals
    if (allMeals) {
        var container = document.getElementById("container");

        // Clear previous results
        container.innerHTML = "";

        // Loop through each meal
        allMeals.forEach(meal => {
            var newDiv = document.createElement("div");
            newDiv.innerHTML = `
                <h4>Meal Name: ${meal.strMeal}</h4>
                <p>Meal ID: ${meal.idMeal}</p>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>Cooking Instructions: ${meal.strInstructions}</p>
                <p>Youtube link: <a href="${meal.strYoutube}" target="_blank">${meal.strYoutube}</a></p>
            `;

            newDiv.classList.add("mealStyle");
            container.appendChild(newDiv);
        });
    } else {
        // Display a message if no meals are found
        var container = document.getElementById("container");
        container.textContent = 'No meals found.';
    }
}
