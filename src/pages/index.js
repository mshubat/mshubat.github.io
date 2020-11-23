import React from "react"
import "milligram"
import { Nav } from "../components/Nav"
import {Card} from "../components/Card"

export default function Home() {

  return (
    <div className="container">
      <Nav />
      <Card title={"Hi, I'm Matt"}>
        I am a full stack software developer, technology enthusiast and problem solver.
      </Card>

    </div>
  )
}
