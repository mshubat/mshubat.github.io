import React from "react";


export const Nav = () => {

    const styles = {
        nav: {
            width: "fit-content",
            margin: "auto"
        },
        a: {
            margin: "0rem 2rem"
        }
    }

    return (
        <nav style={styles.nav}>
            <a style={styles.a} href="https://www.linkedin.com/in/mattshubat/">LinkedIn</a>
            <a style={styles.a} href="https://github.com/mshubat">GitHub</a>
            <a style={styles.a} href="https://www.hackerrank.com/mattshubat">HackerRank</a>
        </nav>
    );
}