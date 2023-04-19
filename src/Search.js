import React from 'react'
import { MdSearch } from 'react-icons/md'

 const Search = ({setSearchNotes}) => {
  return (
    <div className='search'>

        <MdSearch className='search-icon' size='1.3em' />
        <input onChange={(event)=>setSearchNotes(event.target.value)} type="text" placeholder='type to searche..' />

        
    </div>
  )
}
export default Search