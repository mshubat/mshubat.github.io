import React from "react"
import styles from "./projects.module.css"

export const Projects = () => {
  const projects = [
    {
      name: "Galaxy Web",
      summary: "Explore space with astronomical data online",
      description: "Currently in development!",
      link: "#",
      imageSource: "../../../projects/space-web.jpg",
      artist: "pikisuperstar",
    },
    {
      name: "Galaxy Data Mines",
      summary: "Comparing 2 Astronomical Databases",
      description: `I developed this tool for my thesis project to help astronomers compare objects between NED (the NASA extragalactic Database) 
            and SIMBAD (Set of Identifications, Measurements, and Bibliography for Astronomical Data). The tool can query millions of objects
            and output skyplots and statistics of the results.`,
      link: "https://github.com/mshubat/galaxy_data_mines",
      imageSource: "../../../projects/space.jpg",
      artist: "tartila",
    },
    {
      name: "ER Watch",
      summary: "Hospital Wait Time Calculator",
      description: `ER Watch is a NodeJS application that estimates how long it will take patients 
            to see a doctor at the emergency room. If a patient needs to go to the emergency room, they 
            can check the website to see how their estimated wait time. Nurses can log in to their emergency room, 
            and add patients to the queue as they check in. Each patient is given an 8 digit code, which 
            they can enter into the website on their mobile device.`,
      link: "https://erwatch.herokuapp.com/",
      imageSource: "../../../projects/med.jpg",
      artist: "rawpixel.com",
    },
  ]

  return (
    <div className={styles.projectGrid}>
      {projects.map((project, i) => {
        return (
          <a href={project.link}>
          <div key={i} className={styles.project}>
            <h3>{project.name}</h3>
            <div className={styles.summary}>{project.summary}</div>
            <div className={styles.description}>{project.description}</div>
            <a className={styles.artist} href="https://www.freepik.com/vectors/background">Artist: {project.artist}</a>
            <img className={styles.image} src={project.imageSource ? project.imageSource : null} />
          </div>
          </a>
        )
      })}
    </div>
  )
}
