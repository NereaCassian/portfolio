import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import styles from '../styles/HomePage.module.css';

const PurpleGuy = () => {
  const defaultStrings = ['DevOps Engineer', 'Tech Enthusiast', 'Gamer', 'Developer'];
  const song = `I don't know what I was thinking
  Leaving my child behind
  Now I suffer the curse and now I am blind
  With all this anger, guilt and sadness
  Coming to haunt me forever
  I can't wait for the cliff at the end of the river
  Is this revenge I am seeking?
  Or seeking someone to avenge me?
  Stuck in my own paradox, I wanna set myself free
  Maybe I should chase and find
  Before they'll try to stop it
  It won't be long before I'll become a puppet
  It's been so long
  Since I last have seen my son lost to this monster
  To the man behind the slaughter
  Since you've been gone
  I've been singing this stupid song so I could ponder
  The sanity of your mother
  I wish I lived in the present
  With the gift of my past mistakes
  But the future keeps luring in like a pack of snakes
  Your sweet little eyes, your little smile is all I remember
  Those fuzzy memories mess with my temper
  Justification is killing me
  But killing isn't justified
  What happened to my son? I'm terrified
  It lingers in my mind
  And the thought keeps on getting bigger
  I'm sorry my sweet baby, I wish I've been there
  It's been so long
  Since I last have seen my son lost to this monster
  To the man behind the slaughter
  Since you've been gone
  I've been singing this stupid song so I could ponder
  The sanity of your mother`;
  const songStrings = song.split('\n');

  const [strings, setStrings] = useState(defaultStrings);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    console.log(randomNumber);
    if (randomNumber <= 19.87) {
      setStrings(songStrings);
    }
  }, []);

  return (
    <Typewriter 
      options={
        {
          strings: strings,
          autoStart: true,
          loop: true,
          wrapperClassName: styles.bio,
          cursorClassName: styles.cursor,
        }
      }
    /> 
  );
}

export default PurpleGuy;