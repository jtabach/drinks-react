import styles from './DrinkList.module.css';
import DrinkCard from './DrinkCard';

const DrinkList = ({ drinks }) => (
  <div className={styles.bg}>
    <ul className={styles.list}>{drinks.map(drink => (
      <DrinkCard drink={drink} />
    ))}</ul>
  </div>
);

export default DrinkList;

// NOTES:
// Render an element for when there are no matching results