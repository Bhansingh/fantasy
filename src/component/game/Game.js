import React, { useEffect, useState } from 'react'

 
const Game = ({setRemove}) => {
const [age , setAge] = useState(12)
  const [name ,setName] = useState('shanu')
 //component didmount
  useEffect(() => {
    setTimeout(() => {
      setName('richa')
    },4000)
  },[])

  //componentDidUpdate

React.useEffect(() => {
if(name==='richa'){
  setAge(26)
}
},[name])

//component did unmount 

React.useEffect(() => {

  return () => setRemove('game component remove')
},[])
  return (
     <div className='main-App-design'><h1>{name}{age}</h1></div>
  )
}

export default Game