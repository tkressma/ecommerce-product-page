import styles from "./CartModal.module.css";
export default function CartModal() {
  return (
    <div class={styles["cart-modal"]}>
      <h3>Cart</h3>
      <p>Some ItemSome CheckoutSome Checkout</p>
      <p>Some Checkout</p>
    </div>
  );
}
