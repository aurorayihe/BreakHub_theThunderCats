var GIPHY_API_key = "lci7X0iqnl5vbT4Oqwfh1p3UsOJvG5U3";

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("search-gif-btn").addEventListener("click", ev => {
    //stop the page reload
    ev.preventDefault();
    var gif_url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_key}&limit=1&q=`;
    var str_input = document.getElementById("search-gif-input").value.trim();
    gif_url = gif_url.concat(str_input);
    console.log(gif_url);
    fetch(gif_url)
      //get response
      .then(response => response.json())
      //handle data
      .then(content => {
        //data, pagination, meta 
        console.log(content.data);
        console.log('META', content.meta);
        var fig = document.createElement("figure");
        var img = document.createElement("img");
        var fc = document.createElement("figcaption");
        img.src = content.data[0].images.downsized.url;
        img.alt = content.data[0].title;
        fc.textContent = content.data[0].title;
        fig.appendChild(img);
        fig.appendChild(fc);
        var gif_out = document.querySelector(".gif-out");
        gif_out.insertAdjacentElement("afterbegin", fig);
        //clear form before each new search
        document.querySelector("#search-gif-input").value = "";

      })
      .catch(err => {
        console.error(err);
      })
  });
}

