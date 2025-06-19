/**
 * Interface pour les données climatiques
 */
export interface IClimateData {
  vent_ec1: string;
  neige_ec1: string;
  seisme_ec8: string;
  commune: {
    nom: string;
    code: string;
    codeDepartement: string;
  };
}
