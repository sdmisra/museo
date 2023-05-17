import React, {useState, useEffect}from 'react'
import {findSomeArt, getThatArt} from '../../apiCalls'
import SearchBox from '../SearchBox/SearchBox';
import Tile from '../Tile/Tile';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [miniGalleryTiles, setMiniTiles] = useState([])

  useEffect(() => {
    let dataToTile = [];
    let firstTwenty = searchResults.slice(0, 19)
    firstTwenty.map((id)=> {
      getThatArt(id).then((artifact)=> {
        dataToTile.push(<Tile props={artifact} key={artifact.objectID}/>)
      })
    })
    setMiniTiles(dataToTile)
    },[searchResults])

  const querySearch = (parameters, event) => {
    event.preventDefault();
    findSomeArt(parameters).then(data=> {
      console.log(data)
      setSearchResults(data['objectIDs'])
    });
  }

  return (
    <main className="App">
      <div className="main-container">
        <section className="search-results">
          {miniGalleryTiles}
        </section>
      </div>
      <footer>
        <SearchBox querySearch={querySearch}/>
      </footer>
    </main>
  )
}

export default App;