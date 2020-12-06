import React, { useState } from "react"
import classNames from "classnames/bind"
import styles from "./skills.module.css"
import { IconContext } from "react-icons"
import { skills } from "./SkillObjects"

let cx = classNames.bind(styles)

export const Skills = () => {
  const [focusSkill, setFocusSkill] = useState();

  const classes = [
    styles.skill1,
    styles.skill2,
    styles.skill3,
    styles.skill4,
    styles.skill5,
  ]

  const focusStyle = skill => {
    const classIndex = Object.keys(skills).indexOf(skill) % classes.length

    return cx({
      focusSkill: true,
      focusSkill1: classIndex === 0,
      focusSkill2: classIndex === 1,
      focusSkill3: classIndex === 2,
      focusSkill4: classIndex === 3,
      focusSkill5: classIndex === 4,
    })
  }

  if (focusSkill) {
    return (
      <IconContext.Provider value={{ size: "5em" }}>
        <div className={focusStyle(focusSkill)} onClick={() => setFocusSkill()}>
          <span className={styles.focusSkillHeading}>{focusSkill}</span>
          <p className={styles.focusSkillDescription}>
            {skills[focusSkill].info}
          </p>
          <div className={styles.focusSkillIcon}>
            {skills[focusSkill].icon}
          </div>
        </div>
      </IconContext.Provider>
    )
  } else {
    return (
      <div className={styles.skillGrid}>
        {Object.keys(skills).map((skill, i) => {
          return (
            <IconContext.Provider value={{ size: "3em" }}>
              <div
                key={i}
                className={classes[i % classes.length]}
                onClick={() => setFocusSkill(skill)}
              >
                {skills[skill].icon}
              </div>
            </IconContext.Provider>
          )
        })}
      </div>
    )
  }
}
