import { useState } from "react";
import ChildComHandler from '../App'

const ChildFormComponent=(props)=>{

    const submitHandler=(event)=>{
        event.preventDefault();
        props.onChildSave({location:getLocation,country:getCountry,pincode:getPincode})
        console.log({location:getLocation,country:getCountry,pincode:getPincode})
        setCountry("");
        setLocation("");
        setPincode("");
    }
    const location="";
    const pincode="";
    const country="";
    const [getLocation,setLocation]=useState(location);
    const[getPincode,setPincode]=useState(pincode);
    const[getCountry,setCountry]=useState(country);
    const locationHandler=(event)=>{
        setLocation(event.target.value);
    }
    const pincodeHandler=(event)=>{
        setPincode(event.target.value);
    }
    const countryHandler=(event)=>{
        setCountry(event.target.value);
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>child form</label>
                <input type='text' onChange={locationHandler} value={getLocation}/>
                <input type='number' onChange={pincodeHandler} value={getPincode}/>
                <input type='text' onChange={countryHandler} value={getCountry}/>
                <button type="submit">save</button>
            </form>
            <h2  style={{color: 'lightYellow'}}>{getCountry}</h2>
            <h2>{getLocation}</h2>
            <h2>{getPincode}</h2>
        </div>
    );
};
export default ChildFormComponent;