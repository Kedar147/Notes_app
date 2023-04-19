import React from 'react'

 const Header = ({setDarkmode}) => {
  return (
    <div className='header'>

    <h1>Notes</h1>
    <button onClick={()=>setDarkmode((prevDarkmode)=>!prevDarkmode)} className='save'>Toogle Mode</button>        
    </div>
  )
}
export default Header
