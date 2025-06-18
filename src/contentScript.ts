import { addClimateElements } from "./components/climateElements";

const run = () => {
  console.log("Attempting to select target elements");
  const targetElements = document.querySelectorAll('div[role="complementary"]');
  console.log(`Nombre d'éléments trouvés: ${targetElements.length}`);

  // Traiter chaque élément trouvé
  targetElements.forEach((targetElement, index) => {
    console.log(`Traitement de l'élément :`, targetElement);

    // Vérifier si l'élément contient une div avec la classe xGj8Mb
    const xGj8MbDiv = targetElement.querySelector("div.xGj8Mb");
    console.log(`Div xGj8Mb trouvée dans l'élément :`, xGj8MbDiv);

    if (xGj8MbDiv) {
      // Utiliser la fonction externalisée pour ajouter les éléments
      // Conversion explicite de Element vers HTMLElement
      addClimateElements(xGj8MbDiv as HTMLElement);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}

export {};
