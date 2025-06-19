import React from 'react';

interface IClimateElementProps {
  label: string;
  value?: string;
  isLoading?: boolean;
}

/**
 * Composant React pour afficher un élément climatique
 * @param label Le libellé de l'élément (ex: "Vent", "Neige", "Séisme")
 * @param value La valeur à afficher (par défaut: "-")
 * @param isLoading Indique si les données sont en cours de chargement
 */
const ClimateElement: React.FC<IClimateElementProps> = ({ 
  label, 
  value = "-", 
  isLoading = false
}) => {
  // Déterminer le contenu à afficher en fonction des états
  let displayContent;
  
  if (isLoading) {
    // Afficher le texte de chargement
    displayContent = <span>Chargement...</span>;
  } else {
    // Afficher la valeur normale
    displayContent = <span className="LrzXr kno-fv wHYlTd z8gr9e">{value}</span>;
  }

  return (
    <div className="wDYxhc" data-attrid={`ss:/webfacts:${label.toLowerCase()}`}>
      <div className="Z1hOCe">
        <div className="zloOqf PZPZlf">
          <div className="rVusze">
            <span className="w8qArf FoJoyf">{label}<span>&nbsp;:</span> </span>
            <span>{displayContent}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateElement;