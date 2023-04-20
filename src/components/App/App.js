import React, {useState, useEffect} from 'react'
import {findSomeArt, getThatArt} from '../../apiCalls'
import SearchBox from '../SearchBox/SearchBox'
import './App.css';

function App() {
  const [error, setError] = useState('')

  useEffect(() => {
  }, [])

  function returnRandomInt (maxInt) {
    return Math.floor(Math.random() * maxInt)
}

  return (
    <div className="App">
      <SearchBox />
    </div>
  );
}

export default App;