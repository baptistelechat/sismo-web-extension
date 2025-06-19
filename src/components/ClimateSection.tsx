import React, { useEffect, useState } from "react";
import { extractCode } from "../utils/extractCode";
import { formatClimateValue } from "../utils/formatClimateValue";
import { getClimateData } from "../utils/getClimateValue";
import { getCoordinates } from "../utils/getCoordinates";
import ClimateElement from "./ClimateElement";
import Separator from "./Separator";

interface ClimateSectionProps {
  address: string;
}

/**
 * Composant React pour afficher la section climatique complète
 */
const ClimateSection: React.FC<ClimateSectionProps> = ({ address }) => {
  const [ventValue, setVentValue] = useState<string>("-");
  const [neigeValue, setNeigeValue] = useState<string>("-");
  const [seismeValue, setSeismeValue] = useState<string>("-");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClimateData = async () => {
      try {
        // Extraire les codes postal et commune s'ils sont disponibles
        const postalCode = extractCode("Code postal");
        const cityCode = extractCode("Code commune");

        console.log("Adresse trouvée:", address);
        console.log("Code postal trouvé:", postalCode || "Non disponible");
        console.log("Code commune trouvé:", cityCode || "Non disponible");

        // Récupérer les coordonnées
        const coords = await getCoordinates(address, postalCode, cityCode);

        // Récupérer les données climatiques
        const data = await getClimateData(coords.lat, coords.lng);

        // Mettre à jour les états avec les données formatées
        setVentValue(formatClimateValue(data.vent_ec1, "vent"));
        setNeigeValue(formatClimateValue(data.neige_ec1, "neige"));
        setSeismeValue(formatClimateValue(data.seisme_ec8, "seisme"));
        setLoading(false);
      } catch (err) {
        console.error(
          "Erreur lors de la récupération des données climatiques:",
          err
        );
        setError("Erreur lors de la récupération des données");
        setLoading(false);
      }
    };

    if (address) {
      fetchClimateData();
    }
  }, [address]);

  return (
    <>
      <Separator />
      <ClimateElement label="Vent" value={ventValue} />
      <ClimateElement label="Neige" value={neigeValue} />
      <ClimateElement label="Séisme" value={seismeValue} />
    </>
  );
};

export default ClimateSection;
