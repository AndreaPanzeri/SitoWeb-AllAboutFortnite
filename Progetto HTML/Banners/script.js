var jsonUrl = "https://fortnite-api.com/v1/banners";

function fetchDataAndDisplay() {
  fetch(jsonUrl)
    .then((response) => response.json())
    .then((data) => {
      var bannerDataElement = document.getElementById("bannerData");
      data.data.forEach(function (banner) {
        var bannerElement = document.createElement("div");
        bannerElement.classList.add("bannerCard");
        bannerElement.innerHTML = `<h2>${banner.name}</h2>
                    <br>
                    <p><strong>ID:</strong> ${banner.id}</p>
                    <p><strong>DESCRIPTION:</strong> ${banner.description}</p>
                    <p><strong>CATEGORY:</strong> ${banner.category}</p>
                    <br>
                    <br>
                    <img src="${banner.images.smallIcon}" alt="Small Icon">`;
        bannerDataElement.appendChild(bannerElement);
      });
    })
    .catch((error) =>
      console.error("Errore durante il recupero dei dati:", error)
    );
}

document.addEventListener("DOMContentLoaded", fetchDataAndDisplay);
