import React from "react";
import ReactDOM from "react-dom/client";
import ClimateSection from "./components/ClimateSection";
import "./index.css";

const run = () => {
  console.log("===================================");
  console.log(`
   _____ _____  _____ __  __  ____  
  / ____|_   _|/ ____|  \/  |/ __ \ 
 | (___   | | | (___ | \  / | |  | |
  \___ \  | |  \___ \| |\/| | |  | |
  ____) |_| |_ ____) | |  | | |__| |
 |_____/|_____|_____/|_|  |_|\____/ 
 `);

  const targetElements = document.querySelectorAll('div[role="complementary"]');

  // Traiter chaque élément trouvé
  targetElements.forEach((targetElement) => {
    // Vérifier si l'élément contient une div avec la classe xGj8Mb
    const xGj8MbDiv = targetElement.querySelector("div.xGj8Mb");

    if (xGj8MbDiv) {
      // Tenter de récupérer l'adresse depuis la page
      const addressElement = document.querySelector("div.PZPZlf.ssJ7i.B5dxMb");
      if (addressElement && addressElement.textContent) {
        const address = addressElement.textContent.trim();

        // Créer un conteneur pour notre application React
        const reactContainer = document.createElement("div");
        reactContainer.id = "sismo-container";
        xGj8MbDiv.appendChild(reactContainer);

        // Rendre notre composant React dans le conteneur
        const root = ReactDOM.createRoot(reactContainer);
        root.render(
          <React.StrictMode>
            <ClimateSection address={address} />
          </React.StrictMode>
        );
      }
    }
  });
  console.log("===================================");
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}

export {};
