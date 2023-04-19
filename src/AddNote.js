import React, { useState } from 'react'


const AddNote = ({addnote}) => {
    const [noteText,setNoteText]=useState('')
    const characterCount=200
    const handlechange=(event)=>{
        if(characterCount-event.target.value.length>=0){
        setNoteText(event.target.value)
        }
    }
    const handleClick=()=>{
        if (noteText.trim().length > 0){
        addnote(noteText);
        setNoteText('');
        }

    }

  return (
    <div  className='notes new'>
        <textarea onChange={handlechange} value={noteText} cols="10" rows="8" placeholder='Type to add note'></textarea>
        <div className='notes-footer'>
            <small>{characterCount-noteText.length} remaiinig</small>
            <button onClick={handleClick} className='save'>save</button>
        </div>

    </div>
  )
}

export default AddNote