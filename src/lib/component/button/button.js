import React from 'react'
import './button.css'
const Button = ({color, white,text, buttonIcon ,buttonwidth,buttonhight,buttonradius,textTransform}) => {
  return (
     <button className='header-button-signup' style={{backgroundColor: color, color: white, width:`${buttonwidth}px`,height:`${buttonhight}px`, borderRadius:`${buttonradius}px`,textTransform:textTransform }}><span>{buttonIcon}</span>{text}</button>
  )
}

export default Button