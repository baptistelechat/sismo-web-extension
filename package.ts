import { zip } from 'zip-a-folder';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { readJsonFile } from "vite-plugin-web-extension";
import { execSync } from 'child_process';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json to get version
const pkg = readJsonFile("package.json");
const version = pkg.version;

async function buildForBrowser(browser: string) {
  console.log(`Building extension for ${browser}...`);
  try {
    // Définir la variable d'environnement BROWSER pour que vite-plugin-web-extension
    // puisse générer le bon manifest
    execSync(`cross-env BROWSER=${browser} pnpm build`, { stdio: 'inherit' });
    console.log(`✅ Build for ${browser} completed`);
    return true;
  } catch (error) {
    console.error(`❌ Error building for ${browser}:`, error);
    return false;
  }
}

async function packageForBrowser(browser: string) {
  const zipFileName = `${pkg.name}-${browser}-v${version}.zip`;
  const zipFilePath = path.join(__dirname, zipFileName);
  
  console.log(`Packaging ${browser} extension v${version}...`);
  
  try {
    // Vérifier si le fichier ZIP existe déjà et le supprimer
    if (fs.existsSync(zipFilePath)) {
      console.log(`🚮 Removing existing ZIP file: ${zipFilePath}`);
      fs.unlinkSync(zipFilePath);
    }
    
    // Zip the dist folder
    await zip(path.join(__dirname, 'dist'), zipFilePath);
    console.log("")
    console.log(`✅ ${browser} extension packaged successfully: ${zipFilePath}`);
    return true;
  } catch (error) {
    console.log("")
    console.error(`❌ Error packaging ${browser} extension:`, error);
    return false;
  }
}

async function packageExtensions() {
  // Build and package for Chrome
  if (await buildForBrowser('chrome')) {
    await packageForBrowser('chrome');
  }
  
  // Build and package for Firefox
  if (await buildForBrowser('firefox')) {
    await packageForBrowser('firefox');
  }
}

packageExtensions();