import React from "react";
import cartIcon from "../../images/icon-cart.svg";
import styles from "./Cart.module.css";
export default function Cart() {
  return (
    <button className={styles.cart}>
      <img src={cartIcon} alt="Cart icon" />
    </button>
  );
}
