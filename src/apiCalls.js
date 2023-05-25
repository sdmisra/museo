const findSomeArt = async (query) => {
  const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);
  if (!res.ok) {
    throw new Error(res.status);
  }
  return await res.json();
}

export {findSomeArt};