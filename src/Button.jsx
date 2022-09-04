// on recupere les props  ( click , label et color ) du composant parent App

import React from 'react'

 const Button = ({handleClick , label, color}) => {
  return (
    <div>
      <button
      type = "button" 
      onClick = {handleClick}
      style={{ background: color || 'grey' }}
      >
        {label}
      </button>      
    </div>
  )
}

export default Button
