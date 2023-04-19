import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
export const Note = ({id,text,date,deletenote}) => {
  return (
    <div className='notes'>
        <span>{text}</span>
        <div className='notes-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={()=>deletenote(id)} className='delete-icon'  size='1.3em'/>
        </div>
    </div>
  )
}
