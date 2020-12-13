import React, { useState } from "react"
import { FaReact, FaJava, FaPython, FaDatabase } from "react-icons/fa"
import {
  SiJavascript,
  SiFlutter,
  SiFirebase,
  SiDart,
  SiPostgresql,
  SiFlask,
  SiGit,
  SiC,
  SiHtml5,
  SiJson,
  SiCsswizardry,
  SiMaterialUi,
  SiBootstrap,
  SiSpring,
} from "react-icons/si"

export const skills = {
    React: {
      info: `I have worked in React in several production projects. I really enjoy how
            organized components allow your code to be. In addition to functional components, 
            hooks, and native state management, I have also worked with Redux, as well as 
            React Router for site navigation. This site is also made with React.`,
      icon: <FaReact />,
    },
    Javascript: {
      info: `I have worked with Javascript on many projects and am familiar with modern ES6
            features. I learnt JS after other languages, so I found it fairly straight forward to 
            pick up. As I have gained experience Javascript, I have come to understand the common 
            pitfalls to avoid and am always interested in learning more.`,
      icon: <SiJavascript />,
    },
    Flutter: {
      info: `I have worked with Flutter to build mobile apps for iOS and Android. I particularly
            love the ease of use of the Flutter framework to build UIs quickly. Coming from React, 
            it is intuitive to pick up. I have experience with the widget lifecycle, routing, providers,
            services, and integration with firebase and the google cloud platform.`,
      icon: <SiFlutter />,
    },
    Firebase: {
      info: `I have experience designing collection and document layouts taking into account the 
            application architecture in question. NoSQL design, and queries have become more 
            intuitive to me over time and I really enjoy the flexibility that Firebase provides.
            I also really like the Firebase streaming capability, when used in the right circumstances.`,
      icon: <SiFirebase />,
    },
    Dart: {
      info: `As used in my Flutter experience, I have really enjoyed a lot of the features of Dart. I
            find it gives a really nice balance between the flexibility of Javascript and the type 
            safety and design principles of Java. Its custom setter methods are also really cool.`,
      icon: <SiDart />,
    },
    SQL: {
      info: `I have experience working with SQL databases such as PostgreSQL, and MySQL. I am comfortable
            writing queries to fetch data, join tables, update records and so on. I also have
            experience laying out the model structure for the domain at hand and evolving that structure
            over time.`,
      icon: <SiPostgresql />,
    },
    Java: {
      info: `As the first OO language I learnt, Java will always have a special place in my heart. Though
            it is often criticized for being verbose, I find it to be extremely intuitive for designing 
            an OO system, and its types provide for a secure and reliable feeling while developing. I have
            written quite a few school projects in Java, and in my career have worked on an e-commerce 
            application and large system tests with Java at their core.`,
      icon: <FaJava />,
    },
    Python: {
      info: `
            🐍 I love Python. I find its lack of parentheses refreshing and its forced indentation to be clear
            and extremely legible. I have used Python in the past to write quick scripts and to solve algorithmic
            problems. I also used Python to build my thesis project called Galaxy Data Mines. Its great community,
            libraries and ease of use make it one of my favourite technologies.`,
      icon: <FaPython />,
    },
    Flask: {
      info: `In my experience with Flask and I find it to be a very fast, flexible, minimal and intuitive microframework.
            The project that I am currently working on will be using Flask for these reasons.`,
      icon: <SiFlask />,
    },
    Git: {
      info: `I have used Git in pretty much every project I have worked on. It is an invaluable tool for saving your 
            work and collaborating with a team. Every project I have worked on in my career has used git and I have 
            learnt much about it through these experiences. Git add, stash, commit, push, pull, branch, fetch, rebase
            are part of my daily workflow.`,
      icon: <SiGit />,
    },
    C: {
      info: `Working with C, and revisiting it over the years has taught me about lower level memory management
            and how computers do what they do. Using C has given me the experience to know a little more about what is
            going on under the hood. Call stacks, the stack vs heap, pointers and memory management all teach you valuable
            lessons. Pointers were particularly helpful when learning JS, as function pointers are highly similar.`,
      icon: <SiC />,
    },
    HTML: {
      info: `I started working with HTML in highschool. It was amazing to me that you could structure an entire layout
            with just tags.`,
      icon: <SiHtml5 />,
    },
    JSON: {
      info: `Essential format for communicating and passing data. Simple and necessary. I have used JSON on pretty much every
            project I have been a part of.`,
      icon: <SiJson />,
    },
    CSS: {
      info: `A cruel yet a necessary evil...`,
      icon: <SiCsswizardry />,
    },
    NoSQL: {
      info: `As mentioned in my Firebase description, I have really enjoyed the flexibility and fast evolution that NoSQL 
            databases provide. Although this can be a more challenging concept to grasp coming form SQL DB's, it is worth 
            the effort.`,
      icon: <FaDatabase />,
    },
    "Material-UI": {
      info: `I have used Material-UI to style and build both Flutter apps and Reacts apps that I have worked on. Its robust feature set
            and theming options are what make it a great component framework to work with.`,
      icon: <SiMaterialUi />,
    },
    Bootstrap: {
      info: `Similarly to Material-UI, the vast community and resources Bootstrap provides make it a great framework to 
            work with. Over the years, I have used Bootstrap to build small personal websites as well as larger web
            applications.`,
      icon: <SiBootstrap />,
    },
    "Spring Boot": {
      info: `
        I worked with Spring Boot to build a backend API service for an e-commerce application. I have experience with
        its service architecture, dependency injection, Hibernate and JPA integration with PostgreSQL. I find it to be a 
        very stable and clear system to work with.`,
      icon: <SiSpring />,
    },
  }