const apikey = "";
const url = "";
const q = document.getElementById("#q");


const search = () => {
  fetch(`http://api.giphy.com/v1/gifs/search?q=${q}&api_key=${apikey}&limit=5`)
  .then(result => result.json())
  .then(data => {
    
  })
}

console.log("test")

