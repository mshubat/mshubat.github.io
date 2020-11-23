import React from "react"

export const Card = ({ title, children }) => {
  const styles = {
    title: {
      //fontSize: "80px",
      //letterSpacing: "5rem",
      //color: "white",
      margin: "3rem auto",
      textAlign: "center",
    },
  }

  return (
    <div style={{margin: "auto 0rem"}}>
      <h3 style={styles.title}>{title}</h3>
      <p style={{margin: "0 auto", textAlign: "center"}}>
        {children}
      </p>
    </div>
  )
}
