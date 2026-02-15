import { useState, useEffect } from 'react'
import stardropSound from "./assets/stardrop.wav"
import clickSound from "./assets/mouseClick.wav"
import ryanP from "./assets/ryan.jpg"
import ericP from "./assets/eric.jpg"
import music from "./assets/musicGrandpa.mp3"
import stardropGif from "./assets/stardrop.gif"
import './App.css'

function Button({aura, handleClick}) {
  const [click] = useState(() => new Audio (clickSound));
  function clickFunction(){
    click.currentTime = 0;
    click.play();
    handleClick();
  }
  return (
    <button onClick = {clickFunction}> so u got {aura} aura </button>
  );
}

function TonsAura(properties){
  const [sound, setSound] = useState(0);
  useEffect(() => {
    if (properties.threshold < properties.current && sound == 0){
      const drop = new Audio(stardropSound);
      console.log("Drop Audio Generated");
      drop.volume = 0.8;
      drop.play();
      setSound(1);
    }
  }, [properties.current, properties.threshold, sound])

  if (properties.threshold < properties.current){
    return (
      <div>
        <p> good job guys they have so much aura</p>
        <img src = {stardropGif} height = {100} width = {100} />
      </div>
    );
  }else{
    return null;
  }
}

function App() {
  const [eric, setEric] = useState(67);
  const [ryan, setRyan] = useState(15);

  const total = eric + ryan;

  const [played, setPlayed] = useState(0);
  const [bg] = useState(() => new Audio(music));

  function handleClickGoon(name){
    if(played === 0){
      bg.loop = true;
      bg.volume = 0.3;
      bg.play();
      setPlayed(1);
    }
    if(name === 'eric'){
      setEric(eric + ryan);
    }else if (name === 'ryan'){
      setRyan(eric + ryan);
    }
  }
  return (
    <div>
      <h1> Aura Website</h1>
      <p> This is my first time using React!</p>
      <p> Why is it useful?</p>
      <p> I mean you can do dumb stuff like this...</p>
      <p> In under 100 lines of code... </p>
      <div className = "flex">
        <div>
          <p> This can be goon one</p>
          <img src = {ericP} height = {100} width = {100} alt = "why cant u read original" />
          <br />
          <Button aura = {eric}
            handleClick = {() => handleClickGoon('eric')} />
        </div>
        <div>
          <p> This can be goon two</p>
          <img src = {ryanP} height = {100} width = {100} alt = "u aint missin out its just ryan chang" />
          <br />
          <Button aura = {ryan}
            handleClick = {() => handleClickGoon('ryan')} />
        </div>
      </div>
      <p> The goons have {total} combined aura</p>
      <TonsAura threshold = {100000} current = {total} />
    </div> 
  );
}

export default App
