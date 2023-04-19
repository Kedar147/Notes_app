import React from 'react'
import { Note } from './Note'
import AddNote from './AddNote'

function Notelist({notes,addnote,deletenote}) {
  return (
    <div className='notes-list'>
      {notes.map(note=>{
        return <Note key={note.id} id={note.id} text={note.text} date={note.date} deletenote={deletenote}/>
      })}
      <AddNote addnote={addnote}/>
    </div>
  )
}

export default Notelist