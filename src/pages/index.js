import React from "react"
import {Link} from "gatsby"
import "milligram"
import { Nav } from "../components/nav";

export default function Home() {

  const classes = {
    h1: {
      color: "cadetblue"
    }
  }

  return (
    <div className="container">
      <Nav />
      
      <h1 style={classes.h1}>Hello Universe!</h1>
      <Link to="/test">to test page</Link>
      <br />
      <Link to="/bios/matt">to Matt's page</Link>
    </div>
  );
}
