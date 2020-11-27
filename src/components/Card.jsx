import React from "react"

export const Card = ({ title, width, children, align }) => {
  const styles = {
    title: {
      fontSize: "40px",
      //letterSpacing: "5rem",
      //color: "white",
      margin: "3rem auto",
      textAlign: "center",
    },
  }

  return (
    <div style={{margin: "20rem auto", width: width}}>
      <h3 style={styles.title}>{title}</h3>
      <p style={{margin: "0 auto", textAlign: align}}>
        {children}
      </p>
    </div>
  )
}
