/**
 * Récupère les coordonnées géographiques à partir d'une adresse
 * @param address L'adresse à géocoder
 * @param postalCode Code postal optionnel pour améliorer la précision
 * @param cityCode Code commune optionnel pour améliorer la précision
 * @returns Promise avec les coordonnées {lat, lng}
 */
export const getCoordinates = async (
  address: string,
  postalCode?: string,
  cityCode?: string
): Promise<{ lat: number; lng: number }> => {
  try {
    // Construire l'URL de base
    let url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
      address
    )}`;

    // Ajouter le code postal s'il est disponible
    if (postalCode) {
      url += `&postcode=${postalCode}`;
    }

    // Ajouter le code commune s'il est disponible
    if (cityCode) {
      url += `&citycode=${cityCode}`;
    }

    // Limiter à un seul résultat
    url += "&limit=1";

    const response = await fetch(url);
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].geometry.coordinates;
      return { lat, lng };
    }

    throw new Error("Adresse non trouvée");
  } catch (error) {
    console.error("Erreur lors de la récupération des coordonnées:", error);
    throw error;
  }
};
