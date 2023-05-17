import React, {useState, useEffect} from 'react'
import './SearchBox.css'

function SearchBox({querySearch}) {
  const [formValue, setFormValue] = useState('')

  const handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    }

  const clearSearch = (event) => {
    event.preventDefault();
    setFormValue('')
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
    <button onClick={(event)=> querySearch(formValue, event)}>Get Art!</button>
    </form>
  </footer>
  )
}

export default SearchBox;