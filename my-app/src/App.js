import DemoComponent from "./Component/DemoComponent";
import "./Component/DemoCss.css";
import { useState } from "react";
import iron from './image/iron.jpg';

function App() {
  var [count, setCount] = useState(0);
  const aas = `count value ${count}`;
  const [a, b] = useState(aas);
  const onClickFunctiin = () => {
    if (count % 2 === 0) {
      setCount(count + 1);
      b(`button clicked ${count}`);
    } else {
      setCount(count + 1);
      b(`button clicked ${count}`);
    }
  };
  const as2 = "touch me";
  const [a1, b1] = useState(as2);
  const onWaiting = () => {
    b1("mat chhuo na !");
  };

  const resetCountVar = () => {
    setCount(0);
    b(`reseted to 0`);
  };
  const pointerLeave = () => {
    b1("ab chhu ke dikha");
  };
  
  return (
    <div>
      <button
        onClick={onClickFunctiin}
        onPointerMove={onWaiting}
        onPointerLeave={pointerLeave}
      >
        {a1}
      </button>
      <p>{<DemoComponent />}</p> 
      <button onClick={resetCountVar}>reset the value</button>
      <h1>{a}</h1>
      <a href="https:\\www.google.com" target="_blank">google karna hai</a> 
       
    </div>
  );
}

export default App;
