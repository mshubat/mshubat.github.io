import React from "react"
import { useState, useEffect } from "react";
import "milligram"
import { Nav } from "../components/nav/Nav"
import { Card } from "../components/Card"

export default function Home() {

  const [description, setDescription] = useState('');
  
  const prefix = "I am ";
  const phrase = [
    "a full stack software developer.", 
    "a technology enthusiast.", 
    "a problem solver.", 
    "a geek.", 
    "a Canadian. Nice to meet you 🍁", 
    "a programmer",
  ];

  

  function type(noun, i=0) {
    let desc;

    if (i < prefix.length) {
      // type prefix
      desc = prefix.slice(0, i) + prefix[i];
      setDescription(desc);
      setTimeout(() => type(noun, i+1), 50);
    } else if (i < prefix.length + noun.length) {
      // type noun
      desc = prefix + noun.slice(0, i-prefix.length) + noun[i-prefix.length];
      setDescription(desc);
      setTimeout(() => type(noun, i+1), 50);
    } else {
        // erase noun...
        setTimeout(() => erase(noun), 1000);
    }
  }

  function erase(noun, lettersRemoved=0) {
    let pi = phrase.indexOf(noun);
    if (lettersRemoved <= noun.length) {
      // remove text
      setDescription(prefix + noun.slice(0, noun.length-lettersRemoved));
      setTimeout(() => erase(noun, lettersRemoved+1), 40)
    } else {
      // type next phrase
      setTimeout(() => type(phrase[(pi+1)%phrase.length], prefix.length), 1000);
    }

  }

  useEffect(() => type(phrase[0]), []);

  return (
    <div className="container">
      <Nav />
      <Card 
        title={"Hi, I'm Matt"}
        align="center"
      >
        {description}
      </Card>

      <div style={{margin: "0 auto 0 2rem", width: "70%", height: "30%"}}>
        <h3>Experience</h3>
        <h4>Technologies I have experience with</h4>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>          
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>          
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>    
      </div>

      <div style={{margin: "0 2rem 0 auto", width: "70%", textAlign: "right"}}>
        <h3>Projects</h3>
        <h4>Thesis project and personal side projects</h4>
        <ul>
          <li>React</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>    
      </div>

    </div>
  )
}
