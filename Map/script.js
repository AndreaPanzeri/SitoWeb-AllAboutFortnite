var jsonUrl = "https://fortnite-api.com/v1/map";

fetch(jsonUrl)
  .then((response) => response.json())
  .then((data) => {
    var mapImageUrl = data.data.images.poi;

    var mapImage = document.createElement("img");

    mapImage.src = mapImageUrl;

    mapImage.style.width = "0%";
    mapImage.style.height = "0%";

    document.getElementById("mapContainer").appendChild(mapImage);
  })
  .catch((error) => console.error("Error fetching Fortnite map data:", error));
