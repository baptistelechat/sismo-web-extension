/**
 * Extrait le code postal ou le code commune de la page Google
 * @param labelText Le texte du label à rechercher ("Code postal" ou "Code commune")
 * @returns Le code trouvé ou undefined si non trouvé
 */
export const extractCode = (labelText: string): string | undefined => {
  // Sélectionner tous les éléments qui pourraient contenir les codes
  const elements = document.querySelectorAll(".w8qArf.FoJoyf");

  // Parcourir les éléments pour trouver celui qui contient le texte recherché
  for (const element of elements) {
    if (element.textContent?.includes(labelText)) {
      // Trouver l'élément parent qui contient la valeur
      const parentDiv = element.closest(".rVusze");
      if (parentDiv) {
        // Extraire la valeur du code
        const valueElement = parentDiv.querySelector(
          ".LrzXr.kno-fv.wHYlTd.z8gr9e"
        );
        if (valueElement && valueElement.textContent) {
          return valueElement.textContent.trim().slice(0, 5);
        }
      }
    }
  }

  return undefined;
};
