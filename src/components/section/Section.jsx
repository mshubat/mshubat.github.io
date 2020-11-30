import React from "react"
import styles from "./section.module.css"

export const Section = ({title, desc, children, titleAlign, descAlign}) => {

    

    return (
        <div style={{
            margin: "25rem auto 10rem auto", 
            width: "100%",
            paddingBottom: "3rem"
        }}>
            <h2 style={{textAlign: titleAlign}} >{title}</h2>
            <p style={{margin: "0 auto 2rem auto", textAlign: descAlign}}>
                {desc}
            </p>
            {children}
        </div>
    );
}