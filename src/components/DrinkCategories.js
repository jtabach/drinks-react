import styles from './DrinkCategories.module.css';

const DrinkCategories = ({categories, selectCategory, handleCategorySelect}) => {

  return (
    <div className={styles['categories']}>
      <h5 className={styles['header']}>Categories</h5>
      <ul>
        <li className={`${styles['item']} ${selectCategory === 'all' ? styles.active : ''}`} onClick={() => handleCategorySelect('all')}>All Drinks</li>
        {categories.map(category => (
          <li className={`${styles['item']} ${selectCategory === category ? styles.active : ''}`} onClick={() => handleCategorySelect(category)}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default DrinkCategories;

// NOTES:
// Dropdown component for mobile view