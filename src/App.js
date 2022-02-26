import './App.css';
import { useState } from 'react';
import quotes from './quotes.json';
import Card from './components/Card.js';

function App() {
  
  const colors = 
  [
    "#845EC2", 
    "#2C73D2", 
    "#0081CF", 
    "#0089BA", 
    "#008E9B", 
    "#008F7A", 
    "#B39CD0", 
    "#FBEAFF", 
    "#00C9A7", 
    "#D65DB1", 
    "#FF6F91",
    "#FF9671", 
    "#FFC75F",
    "#F9F871"
  ]
  const getColor = () => colors[Math.floor(Math.random() * colors.length)];
  const [alterColor, setAlterColor] = useState(getColor());
  const changeColor = () => {
    setAlterColor(getColor());
  }

  console.log(quotes);

  return (
    <div className='app' style={{background: alterColor}}>
      <Card/>
    </div>
  );
}

export default App;
