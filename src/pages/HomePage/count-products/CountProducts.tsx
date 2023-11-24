import { useAppSelector } from '../../../hooks/redux';
import styles from './CountProduct.module.scss';

function CountProducts() {
  const { products, isLoading } = useAppSelector((state) => state.products);

  return (
    <div className={styles.count_products}>
      {!isLoading && <p>Showing: {products.length} items</p>}
    </div>
  );
}

export default CountProducts;
