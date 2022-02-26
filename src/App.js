import './App.css';
import { useState } from 'react';
import QuoteBox from './components/QuoteBox.js';

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
    "#00C9A7", 
    "#D65DB1", 
    "#FF6F91",
    "#FF9671", 
    "#FFC75F",
    "#4D8076",
    "#4E8397",
    "#FF8066",
    "#4B4453",
    "#C34A36",
    "#00C9A7",
    "#008DCD",
    "#936C00",
    "#00D2FC",
    "#008B81"
  ]
  const getColor = () => colors[Math.floor(Math.random() * colors.length)];
  const [alterColor, setAlterColor] = useState(getColor());
  const changeColor = () => {
    setAlterColor(getColor());
  }

  return (
    <div className='app' style={{background: alterColor}}>
      <QuoteBox off={changeColor} color={alterColor}/>
    </div>
  );
}

export default App;