// Package imports
import React from "react";
import { useState, useEffect } from "react";
import "milligram";
import { Helmet } from "react-helmet";

// Project imports
import { Nav } from "../components/nav/Nav";
import { Header } from "../components/Header";
import { Skills } from "../components/skills/Skills";
import { Projects } from "../components/projects/Projects";
import { Section } from "../components/section/Section";

export default function Home() {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const titles = {
    "default": "Hi, I'm Matt",
    "12-25": "☃️ Merry Christmas 🎁",
    "1-1": "🎆 Happy New Year ✨"
  }

  const prefix = "I am a ";
  const phrases = [
    "software developer. Nice to Meet you 🤝", 
    "technology enthusiast.", 
    "problem solver.", 
    "geek.", 
    "Canadian. Nice to meet you 🍁!", 
    "programmer.",
    "software engineer.",
  ];

  
  /**
   * Type the phrase provided. If the prefix is missing, it will type that first
   * @param {*} phrase 
   * @param {*} i 
   */
  function type(phrase, i=0) {
    let desc;

    if (i < prefix.length) {
      // type prefix
      desc = prefix.slice(0, i) + prefix[i];
      setDescription(desc);
      setTimeout(() => type(phrase, i+1), 50);
    } else if (i < prefix.length + phrase.length) {
      // type noun
      desc = prefix + phrase.slice(0, i-prefix.length) + phrase[i-prefix.length];
      setDescription(desc);
      setTimeout(() => type(phrase, i+1), 50);
    } else {
        // erase noun...
        setTimeout(() => erase(phrase), 2000);
    }
  }

  function erase(phrase, lettersRemoved=0) {
    let pi = phrases.indexOf(phrase);
    if (lettersRemoved <= phrase.length) {
      // remove text
      setDescription(prefix + phrase.slice(0, phrase.length-lettersRemoved));
      setTimeout(() => erase(phrase, lettersRemoved+1), 40)
    } else {
      // type next phrase
      setTimeout(() => type(phrases[(pi+1)%phrases.length], prefix.length), 1000);
    }
  }

  useEffect(() => {
    window.scrollTo(0,0);
    type(phrases[0]);
    loadData();
  }, []);

  const loadData = () => {
    const d = new Date();

    let humanMonth = d.getMonth() + 1;   // 0 - 11
    let day = d.getDate();      // 1 - 31

    const monthDay = "1-1";//humanMonth+"-"+day;
    setTitle(monthDay in titles ? titles[monthDay] : titles["default"]);
  }

  return (
    <div className="container">
      <Helmet>
        <title>Matt Shubat</title>
      </Helmet>
      <Nav />
      <Header 
        title={title}
      >
        {description}
      </Header>

      <Section 
        title="Skills"
        desc="These are some of the technologies that I have experience working with."
        titleAlign="center"
        descAlign="center"
      >
        <Skills />
      </Section>

      <Section 
        title="Projects"
        desc="Some projects I have worked on, and am working on."
        titleAlign="center"
        descAlign="center"
      >
        <Projects />
      </Section>
    </div>
  )
}
