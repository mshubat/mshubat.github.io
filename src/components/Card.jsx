import React from "react"

export const Card = ({ title, width, children, align }) => {
  const styles = {
    title: {
      fontSize: "50px",
      //letterSpacing: "5rem",
      //color: "white",
      margin: "3rem auto",
      textAlign: "center",
    },
  }

  return (
    <div style={{margin: "20rem auto 20rem auto", width: "100%"}}>
      <h1 style={styles.title}>{title}</h1>
      <p style={{margin: "0 auto", textAlign: align}}>
        {children}
      </p>
    </div>
  )
}
