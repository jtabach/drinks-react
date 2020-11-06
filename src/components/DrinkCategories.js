const DrinkCategories = ({categories}) => (
  <div>
    <ul>
      {categories.map(category => (
        <li>{category}</li>
      ))}
    </ul>
  </div>
);

export default DrinkCategories;