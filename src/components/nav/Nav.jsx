import React from "react";
import { NavItem } from "./NavItem";
import styles from "./nav.module.css";
import {
    FaLinkedin,
    FaGithub,
    FaHackerrank,
 } from "react-icons/fa";
 import { MdEmail } from "react-icons/md";

export const Nav = () => {
  return (
    <nav styles={styles.nav}>
      <NavItem>
        <FaGithub className={styles.navIcon}/>
        <a className={styles.navLink} href="https://github.com/mshubat">GitHub</a>
      </NavItem>
      <NavItem>
        <FaHackerrank className={styles.navIcon}/>
        <a className={styles.navLink} href="https://www.hackerrank.com/mattshubat">HackerRank</a>
      </NavItem>
      <NavItem>
        <FaLinkedin className={styles.navIcon}/>
        <a className={styles.navLink} href="https://www.linkedin.com/in/mattshubat/">LinkedIn</a>
      </NavItem>
      <NavItem>
        <MdEmail className={styles.navIcon}/>
        <a className={styles.navLink} href="mailto:mattshubat@gmail.com">Email</a>
      </NavItem>
    </nav>
  )
}
