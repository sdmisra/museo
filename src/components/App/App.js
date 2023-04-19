import React, {useState, useEffect} from 'react'
import {findSomeArt, getSomeArt} from '../../apiCalls'
import './App.css';

function App() {
  const [testState1, setTestState1] = useState([])
  let [testState2, setTestState2] = useState(1)

  useEffect(() => {
    const artBySearch = findSomeArt('Arms and Armor')
                        .then(data=> setTestState1(data['objectIDs']))
    // console.log(oneValidArt)
    // getSomeArt(oneValidArt)
  }, [testState1])

  function returnRandomInt (maxInt) {
    return Math.floor(Math.random() * maxInt)
}

  return (
    <div className="App">
      <button className="Counter" onClick={()=> setTestState2(testState2++)}>
        {testState2}
      </button>
    </div>
  );
}

export default App;