import React from "react"

export const Header = ({ title, children }) => {
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
    <div style={{margin: "25rem auto 25rem auto", width: "100%"}}>
      <h1 style={styles.title}>{title}</h1>
      <p style={{margin: "0 auto", textAlign: "center", fontSize: "2rem", height: "2em"}}>
        {children}
      </p>
    </div>
  )
}
