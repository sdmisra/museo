import React, {useState, useEffect}from 'react'
import {Switch, Route} from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox';
import Tile from '../Tile/Tile';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [miniGalleryTiles, setMiniTiles] = useState([])

  const getThatArt = async (objectID) => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/`
    try {
      const res = await fetch(`${url}${objectID}`);
      if (!res.ok) {
        throw new Error('Error in single object call')
      }
      return await res.json()
    } catch (error) {
      console.log(error.message)
    }
  }
  
  useEffect(()=> {
    let tiles = []
    if (searchResults.length > 0 && miniGalleryTiles.length === 0) {
      console.log('initial load of search results')
      let ten = searchResults.slice(0, 10)
      setSearchResults([])
      ten.forEach(id => 
        getThatArt(id)
        .then(data => {
          tiles.push(<Tile props={data} key={data.objectID}/>)
          console.log(tiles)
          setMiniTiles(tiles)
        }))

  }}, [searchResults, miniGalleryTiles])

  return (
    <main className="App">
      <div className="main-container">
      <Switch >
        <Route path='/'>
          <section className="search-results">
            {miniGalleryTiles.length > 0 ? miniGalleryTiles : <p>No Results Yet!</p>}
          </section>
        </Route>
      </Switch >
      </div>
      <footer>
        <SearchBox setSearchResults={setSearchResults}/>
      </footer>
    </main>
  )
}

export default App;