import DemoComponent from "./Component/DemoComponent";
import "./Component/DemoCss.css";
import { useState } from "react";
import iron from './image/iron.jpg';
import ChildFormComponent from "./Component/ChildFormComponent";

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


  const name='';
  const salary=0;
  const date='';
  const[getname,setName]=useState(name);
  const[getSalary,setSalary]=useState(salary);
  const [getDate,setDate]=useState(date);
  const data={name:getname,salary:getSalary,date:getDate};
  const nameHandler=(event)=>{
    setName(event.target.value);
    setSalary(event.target.value)
    console.log(getname);
  };
  const dateHandler=(event)=>{
    setDate(event.target.value);
    console.log(getDate);
  };
  const salaryHandler=(event)=>{
    setSalary(event.target.value)
    console.log(getSalary);
  };

  const submitHamdler=(event)=>{
    event.preventDefault();
    console.log(data);
  };
  var location="";
  var country="";
  var pincode="";
  const [getLocation,setLocation]=useState(location);
  const [getCountry,setCountry]=useState(country);
  const [getPincode,setPincode]=useState(pincode);
  const ChildComHandler=(pars)=>{
    setLocation(pars.location);
    setCountry(pars.country);
    setPincode(pars.pincode);

  }

  const clearHandler=()=>{
    setName("")
    setDate("");
    setSalary("");
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
      
      <button onClick={resetCountVar}>reset the value</button>
      <h1>{a}</h1>
      <a href="https:\\www.google.com" target="_blank">google karna hai</a> 
      <form onSubmit={submitHamdler}>
        <label>Main form</label>
        <input type='text'  onChange={nameHandler} value={getname}/>
        <input type='number' onChange={salaryHandler} value={getSalary}/>
        <input type='date' onChange={dateHandler} value={getDate}/>
        <button type="submit">save</button>
        </form>
        <div>{<ChildFormComponent onChildSave={ChildComHandler}/>}</div> 
        <p >{<DemoComponent name={getname} salary={getSalary} date={getDate} location={getLocation} country={getCountry}/>}</p> 
        <button onClick={clearHandler}>Clear All</button>
        
    </div>
  );
}

export default App;
