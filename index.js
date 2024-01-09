const main = document.getElementById("main");

let getImages = function () {
  fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
      Authorization: "plt0yNvGvUVAkB42D12tgMkfmmaxUhIe5ktFuGZx1orE962iqKIvnqiS",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.photos[0].url);

      data.photos.forEach(photo => {
        main.innerHTML += `
                        <div class="card overflow-hidden m-2" style="width: 18rem;">
                            <img src=${photo.src.large} class="image" alt=${photo.alt}>
                            <div class="card-body">
                                <h5 class="card-title">${photo.alt}</h5>
                                <p class="card-text">Photographer: ${photo.photographer}</p>
                                <a href="${photo.src.large}" class="btn btn-primary">Check the image on Pexels</a>
                            </div>
                        </div>
                        `
    })
    })
    .catch((err) => console.log(err));
};

getImages();
