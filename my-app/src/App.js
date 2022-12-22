// import DemoComponent from "./Component/DemoComponent";
// import "./Component/DemoCss.css";
// import { useState,useEffect } from "react";
// import iron from './image/iron.jpg';
// import { Switch, Route, Redirect } from 'react-router';
// import { HashRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

// function App() {
//   var [count, setCount] = useState(0);
//   const aas = `count value ${count}`;
//   const [a, b] = useState(aas);
//   const onClickFunctiin = () => {
//     if (count % 2 === 0) {
//       setCount(count + 1);
//       b(`button clicked ${count}`);
//     } else {
//       setCount(count + 1);
//       b(`button clicked ${count}`);
//     }
//   };
//   const as2 = "touch me";
//   const [a1, b1] = useState(as2);
//   const onWaiting = () => {
//     b1("mat chhuo na !");
//   };

//   const resetCountVar = () => {
//     setCount(0);
//     b(`reseted to 0`);
//   };
//   const pointerLeave = () => {
//     b1("ab chhu ke dikha");
//   };
//   const getFetchUsers=()=> {
//     this.setState({
//         loading: true
//     }, () => {
//         fetch("http://localhost:3000/posts").then(res => res.json()).then(result => this.setState({
//             loading: false,
//             users: result
//         })).catch(console.log);
//     });
// }

//   return (
//     <div>
//       <button
//         onClick={onClickFunctiin}
//         onPointerMove={onWaiting}
//         onPointerLeave={pointerLeave}
//       >
//         {a1}
//       </button>
//       <p>{<DemoComponent />}</p>
//       <button onClick={resetCountVar}>reset the value</button>
//       <h1>{a}</h1>
//       <a href="https:\\www.google.com" target="_blank">google karna hai</a>
//       {/* <ToastContainer
//                 autoClose={5000}
//                 hideProgressBar
//                 closeButton={<CloseButton/>}
//             />
//             <HashRouter>
//                 <Switch>
//                     <Route path="/" exact render={() => <Redirect to="/app/main"/>}/>
//                     <Route path="/a" exact component={DemoComponent}/>

//                 </Switch>
//             </HashRouter> */}

//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
class App extends React.Component {
  state = {
    isLoading: true,
    supplements: [],
    error: null,
  };
  getFetchUsers() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch("https://phoenix.bevaleo.dev/supplement/v2/country/1")
          .then((res) => res.json())
          .then((result) =>
            this.setState({
              loading: false,
              supplements: result,
            })
          )
          .catch(console.log);
      }
    );
  }
  componentDidMount() {
    this.getFetchUsers();
  }
  render() {
    const { supplements, error } = this.state;
    return (
      <React.Fragment>
        <h1>Supplements</h1>
        {error ? <p>{error.message} </p> : null}{" "}
        {supplements.map((supplement) => {
          const { status, id, internalName ,image} = supplement;
          return (
            <div key={id}>
              <p>Id: {id}</p>
              <p>Status: {status}</p>
              <p>Name: {internalName}</p>
              <img src={image} alt="image" width="100" height="100"></img>
              <hr />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default App;
