/**
 * Convertit les codes climatiques en valeurs lisibles
 * @param code Code climatique
 * @param type Type de code (vent, neige, séisme)
 * @returns Valeur lisible
 */
export const formatClimateValue = (
  code: string,
  type: "vent" | "neige" | "seisme"
): string => {
  if (!code) return "-";

  switch (type) {
    case "vent":
      return code;
    case "neige":
      return code;
    case "seisme":
      return code;
    default:
      return code;
  }
};
