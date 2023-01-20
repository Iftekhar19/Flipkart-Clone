import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const {cart}=useSelector(state=>state);
  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["navbar"]}>
        <section className={styles["logo"]}>
          <Link to="/">Flipkart</Link>
        </section>
        <section className={styles["search"]}>
          <div className={styles["search-container"]}>
            <input
              type="text"
              placeholder="Search here..."
              className={styles["input"]}
            />
            <a className={styles["search-btn"]} href="#">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </section>
        <section className={styles["info"]}>
          <span className={styles["name"]}>iftekhar</span>
          <div className={styles["more"]}>
            <div className={styles["mores"]}>
              <span>more </span>
              <i class="fa-solid fa-angle-down"></i>
            </div>
            {
              <ul className={styles["box"]}>
                <li>
                  <Link to="/allproducts">All Products</Link>
                </li>
                <li>
                  <Link to="/cart">My Orders</Link>
                </li>
                <li>
                  <Link to="/">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/">Wishlists</Link>
                </li>
                <li>
                  <Link to="/">log out</Link>
                </li>
            
              </ul>
            }
          </div>
        </section>
        <section className={styles["cart"]}>
          <Link to="/cart">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          </Link>
          <span className={styles["cart-count"]}>{cart.length}</span>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
