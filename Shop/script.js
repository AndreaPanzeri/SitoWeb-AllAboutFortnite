document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fortnite-api.com/v2/shop/br")
    .then((response) => response.json())
    .then((data) => {
      displayShopData(data);
    })
    .catch((error) => {
      console.error("Errore durante la richiesta API:", error);
    });

  function displayShopData(data) {
    const shopDataElement = document.getElementById("shopData");

    // Controllo risposta
    if (
      data &&
      data.status === 200 &&
      data.data &&
      data.data.featured &&
      data.data.featured.entries &&
      Array.isArray(data.data.featured.entries)
    ) {
      const featuredItems = data.data.featured.entries;
      const dailyItems =
        data.data.daily &&
        data.data.daily.entries &&
        Array.isArray(data.data.daily.entries)
          ? data.data.daily.entries
          : [];

      // Visualizzazione dei dati
      const html = `
        <ul>
          ${getItemListMarkup(featuredItems)}
        </ul>
      `;

      shopDataElement.innerHTML = html;
    } else {
      shopDataElement.innerHTML =
        "<p>Dati non disponibili o struttura non valida.</p>";
    }
  }

  function getItemListMarkup(items) {
    return items
      .map((item) => {
        if (
          item.bundle &&
          item.bundle.name &&
          item.finalPrice &&
          item.bundle.image
        ) {
          return `
          <li>
            <strong>${item.bundle.name}</strong>
            <p>Price: ${item.finalPrice} V-Bucks</p>
            <img src="${item.bundle.image}" alt="${item.bundle.name}">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
          </li>
        `;
        } else {
          return ""; // controllo sui campi nulli
        }
      })
      .join("");
  }
});
