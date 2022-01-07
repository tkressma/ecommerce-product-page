import React from "react";
import companyLogo from "../../images/logo.svg";
import styles from "./MobileNavigation.module.css";

export default function MobileNavigation(props) {
  return (
    <nav className={props.className}>
      <a
        href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6/hub/ecommerce-product-page-5ZeNPEQNC"
        className="logo"
      >
        <img src={companyLogo} alt="SNEAKERS logo" />
      </a>
    </nav>
  );
}
