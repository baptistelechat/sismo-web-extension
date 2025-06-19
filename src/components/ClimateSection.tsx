import React, { useEffect, useState } from "react";
import { extractCode } from "../utils/extractCode";
import { formatClimateValue } from "../utils/formatClimateValue";
import { getClimateData } from "../utils/getClimateValue";
import { getCoordinates } from "../utils/getCoordinates";
import ClimateElement from "./ClimateElement";
import ErrorMessage from "./ErrorMessage";
import Separator from "./Separator";
import { Button } from "./ui/button";

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
  const [coordinates, setCoordinates] = useState<{lat: number; lng: number} | null>(null);
  const [codePostal, setCodePostal] = useState<string>("");
  const [codeInsee, setCodeInsee] = useState<string>("");

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
        setCoordinates(coords);

        // Récupérer les données climatiques
        const data = await getClimateData(coords.lat, coords.lng);

        setCodePostal(postalCode || "-"); // Code Postal
        setCodeInsee(cityCode || "-"); // Code INSEE

        // Mettre à jour les états avec les données formatées
        setVentValue(formatClimateValue(data.vent_ec1, "vent"));
        setNeigeValue(formatClimateValue(data.neige_ec1, "neige"));
        setSeismeValue(formatClimateValue(data.seisme_ec8, "seisme"));
        setLoading(false);
      } catch (err) {
        const errorMessage =
          "Erreur lors de la récupération des zones Vent, Neige et Séisme";
        console.error(`${errorMessage}:`, err);
        setError(errorMessage);
        setLoading(false);
      }
    };

    if (address) {
      fetchClimateData();
    }
  }, [address]);

  // Fonction pour ouvrir Géorisques dans un nouvel onglet
  const handleGeorisquesClick = () => {
    if (!address || !codeInsee || !codePostal || !coordinates) return;

    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.georisques.gouv.fr/mes-risques/connaitre-les-risques-pres-de-chez-moi/rapport2?form-adresse=true&isCadastre=false&city=${encodedAddress}&type=municipality&typeForm=adresse&codeInsee=${codeInsee}&lon=${coordinates.lng}&lat=${coordinates.lat}&propertiesType=municipality&adresse=${codePostal}%20${encodedAddress}`;
    
    window.open(url, '_blank');
  };

  return (
    <>
      <Separator />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <div className="flex justify-between mt-3">
          <div>

          <ClimateElement label="Vent" value={ventValue} isLoading={loading} />
          <ClimateElement
            label="Neige"
            value={neigeValue}
            isLoading={loading}
          />
          <ClimateElement
            label="Séisme"
            value={seismeValue}
            isLoading={loading}
          />
          </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleGeorisquesClick}
              disabled={loading || !address || !codeInsee || !codePostal || !coordinates}
              className="text-xs"
            >
              Voir sur Géorisques
            </Button>
        </div>
      )}
    </>
  );
};

export default ClimateSection;
