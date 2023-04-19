import React, {useState, useEffect} from 'react'
import {findSomeArt, getSomeArt} from '../../apiCalls'
import './App.css';

function App() {
  const [testState1, setTestState1] = useState('')
  const [testState2, setTestState2] = useState(1)

  useEffect(() => {
    console.log(findSomeArt)
    console.log(getSomeArt)
  }, [])
  return (
    <div className="App">
      <button className="Counter" onClick={()=> setTestState2(testState2++)}>
        {testState2}
      </button>
    </div>
  );
}

export default App;
