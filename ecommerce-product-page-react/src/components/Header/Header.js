import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import style from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={style.header}>
      <Navigation />
      <div className={style.header__items}>
        <p>Test</p>
        <p>TestTwo</p>
      </div>
    </header>
  );
}
