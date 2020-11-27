import React from "react"
import styles from "./nav.module.css"

export const NavLink = ({ to, children }) => {


  return (
    <a className={styles.navLink} href={to}>
      {children}
    </a>
  )
}
