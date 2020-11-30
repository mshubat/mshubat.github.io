import React from "react"
import styles from "./skills.module.css"

export const Skills = () => {

    const skills = [
        'React',
        'Javascript',
        'Flutter',
        'Firebase',
        'SQL',
        'Java',
        'Python',
        "Git",
        "C",
        "HTML",
        "JSON",
        "CSS",
        "APIs",
        'NoSQL',
        "Flask",
        "Material UI",
        "Bootstrap",
      ];


    return (
        <div className={styles.skillGrid}>
            {skills.map((skill, i) => {
                return (
                <div key={i} className={styles.skill}>
                    <span>{skill}</span>
                </div>    
                );
            })}
        </div>
    );

}