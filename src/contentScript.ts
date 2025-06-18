function run() {
  console.log("Attempting to select target element");
  console.log("Checking if target element exists");
  const targetElement = document.querySelector('div[role="complementary"]');
  console.log(targetElement);
  
  if (targetElement) {
    // Récupérer le style calculé de l'élément
    const computedStyle = window.getComputedStyle(targetElement);
    const flexDirection = computedStyle.getPropertyValue('flex-direction');
    
    console.log("Flex direction de l'élément cible:", flexDirection);
    
    const newParagraph = document.createElement("p");
    
    // Adapter l'affichage en fonction de la position
    if (flexDirection === "column") {
      // Card dans la colonne de droite
      newParagraph.textContent = "Lorem Ipsum - Affichage colonne";
      newParagraph.style.color = "blue";
    } else {
      // Card en haut des résultats
      newParagraph.textContent = "Lorem Ipsum - Affichage horizontal";
      newParagraph.style.color = "red";
    }
    
    targetElement.appendChild(newParagraph);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}

export {};
