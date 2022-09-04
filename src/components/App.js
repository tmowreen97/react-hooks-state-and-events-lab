import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  const [mode, setMode] = useState(false)
  console.log('mode', mode, 'setMode', setMode)

  const appClass = mode ? "App dark" : "App light"

  function changeMode(){
    setMode(!mode)
  }


// If the appClass is "App dark", then the button should say Light Mode. 
// If the appClass is "App Light" then the button should say Dark Mode. 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>{mode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
