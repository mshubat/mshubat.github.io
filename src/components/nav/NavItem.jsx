import React from "react"
import styles from "./nav.module.css"

export const NavItem = ({ children }) => {


  return (
    <div className={styles.navItem}>
      {children}
    </div>
  )
}
