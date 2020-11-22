import React from "react";


export const Nav = () => {

    const styles = {
        nav: {
            display: "flex"
        },
        a: {
            margin: "0rem 3rem 0rem 0rem"
        }
    }

    return (
        <nav style={styles.nav}>
            <a style={styles.a} href="https://www.linkedin.com/in/mattshubat/">LinkedIn/mattshubat</a>
            <a style={styles.a} href="https://github.com/mshubat">GitHub/mshubat</a>
            <a style={styles.a} href="https://www.hackerrank.com/mattshubat">HackerRank/mattshubat</a>
        </nav>
    );
}