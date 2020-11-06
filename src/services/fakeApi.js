import drinks from './drinks.json';

const fakeApi = {
  getDrinks() {
    return drinks;
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
    const filteredDrinks = drinks.filter(drink => {
      return category = drink.strCategory;
    });

    return filteredDrinks;
  },

  getDrinksBySearch(str) {
    const searchedDrinks = drinks.filter(drink => {
      return drink.strDrink.includes(str);
      // TODO also return drinks w/ string matching ingredient
    });

    return searchedDrinks;
  }
};

export default fakeApi;