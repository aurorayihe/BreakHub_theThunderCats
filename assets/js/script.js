// catKey = 'a747f151-8a97-4d37-8633-646029636f01';

const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = 'a747f151-8a97-4d37-8633-646029636f01'
let storedBreeds = []

fetch(url, {
  headers: {
    'x-api-key': api_key
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    //filter to only include those with an `image` object
    data = data.filter(img => img.image?.url != null)

    storedBreeds = data;

    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');

      //skip any breeds that don't have an image
      if (!breed.image) continue

      //use the current array index
      option.value = i;
      option.innerHTML = `${breed.name}`;
      document.getElementById('breed_selector').appendChild(option);

    }
    //show the first breed by default
    showBreedImage(0)
  })
  .catch(function (error) {
    console.log(error);
  });

function showBreedImage(index) {
  document.getElementById("breed_image").src = storedBreeds[index].image.url;

  document.getElementById("breed_json").textContent = storedBreeds[index].temperament


  document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
}



// ------------- GIPHY API (Ayesha) -----------------

var gif_apikey = "lci7X0iqnl5vbT4Oqwfh1p3UsOJvG5U3";
var gif_out = document.querySelector("#gif-out");
document.addEventListener("DOMContentLoaded", gifInit);

function gifInit() {
  var gifBtnEl = document.getElementById("gif-btn");
  gifBtnEl.addEventListener("click", function (event) {
    //stop the page reload
    event.preventDefault();
    //clears old data
    gif_out.innerHTML = '';


    var gif_url = `https://api.giphy.com/v1/gifs/random?api_key=${gif_apikey}&tag=cats`;

    console.log(gif_url);
    fetch(gif_url)
      //get response
      .then(function (response) {
        return response.json()
        //handle data
      }).then(function (content) {
        //GIPHY API Random EndPoint Objects: data, pagination, meta 
        console.log(content.data);
        console.log('META', content.meta);
        var fig = document.createElement("figure");
        var img = document.createElement("img");
        var fc = document.createElement("figcaption");
        img.src = content.data.images.downsized.url;
        img.alt = content.data.title;
        fc.textContent = content.data.title;
        fig.appendChild(img);
        fig.appendChild(fc);

        //update style for created elements
        fc.setAttribute("style", "font-size: 12px; font-weight: bolder; font-color: black; text-transform: uppercase; position: absolute; bottom: 0px; left: 0; right: 0;");
        gif_out.setAttribute("style", "position: relative; overflow: hidden; top: 0; left: 0; right: 0; bottom: 0; width: 100%; padding-top: 10%; padding-bottom: 90%");
        img.setAttribute("style", "position: absolute;top: 0; left:0; right: 0; bottom:0; width: 100%; height: 100%; padding-bottom: 20px;");
   

        gif_out.insertAdjacentElement("afterbegin", fig);
      })

      //handle error messages
      .catch(function (err) {
        console.log(err.message)
      })
  });
}




