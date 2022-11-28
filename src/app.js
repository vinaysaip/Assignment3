import React from "react";
import ReactDOM from "react-dom/client";

title = "Namaste React!";
const HeaderComponent = ()=>{
    return(
        <div className="header">
        <img className="title" src="https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/c4377b05799f40987f16cacd43da014d.png"></img>
        <input className="search-bar" placeholder="Type here to Search"></input>
        <p className="login-text">
       
        <img className="user-icon" src="https://cdn-icons-png.flaticon.com/512/666/666201.png"/>
        Welcome, Vinay!</p>
        </div>
    )
}
const BodyComponent = () => {
  return (
    <div>
      <h1>Namaste React!!</h1>
      <h2>Zero to Hero</h2>
      <h3>in 3 months</h3>
    </div>
  );
};

const AppLayout=()=>
(
    <>
        <HeaderComponent/>
        <BodyComponent/>
    </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
