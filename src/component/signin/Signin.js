import React from 'react'
import './signin.css'
import { BsFacebook } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { AiFillGoogleCircle } from 'react-icons/ai';
import Button from '../../lib/component/button/button';
import ButtonIcon from '../../mainComponent/lib/buttoncomponent/buttonIcon';
const Signin = () => {
  return (
     <div className='signin-page'>
       <div className='signin-page-design'>
        <div className='sign-page-right-design'>
          
        </div>
        <div className='signin-page-left-design'>
         <header className='sign-header'>
          <h2>Cric</h2>
         </header>
         <section className='sign-section'>
          <h1>Sign in to Acount</h1>
          <div className='button-sign'>
            <Button buttonwidth={30} buttonhight={30} buttonradius={50} buttonIcon={<ButtonIcon   icon={< BsFacebook style={{color: 'black',fontSize:'1em'}}/>}/>}/>
            <Button buttonwidth={30} buttonhight={30} buttonradius={50} buttonIcon={<ButtonIcon   icon={< SiGmail style={{color: 'black',fontSize:'1em'}}/>}/>}/> 
            <Button buttonwidth={30} buttonhight={30} buttonradius={50} buttonIcon={<ButtonIcon   icon={< AiFillGoogleCircle style={{color: 'black',fontSize:'1em'}}/>}/>}/>
            </div>
            <p style={{color:'black', fontSize:'20px'}}>or use your email acount</p>
            <div className='input-design'>
             <input  type={'text'} placeholder={'Email'} >
              
             </input>
             <input type={'password'} placeholder={'password'}>

             </input>
             <input type={'checkbox'} >
             
             </input>
             </div>
             <Button text={'Sign in'} textTransform={'lowercase'}  />
 
          </section>
          <footer className='sign-footer'>
              Privacy . Terms & Condtion
          </footer>
         </div>
       </div>
     </div>
  )
}

export default Signin