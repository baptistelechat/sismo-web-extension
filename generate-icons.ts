#!/usr/bin/env node

/**
 * Script pour générer automatiquement les icônes de l'extension à partir d'un fichier SVG source
 * Utilise le package sharp pour convertir le SVG en PNG de différentes tailles
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Obtenir le chemin du répertoire actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname);

// Chemins des fichiers et dossiers
const svgSourcePath = path.join(rootDir, 'public', 'icon.png');
const iconOutputDir = path.join(rootDir, 'public', 'icon');

// Tailles d'icônes requises pour les extensions Chrome et Firefox
const iconSizes = [16, 32, 48, 96, 128];

async function generateIcons() {
  try {
    console.log('🚀 Génération des icônes pour l\'extension...');
    
    // Créer le dossier de sortie s'il n'existe pas
    await fs.mkdir(iconOutputDir, { recursive: true });
    
    // Lire le fichier SVG source
    const svgBuffer = await fs.readFile(svgSourcePath);
    
    // Générer un PNG pour chaque taille
    const promises = iconSizes.map(async (size) => {
      // console.log(`Génération de l'icône ${size}x${size}...`);
      
      const outputPath = path.join(iconOutputDir, `${size}.png`);
      
      // Utiliser sharp pour redimensionner le SVG et le convertir en PNG
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Icône ${size}x${size} générée avec succès`);
    });
    
    // Attendre que toutes les conversions soient terminées
    await Promise.all(promises);
    
    console.log('✨ Toutes les icônes ont été générées avec succès!');
    console.log(`📁 Les icônes sont disponibles dans: ${iconOutputDir}`);
    console.log("")
  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes:', error);
    process.exit(1);
  }
}

// Exécuter la fonction principale
generateIcons();