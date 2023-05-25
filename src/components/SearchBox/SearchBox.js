import React, {useState, useEffect} from 'react'
import { findSomeArt } from '../../apiCalls'
import './SearchBox.css'

function SearchBox({setSearchResults}) {
  const [formValue, setFormValue] = useState('')

  const clearSearch = (event) => {
    setFormValue('')
  }

  const formSearch = (parameters, event) => {
    event.preventDefault();
    findSomeArt(parameters).then(data=> {
      console.log(data)
      setSearchResults(data['objectIDs'])
      clearSearch();
    });
  }

  return (
    <footer>
      <form >
      <div className='input-box'>
        <input type='text' 
          className='search-box' 
          name='search-box'
          placeholder='Search the Met...' 
          value={formValue} 
          onChange={event => setFormValue(event.target.value)}>
        </input>
      </div>
    <button 
    onClick={(event) => formSearch(formValue, event)}>Get Art!</button>
    </form>
  </footer>
  )
}

export default SearchBox;