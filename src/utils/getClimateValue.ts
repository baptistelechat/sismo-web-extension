import { IClimateData } from "../interfaces/IClimateData";

/**
 * Récupère les données climatiques à partir des coordonnées
 * @param lat Latitude
 * @param lng Longitude
 * @returns Promise avec les données climatiques
 */
export const getClimateData = async (
  lat: number,
  lng: number
): Promise<IClimateData> => {
  try {
    const response = await fetch(
      `https://us-central1-aibolide-b291c.cloudfunctions.net/api/lookup?lat=${lat}&lng=${lng}`
    );
    const data = await response.json();
    return data as IClimateData;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données climatiques:",
      error
    );
    throw error;
  }
};
