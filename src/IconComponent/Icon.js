import React from 'react'
import './Icon.css'

const Icon = ({Text,icon}) => {
  return (
    <div className='app-icon-container'>
          <ul className='icon-container-item'>
            <li title='align-item'><span className='icon'>{icon}</span><span className='icon-text'> {Text}</span></li>
           
          </ul>

    </div>
  )
}

export default Icon