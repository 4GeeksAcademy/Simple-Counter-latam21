//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let count = 0 

setInterval ( () => {
    let one = Math.floor(count/1)
    let two = Math.floor(count/10)
    let three = Math.floor(count/100)
    let four = Math.floor(count/1000)
    count++
    ReactDOM.render(<Home one={one} two={two} three={three} four={four} />, document.querySelector("#app"));
},1000) 

//render your react application



