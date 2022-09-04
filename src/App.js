
import React, {useState} from 'react';
import './App.css';
import Button  from './Button';

function App() {
  const [ count , setCount ] = useState (10)                 // valeur de count : 10
  const [ resetValue , setResetValue ] = useState (false)    // valeur de resetValue : false ( pas d'affichage du texte de reinitialisation)
  
  const click = (mode) => {
    if ( mode === "INCREMENT") {
      setCount( count + 1)                     // on passe la valeur de count a +1
      setResetValue (false)                    // et la valeur de resetValue a false ( plus d'affichage du texte de reinitialisation)
      return
    }
    if ( mode === "DECREMENT") {
      setCount( count - 1)                     // on passe la valeur de count a -1
      setResetValue (false)                    // et la valeur de resetValue a false ( plus d'affichage du texte de reinitialisation)
      return
    }
    setCount( 0 )                              // on passe la valeur de count a 0 lors du reset
    setResetValue (true)                       // et la valeur de resetValue a true ( Affichage du texte de reinitialisation)
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
        <Button
          label="Bouton reset"
          color="blue"  
          handleClick = {() => click ("RESET")}
        />
        <p className = "text1"> {resetValue === true ? <p>Compteur réinitialisé</p> : null} </p>    {/*  affichage du message de reinitialisation si resetValue a true  */}  
      </div>               
  )
}

export default App




