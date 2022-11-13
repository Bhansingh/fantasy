import React from 'react'
import Button from '../lib/component/button/button'
import './card.css'
const Card = ({teamname,color,livescore,headertext,buttontext,sectionbuttontext,}) => {
  return (
      <>
        <div>
          <div className='card-design' >
            <header className='card-header'>
              <h4>{headertext}</h4>
              <Button text={buttontext} buttonwidth={25} color={'gray'}/>
            </header>
            <section className='card-section'>
              <Button text={sectionbuttontext} textTransform={'lowercase'} color={'rgb(6, 247, 6)'}/>
              <h5 style={{color:color,}}>{teamname}</h5>
              <p>{livescore}</p>
            </section>
            
          </div>
        </div>
      </>
  )
}

export default Card