import React from "react";
import cartIcon from "../../images/icon-cart.svg";
import styles from "./Cart.module.css";
export default function Cart(props) {
  return (
    <button className={styles.cart}>
      <span
        class={`${styles["cart__item-count"]} ${
          +props.value < 1 ? styles.empty : ""
        }`}
      >
        {props.value}
      </span>
      <img src={cartIcon} alt="Cart icon" />
    </button>
  );
}
