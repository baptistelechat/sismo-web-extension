import { addClimateElements } from "./components/climateElements";

const run = () => {
  console.log("====================");
  console.log("SISMO WEB EXTENSION");
  console.log("====================");

  const targetElements = document.querySelectorAll('div[role="complementary"]');

  // Traiter chaque élément trouvé
  targetElements.forEach((targetElement, index) => {
    // Vérifier si l'élément contient une div avec la classe xGj8Mb
    const xGj8MbDiv = targetElement.querySelector("div.xGj8Mb");

    if (xGj8MbDiv) {
      // Utiliser la fonction externalisée pour ajouter les éléments
      // Conversion explicite de Element vers HTMLElement
      addClimateElements(xGj8MbDiv as HTMLElement);
    }
  });
  console.log("====================");
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}

export {};
