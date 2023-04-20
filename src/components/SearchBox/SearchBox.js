import React, {useState, useEffect} from 'react'
import {findSomeArt, getThatArt} from '../../apiCalls'
import './SearchBox.css'

function SearchBox() {
  const [searchResults, setSearchResults] = useState([]);
  const [resultsLength, setResultsLength] = useState(1)
  const [formState, setFormState] = useState('');

  useEffect((event) => {

    console.log(searchResults)
  }, [searchResults])

  const querySearch = (param, event) => {
  event.preventDefault()
  findSomeArt(param).then(data =>{
  console.log(data['objectIDs'])
  setSearchResults(data['objectIDs'])
  });

  return (
  <form>
    <div className='input-box'>
      <label>Search for Artwork:</label>
      <input className='search-box' name='search-box' type='string' placeholder='Search...' value={formState} onChange={event => {
        setFormState(event.target.value);
      }} />
    </div>
    <button onClick={()=> querySearch(formState, event)}>Get Art!</button>
  </form>
  )
}
}

export default SearchBox;