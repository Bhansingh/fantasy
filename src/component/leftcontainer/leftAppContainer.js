import React from 'react'
import Button from '../../lib/component/button/button'
import './leftAppContainer.css'
import Icon from '../../IconComponent/Icon';
import { FaGamepad } from 'react-icons/fa';
import { MdSportsSoccer } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiFillCustomerService } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { BsFillChatFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const LeftAppContainer = () => {
  return (
   <>
   <div className='left-App-Container'>
      <div className='left-App-header'>
        <h2>Cric</h2>
       <Link to='/signin' > <Button  text={'Sign UP'} color={'yellow'}/></Link>
        <Link to='/login'><Button text={'Login'} color={'black'} white={'white'}/></Link>
      </div>
           <Link to='/game'><Icon Text={'Game'} icon={< FaGamepad style={{color: 'white',fontSize:'2em'}}/>}/></Link>
           <Icon Text={'Sport'} icon={< MdSportsSoccer style={{fontSize:'2em',color: 'white'}}/>}/>
           <Link to='/'><Icon Text={'Home'} icon={< AiFillHome style={{fontSize:'2em',color: 'white'}}/>}/></Link>
           <Icon Text={'Profile'} icon={< CgProfile style={{fontSize:'2em',color: 'white'}}/>}/>
           <Icon Text={'Customer Care'} icon={< AiFillCustomerService style={{fontSize:'2em',color: 'white'}}/>}/>
           <Icon Text={'About'} icon={< SiAboutdotme style={{fontSize:'2em',color: 'white'}}/>}/>
           <Icon Text={'Chat'} icon={< BsFillChatFill style={{fontSize:'2em',color: 'white'}}/>}/>
     </div>
   </>
  )
}

export default LeftAppContainer