import React from "react";
import { NavLink } from "./NavLink";
import styles from "./nav.module.css";


export const Nav = () => {

    return (
        <nav styles={styles.nav}>
            <NavLink to="https://www.linkedin.com/in/mattshubat/">LinkedIn</NavLink>
            <NavLink to="https://github.com/mshubat">GitHub</NavLink>
            <NavLink to="https://www.hackerrank.com/mattshubat">HackerRank</NavLink>
        </nav>
    );
}