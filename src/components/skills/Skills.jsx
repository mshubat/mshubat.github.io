import React from "react"
import styles from "./skills.module.css"

export const Skills = () => {

    const skills = [
        'React',
        'Javascript',
        'Flutter',
        'Firebase',
        'Dart',
        'SQL',
        'Java',
        'Python',
        "Flask",
        "Git",
        "C",
        "HTML",
        "JSON",
        "CSS",
        "REST APIs",
        'NoSQL',
        "Material UI",
        "Bootstrap",
      ];
    
    const classes = [
        styles.skill1,
        styles.skill2,
    ]


    return (
        <div className={styles.skillGrid}>
            {skills.map((skill, i) => {
                return (
                <div key={i} className={classes[i%classes.length]}>
                    <span>{skill}</span>
                </div>    
                );
            })}
        </div>
    );

}