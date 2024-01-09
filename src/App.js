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
  "This website was made without any ChatGPT, crazy right?",
  "Thanks for visiting Rain Shop! Click away",
  "What are you in the mood for?",
  "Happiness is only a click away!"
];


const RainShop = () => {
  const [welcome, setWelcome] = useState('');
  const [raincount, setRainCount] = useState(0);
  const [shopcount, setShopCount] = useState(0);

  const handleWelcome = () => {
    const welcome = GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
    setWelcome(welcome);
  }

  const handleRainCount = () => {
    setRainCount(raincount + 1)
  };

  const handleShopCount = () => {
    setShopCount(shopcount + 1)
  };

  useEffect(() => {
    handleWelcome();
  }, []);

  return (
    <div className='title'>
      Rain Shop
      <div className="body-wrapper">
        <p className='welcome'>{welcome}</p>
        <header className="body">
          <a title="Random Wiki Page" href="https://simple.wikipedia.org/wiki/Special:Random" target="_blank" rel="noreferrer"><button onClick={handleRainCount} className="rain-btn">Rain 🌧️</button></a>
          <a title="Random Amazon Product" href="https://imfeelingprimey.com" target="_blank" rel="noreferrer"><button onClick={handleShopCount} className="shop-btn">Shop 💲</button></a>
        </header>
        <div className='counter-wrapper'>
          <div className='counter'>Rain: {raincount}</div>
          <div className='counter' >Shop: {shopcount}</div>
        </div>
      </div>
    </div>
  );
}

export default RainShop;