import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [bgColor, setBgColor] = useState('#eee');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data.content))
      .then(data => setAuthor(data.author))
  }, [])

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
        setBgColor(getRandomColor());
      });
  }

  const getRandomColor = () => {
    const colors = ['#008CBA', '#5cb85c', '#d9534f', '#f0ad4e'];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
  

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div className='header'>
     <h1 style={{backgroundColor: bgColor}} id="head">Random Quote Machine</h1>
    </div>

      <div className="quote-container">
      <div className='quotes'>
        <p className="quote">{quote}</p>
        <p className='author'>{author}</p>
        <button className="new-quote-button" onClick={getNewQuote}>New Quote</button>
        
      
        </div>
      </div>
      <div className='footer'>
      <h1 style={{backgroundColor: bgColor }} id="head">Designed by ---  PRABHU /</h1>
      </div>
    </div>
  );
}
export default App;