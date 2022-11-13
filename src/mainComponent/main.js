import React from 'react'
import Card from '../cardComonent/card'
import Button from '../lib/component/button/button'
import { AiOutlineSearch } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { DiAptana } from 'react-icons/di';
import { BsWhatsapp } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import './main.css'
import ButtonIcon from './lib/buttoncomponent/buttonIcon';
const Main = ({selectBackcolor,optionTextcolor,text,currentRemove}) => {

  return (
    <>
      <div className='main-App-design'>
         <header className='main-app-header'>
            <Button buttonwidth={60} buttonhight={60} buttonradius={50} buttonIcon={<ButtonIcon   icon={< AiOutlineSearch style={{color: 'black',fontSize:'2em'}}/>}/>}/>
            <Button buttonwidth={60} buttonhight={60} buttonradius={50} buttonIcon={<ButtonIcon   icon={< RiComputerLine style={{color: 'black',fontSize:'2em'}}/>}/>}/> 
            <Button buttonwidth={60} buttonhight={60} buttonradius={50} buttonIcon={<ButtonIcon   icon={< DiAptana style={{color: 'black',fontSize:'2em'}}/>}/>}/>
            <Button buttonwidth={60} buttonhight={60} buttonradius={50} buttonIcon={<ButtonIcon   icon={< BsWhatsapp style={{color: 'black',fontSize:'2em'}}/>}/>}/>
            <Button buttonwidth={60} buttonhight={60} buttonradius={50} buttonIcon={<ButtonIcon   icon={< FiInstagram style={{color: 'black',fontSize:'2em'}}/>}/>}/>
            <Button buttonwidth={60} buttonhight={60} buttonradius={50} buttonIcon={<ButtonIcon   icon={< AiOutlineTwitter style={{color: 'black',fontSize:'2em'}}/>}/>}/>
           
         </header>
         <section className='main-app-section'>
             <Button text={'Overview'} color={'yellow'} textTransform={'lowercase'}/>
             <Button text={'starting soon'} textTransform={'lowercase'}/>
             <Button text={'odds'} textTransform={'lowercase'}/>
             <Button text={'final'} textTransform={'lowercase'}/>
             <Button text={'score'} textTransform={'lowercase'}/>
             <Button text={'complited'} textTransform={'lowercase'}/>
             <div className='section-app'>
               <select style={{backgroundColor:selectBackcolor}}>
                <option style={{color:optionTextcolor}}>{text}</option>
               </select>
             </div>
              <div className='app-card'>
             <Card sectionbuttontext={'Live Score'} buttontext={20} headertext={'Cricket'} teamname={'CSK vs KKR'} color={'white'} livescore={`CSK 145-3 (16) vs KKR 0-0 (0)`}/>
             <Card sectionbuttontext={'Score'} headertext={'Football'} buttontext={12} teamname={'FC vs BB'} livescore={'FC (0) vs BB (1)'}/>
             <Card sectionbuttontext={'Live Score'} buttontext={1} headertext={'Cricket'} teamname={'ENG vs AUS'} color={'white'} livescore={`ENG 175-2 (26.2) vs AUS 0-0 (0)`}/>
             <Card sectionbuttontext={'Live Score'} buttontext={6} headertext={'Kabadi'} teamname={'PP vs MB'} color={'white'} livescore={`PP (7-5) vs MB (7-2)`}/>
             <Card sectionbuttontext={'Score'} headertext={'Football'} buttontext={3} teamname={'JR vs FR'} livescore={'JR (3) vs FR (2)'}/>
             <Card sectionbuttontext={'Score'} headertext={'Football'} buttontext={4} teamname={'ARJT vs USA'} livescore={'ARJT (6) vs USA (4)'}/>
             
              </div>
         </section>
         <footer className='main-app-footer'>
         <div className='footer-app'>
               <select style={{backgroundColor:selectBackcolor}}>
                <option style={{color:optionTextcolor}}>{'Upcoming'}</option>
               </select>
             </div>
         </footer>
         
      </div>
      
    </>
  )
}

export default Main


