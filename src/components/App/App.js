import React, {useState, useEffect}from 'react'
import {Switch, Route} from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox';
import Tile from '../Tile/Tile';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [miniGalleryTiles, setMiniTiles] = useState([])

  const getThatArt = async (objectID) => {
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
    if (!res.ok) {
      throw new Error(res.status);
  }
    return await res.json();
}

  useEffect(()=> {
    if (searchResults.length > 0 && miniGalleryTiles.length === 0) {
      console.log('useEffect conditional triggered')
      let twenty = searchResults.slice(0, 19)
      let tiles = []
      twenty.map(id => 
        getThatArt(id).then(data=> {
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
            {miniGalleryTiles}
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