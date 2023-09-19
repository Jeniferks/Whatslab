import React from "react"
import './App.css';
import SideBar from "./SideBar";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <h1>Hello World!</h1>

      <div className="app__body">
        <SideBar/>
        {/* {Chat} */}
      </div>
    </div>
  );
}

export default App;
