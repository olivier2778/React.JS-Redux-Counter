


import React, {useState} from 'react';
import './App.css';
import Button  from './Button';

function App() {
  const [ count , setCount ] = useState (10)      // valeur de count : 10
    
  const click = (mode) => {
    if ( mode === "INCREMENT") {
      setCount( count + 1)                     // on passe la valeur de count a +1
      return
    }
      setCount( count - 1)                     // on passe la valeur de count a -1
  }

   return (    
      <div>                                    {/*  on passe les props ( click , label et color ) aux composant enfant Button  */}   
        <Button                                            
          label="Bouton +"
          color="lightgreen"
          handleClick = {() => click ("INCREMENT")}
        />
        <p className="text1"> Compteur : {count} </p>          
        <Button
          label="Bouton -"
          color="red"  
          handleClick = {() => click ("DECREMENT")}
        />
      </div>               
  )
}

export default App




