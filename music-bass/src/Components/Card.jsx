let url = `https://api.nasa.gov/planetary/earth/assets?lon=86.1582&lat=39.7684&api_key=K5Qj4Lirdyg9EDl2m1rZL3yfR5vsc2jKbgFoNArn`
fetch(url)
  .then(res => res.json())
  .then(json => json.url)