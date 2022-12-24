import { useState } from "react";
import './DemoCss.css'

function DemoComponent(props) {
  const list = [{name:"anand",location:"yhh",salary:"8545",date:new Date(),country:"india",pincode:"84545"}];
  const [getList, setList] = useState(list);
  const saveDataHandler=()=>{
  setList((prevState) => {
    const a=[{name:props.name,location:props.location,salary:props.salary,country:props.country,pincode:props.pincode,date:props.date}];
    return [...prevState, ...a ];
  });
 
  console.log(getList);};
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.salary}</h2>
      <h2>{props.date}</h2>
      <h2>{props.location}</h2>
      <h2>{props.country}</h2>
      <h2>{props.pincode}</h2>
      <button onClick={saveDataHandler}>click me</button>
      <h2>want to submit then click save button</h2>
      <div><h1 className="finalList"><ul>{getList.map(x=>{return(<li>{x.name+' '+x.location+" "+x.salary+" "+x.country+" "+x.pincode+" "+x.date}</li>)})}</ul></h1></div>
    </div>
  );
}
export default DemoComponent;
