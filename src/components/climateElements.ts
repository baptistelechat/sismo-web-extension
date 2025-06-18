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

  // Ajouter les zones climatiques
  container.appendChild(createClimateElement("Vent"));
  container.appendChild(createClimateElement("Neige"));
  container.appendChild(createClimateElement("Séisme"));
};
