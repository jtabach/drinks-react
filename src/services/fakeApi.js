import drinks from './drinks.json';
import utils from './utils';

const fakeApi = {
  getDrinks() {
    return utils.formatDrinksData(drinks);
  },

  getDrinkCategories() {
    const categories = [];

    drinks.forEach(drink => {
      if (!categories.includes(drink.strCategory)) {
        categories.push(drink.strCategory)
      }
    });

    return categories;
  },

  getDrinksByCategory(category) {
    if (category === 'all') {
      return drinks;
    }

    const filteredDrinks = drinks.filter(drink => {
      return category === drink.strCategory;
    });

    return utils.formatDrinksData(filteredDrinks);
  },

  // This would be used to help with autocomplete on search (will not use for project)
  getDrinkIngredients() {
    const ingredients = [];

    drinks.forEach(drink => {
      let i = 1;
      while (i <= 15 && drink[`strIngredient${i}`]) {
        if (!ingredients.includes(drink[`strIngredient${i}`])) {
          ingredients.push(drink[`strIngredient${i}`]);
        }
        i++;
      }
    });

    return ingredients;
  },

  // WIP: If we wanted to search by ingredients only
  getDrinksByIngredients(ingredients) {
    if (!ingredients.length) {
      return utils.formatDrinksData(drinks);
    }
  },

  // NOTE: if I wanted to search from a filtered drink set, I could pass
  // the drink set as a second argument and default to the complete drink set if no param is passed
  getDrinksBySearch(str) {
    const searchedDrinks = drinks.filter(drink => {
      const drinkMatch = drink.strDrink.toLowerCase().includes(str.toLowerCase());
      let ingredientMatch = false;
      let i = 1;
      // this is painfully slow. Need a different approach to search by ingredient
      while (i <= 15 && drink[`strIngredient${i}`]) {
        if (drink[`strIngredient${i}`].toLowerCase().includes(str.toLowerCase())) {
          ingredientMatch = true;
        }
        i++;
      }
      return drinkMatch || ingredientMatch;
    });

    return utils.formatDrinksData(searchedDrinks);
  }
};

export default fakeApi;

/* NOTES
* Pagination?
* Allowing more than one selected category at a time?
*/