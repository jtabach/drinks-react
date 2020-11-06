import styles from './DrinkCard.module.css';
import { Link } from "react-router-dom";

const DrinkCard = ({ drink }) => (
  <li className={styles.card}>
    <Link to={`drink/${drink.idDrink}`}>
      <img className={styles.image} src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div className={styles.content}>
        <h5 className={styles['header']}>{drink.strCategory}</h5>
        <h3 className={styles['name']}>{drink.strDrink}</h3>
        <h5 className={styles['header']}>Ingredients</h5>
        <ul className={styles['tile-wrapper']}>
          {drink.ingredients.map(ingredient => (
            <li className={styles['tile']}>{ingredient.type}</li>
          ))}
        </ul>
      </div>
    </Link>
  </li>
);

export default DrinkCard;