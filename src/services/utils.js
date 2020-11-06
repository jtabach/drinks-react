const utils = {
  formatDrinksData(drinks) {
    // TODO: make ingredients into array of objects so that easily iterable
    const formattedDrinks = drinks.map(drink => {
      // this is a hacky loop to combine the ingredient and measure in a single object in an array
      let i = 1;
      const ingredients = [];
      while (i <= 15 && drink[`strIngredient${i}`]) {
        ingredients.push({
          type: drink[`strIngredient${i}`],
          measure: drink[`strMeasure${i}`]
        })
        i++;
      }
      drink.ingredients = ingredients;
      return drink;
    });
    // For now let's just return the first 20 results
    return formattedDrinks.slice(0,20);
  }
}

export default utils;