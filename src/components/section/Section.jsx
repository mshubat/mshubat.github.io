import React from "react"
import styles from "./section.module.css"

export const Section = ({title, desc, children, titleAlign, descAlign}) => {

    

    return (
        <div style={{
            margin: "10rem auto 5rem auto", 
            width: "100%",
            paddingBottom: "3rem"
        }} className={styles.section}>
            <h2 style={{textAlign: titleAlign}} >{title}</h2>
            <p style={{margin: "0 auto 6rem auto", textAlign: descAlign}}>
                {desc}
            </p>
            {children}
        </div>
    );
}