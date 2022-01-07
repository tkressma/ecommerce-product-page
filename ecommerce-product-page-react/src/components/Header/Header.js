import React from "react";
import Navigation from "./Navigation";
import style from "./Header.module.css";
import UserControls from "./UserControls";

export default function Header(props) {
  return (
    <header className={style.header}>
      <Navigation />
      <UserControls />
    </header>
  );
}
