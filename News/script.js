var jsonUrl = "https://fortnite-api.com/v2/news";

fetch(jsonUrl)
  .then((response) => response.json())
  .then((data) => {
    var mapImageUrl = data.data.images.poi;

    var mapImage = document.createElement("img");

    mapImage.src = mapImageUrl;

    mapImage.style.width = "60%";
    mapImage.style.height = "60%";

    document.getElementById("newsContainer").appendChild(mapImage);
  })
  .catch((error) => console.error("Error fetching Fortnite news data:", error));
