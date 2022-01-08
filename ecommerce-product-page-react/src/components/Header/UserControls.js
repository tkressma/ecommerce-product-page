import React from "react";
import style from "./UserControls.module.css";
import Cart from "./Cart";
import ProfileNav from "./ProfileNav";
const UserControls = () => (
  <div className={style["user-controls"]}>
    <Cart value="5" />
    <ProfileNav />
  </div>
);

export default UserControls;
