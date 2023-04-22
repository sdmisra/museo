const findSomeArt = (query) => {
  return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`)
    .then((res) => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}


const getThatArt = (objectID) => {
  return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then((res) => {
      if(!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}

export {findSomeArt, getThatArt};