import React from "react"
import { useState, useEffect } from "react";
import "milligram"
import { Nav } from "../components/nav/Nav"
import { Card } from "../components/Card"

export default function Home() {

  const [description, setDescription] = useState('');
  
  const prefix = "I am a ";
  const nouns = ["full stack software developer.", "technology enthusiast.", "problem solver.", "geek.", "Canadian. Nice to meet you :)"];


  function type(noun, i=0) {
    let desc;

    if (i < prefix.length) {
      // type prefix
      desc = prefix.slice(0, i) + prefix[i];
      setDescription(desc);
      setTimeout(() => type(noun, i+1), 50);
    } else if (i < prefix.length + noun.length) {
      // append description
      desc = prefix + noun.slice(0, i-prefix.length) + noun[i-prefix.length];
      setDescription(desc);
      setTimeout(() => type(noun, i+1), 50);
    } else {
      let ni = nouns.indexOf(noun);
      if (ni == nouns.length - 1) {
        return;
      } else {
        // erase noun...
        setTimeout(() => erase(noun), 1000);
      }
    }
  }

  function erase(noun, lettersRemoved=0) {
    let ni = nouns.indexOf(noun);
    if (ni === nouns.length - 1) {
      return;
    } else if (lettersRemoved <= noun.length) {
      // remove text
      setDescription(prefix + noun.slice(0, noun.length-lettersRemoved));
      setTimeout(() => erase(noun, lettersRemoved+1), 60)
    } else {
      // type next phrase
      setTimeout(() => type(nouns[ni+1], prefix.length), 1000);
    }

  }

  useEffect(async () => {

    type(nouns[0]);

    //setTimeout(setRefresh(!refresh), 5000);

  }, []);

  return (
    <div className="container">
      <Nav />
      <Card 
        title={"Hi, I'm Matt"}
        width={"35rem"}
        align="center"
      >
        {description}
      </Card>

    </div>
  )
}
