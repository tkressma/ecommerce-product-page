import React from "react";
import companyLogo from "../../images/logo.svg";
import styles from "./Navigation.module.css";
import burgerMenu from "../../images/icon-menu.svg";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <a
        href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub/ecommerce-product-page-5ZeNPEQNC"
        className="logo"
      >
        <img src={companyLogo} alt="SNEAKERS logo" />
      </a>
      <button className={`${styles.menu} ${styles["menu--mobile"]}`}>
        <img src={burgerMenu} alt="Navigation menu" />
      </button>
      <ul className={`${styles.menu} ${styles["menu--desktop"]}`}>
        <li>
          <a href="#collections">Collections</a>
        </li>
        <li>
          <a href="#men">Men</a>
        </li>
        <li>
          <a href="#women">Women</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
