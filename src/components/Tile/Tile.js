import React from 'react'
import './Tile.css'

function Tile(props) {
  const data = props.props
  console.log(data)
    return (
      <div className="result-tile" id={data.objectID}>
        <img src={data.primaryImageSmall}/>
        <span className="result-title">Text Here</span>
        <h3>{data.objectID}</h3>
      </div>
    )
}

export default Tile;