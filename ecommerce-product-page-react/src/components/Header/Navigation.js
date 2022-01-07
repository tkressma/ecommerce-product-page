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
        <img src={burgerMenu} />
      </button>
      <ul className={`${styles.menu} ${styles["menu--desktop"]}`}>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
