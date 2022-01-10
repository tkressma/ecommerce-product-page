import styles from "./Main.module.css";
import ProductDisplay from "./ProductDisplay/ProductDisplay";
import ProductInfo from "./ProductInfo/ProductInfo";
export default function Main(props) {
  return (
    <main className={styles.main}>
      <ProductDisplay products={props.products} />
      <ProductInfo products={props.products} />
    </main>
  );
}
