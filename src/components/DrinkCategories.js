const DrinkCategories = ({categories, handleCategorySelect}) => (
  <div>
    <ul>
      <li onClick={() => handleCategorySelect('all')}>All Drinks</li>
      {categories.map(category => (
        <li onClick={() => handleCategorySelect(category)}>{category}</li>
      ))}
    </ul>
  </div>
);

export default DrinkCategories;