import React from 'react'
import './Tile.css'

function Tile(props) {
  const data = props.props
  console.log(data)
    return (
      <div className="result-tile" id={data.objectID}>
        <img src={data.primaryImageSmall}/>
        <span>Result Footer</span>
        <h3>{data.artistDisplayName}</h3>
      </div>
    )
}

export default Tile;