import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Game from './component/game/Game'
import LeftAppContainer from './component/leftcontainer/leftAppContainer'
import Signin from './component/signin/Signin'
import Main from './mainComponent/main'


const App = () => {
  const [currentRemove ,setRemove] = useState('no component remove')
  return (
    <>
       
       <LeftAppContainer />
       <Routes>
        <Route path='/game' element={<Game setRemove ={setRemove}/>}  />
       <Route path='/' element={<Main text={'Live'} currentRemove={currentRemove} />} />
       <Route path='*' element={<div className='signin-page'></div>} />
       <Route path='/signin' element={<Signin />} />
       <Route path='/login' element={<div className='main-App-design'><h1>hello login</h1></div>} />

       
       </Routes>
    </>
  )
}

export default App
