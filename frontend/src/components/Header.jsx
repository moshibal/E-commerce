import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["nav-flex"]}>
      <h2 className={styles.headingNav}>ProShop</h2>
      <div>
        <ul className={styles["nav-flex"]}>
          <li>
            <i className="fa-solid fa-cart-circle-plus"></i>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <i className="fs fs-login"></i>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
