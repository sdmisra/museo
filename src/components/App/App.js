import React, {useState, useEffect}from 'react'
import {findSomeArt, getThatArt} from '../../apiCalls'
import Tile from '../Tile/Tile';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [formValue, setFormValue] = useState('')
  const [miniGalleryTiles, setMiniTiles] = useState([])

  useEffect(() => {
    let dataToTile = [];
    if (searchResults.length > 0) {
      for (let i=0; i < 8; i++) {
        getThatArt(searchResults[i]).then(data => {
        dataToTile.push(< Tile props={data}/>)
        console.log(`Data:`, dataToTile)
        })
      }
    setMiniTiles([...miniGalleryTiles, dataToTile])
    }
  }, [searchResults])

  const querySearch = (parameters, event) => {
    event.preventDefault();
    findSomeArt(parameters).then(data=> {
      console.log(data)
      setSearchResults(data['objectIDs'])
    });
    clearSearch(event)
  }

  const clearSearch = (event) => {
    event.preventDefault();
    setFormValue('')
  }

  return (
    <main className="App">
      <div className="main-container">
        <section className="search-results">
          {miniGalleryTiles}
        </section>
      </div>
      <footer>
        <form >
          <div className='input-box'>
            <input type='text' 
              className='search-box' 
              name='search-box'
              placeholder='Search the Met...' 
              value={formValue} 
              onChange={(event) => setFormValue(event.target.value)}>
            </input>
          </div>
            <button onClick={(event)=> querySearch(formValue, event)}>Get Art!</button>
        </form>
      </footer>
    </main>
  )
}

export default App;