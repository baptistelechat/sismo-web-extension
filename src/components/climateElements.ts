import { extractCode } from "../utils/extractCode";
import { formatClimateValue } from "../utils/formatClimateValue";
import { getClimateData } from "../utils/getClimateValue";
import { getCoordinates } from "../utils/getCoordinates";

/**
 * Crée un élément séparateur pour les zones climatiques
 * @returns Element HTML div avec les classes et attributs appropriés
 */
export const createSeparator = (): HTMLDivElement => {
  const separatorDiv = document.createElement("div");
  separatorDiv.className = "g7qrk di5DAc iRPzcb";
  separatorDiv.setAttribute("role", "separator");
  return separatorDiv;
};

/**
 * Crée un élément avec le format Google
 * @param label Le libellé de l'élément (ex: "Vent", "Neige", "Séisme")
 * @param value La valeur à afficher (par défaut: "-")
 * @returns Element HTML div formaté selon le style Google
 */
export const createClimateElement = (
  label: string,
  value: string = "-"
): HTMLDivElement => {
  const elementDiv = document.createElement("div");
  elementDiv.className = "wDYxhc";
  elementDiv.dataset.attrid = `ss:/webfacts:${label.toLowerCase()}`;

  const content = `
    <div class="Z1hOCe">
      <div class="zloOqf PZPZlf">
        <div class="rVusze">
          <span class="w8qArf FoJoyf">${label}<span>&nbsp;:</span> </span>
          <span><span class="LrzXr kno-fv wHYlTd z8gr9e">${value}</span></span>
        </div>
      </div>
    </div>
  `;

  elementDiv.innerHTML = content;
  return elementDiv;
};

/**
 * Ajoute toutes les zones climatiques à un conteneur
 * @param container L'élément conteneur où ajouter les zones climatiques
 */
export const addClimateElements = (container: HTMLElement): void => {
  // Ajouter le séparateur
  container.appendChild(createSeparator());

  // Créer les éléments avec des valeurs par défaut
  const ventElement = createClimateElement("Vent");
  const neigeElement = createClimateElement("Neige");
  const seismeElement = createClimateElement("Séisme");

  // Ajouter les éléments au conteneur
  container.appendChild(ventElement);
  container.appendChild(neigeElement);
  container.appendChild(seismeElement);

  // Tenter de récupérer l'adresse depuis la page
  const addressElement = document.querySelector("div.PZPZlf.ssJ7i.B5dxMb");
  if (addressElement && addressElement.textContent) {
    const address = addressElement.textContent.trim();

    // Extraire les codes postal et commune s'ils sont disponibles
    const postalCode = extractCode("Code postal");
    const cityCode = extractCode("Code commune");

    console.log("Adresse trouvée:", address);
    console.log("Code postal trouvé:", postalCode || "Non disponible");
    console.log("Code commune trouvé:", cityCode || "Non disponible");

    // Récupérer les données climatiques et mettre à jour les éléments
    getCoordinates(address, postalCode, cityCode)
      .then((coords) => getClimateData(coords.lat, coords.lng))
      .then((data) => {
        // Mettre à jour les éléments avec les données réelles
        ventElement.querySelector(".LrzXr")!.textContent = formatClimateValue(
          data.vent_ec1,
          "vent"
        );
        neigeElement.querySelector(".LrzXr")!.textContent = formatClimateValue(
          data.neige_ec1,
          "neige"
        );
        seismeElement.querySelector(".LrzXr")!.textContent = formatClimateValue(
          data.seisme_ec8,
          "seisme"
        );
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la mise à jour des données climatiques:",
          error
        );
      });
  }
};
