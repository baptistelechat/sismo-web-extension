import React from 'react';

interface IClimateElementProps {
  label: string;
  value?: string;
}

/**
 * Composant React pour afficher un élément climatique
 * @param label Le libellé de l'élément (ex: "Vent", "Neige", "Séisme")
 * @param value La valeur à afficher (par défaut: "-")
 */
const ClimateElement: React.FC<IClimateElementProps> = ({ label, value = "-" }) => {
  return (
    <div className="wDYxhc" data-attrid={`ss:/webfacts:${label.toLowerCase()}`}>
      <div className="Z1hOCe">
        <div className="zloOqf PZPZlf">
          <div className="rVusze">
            <span className="w8qArf FoJoyf">{label}<span>&nbsp;:</span> </span>
            <span><span className="LrzXr kno-fv wHYlTd z8gr9e">{value}</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClimateElement;