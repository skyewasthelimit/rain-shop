import './App.css';
import React, { useState, useEffect } from 'react';

const GREETINGS = [
  "Hello! Hope your day is awesome!",
  "Greetings, Welcome to Rain Shop",
  "What's up? Knowledge or cool stuff?",
  "Hey! Thanks for checking out Rain Shop",
  "You rock! Thanks for using Rain Shop",
  "Good day! Have fun :)",
  "Oh hi there!",
  "Feeling lucky today?",
  "It's not gambling if you win every time!",
  "We love that you love clicking buttons!",
  "This website was made without any ChatGPT, crazy right??",
  "Thanks for visiting Rain Shop! Click away"
];

const RainShop = () => {
  const [welcome, setWelcome] = useState('');

  const handleWelcome = () => {
    const welcome = GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
    setWelcome(welcome);
  }

  useEffect(() => { 
    handleWelcome();
}, []);

  return (
    <div className='title'>
      Rain Shop 
      <div className="body-wrapper">
        <p className='welcome'>{welcome}</p>
        <header className="body">
         <a class="info" title="Random Wiki Article">ℹ️</a><a href="https://simple.wikipedia.org/wiki/Special:Random" target="_blank" rel="noreferrer"><button className="rain-btn">Rain 🌧️</button></a>
          <a href="https://imfeelingprimey.com" target="_blank" rel="noreferrer"><button className="shop-btn">Shop 💲</button></a><a class="info" title="Random Amazon Product">ℹ️</a>
        </header>
      </div>
    </div>
  );
}

export default RainShop;