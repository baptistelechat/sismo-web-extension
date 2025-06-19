<h1 align="center">Sismo Web Extension 🚀</h1>

A web extension to get snow, wind and seismicity zones in France (including DROM-COM) directly from a Google search.

## ✨ Features

- Displays snow, wind and seismicity zones for a French municipality during a Google search
- Compatible with Chrome and Firefox
- Modern user interface with Tailwind CSS and shadcn/ui
- Developed with React and TypeScript

## 📸 Screenshots

*Coming soon*

## 🚩 Prerequisites

- Node.js (version 18 or higher)
- npm, yarn or pnpm

## 💻 Installation for Development

Step 1 → Clone the repository:

```bash
git clone https://github.com/baptistelechat/sismo-web-extension.git
cd sismo-web-extension
```

Step 2 → Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Step 3 → Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 🔄 Development

To automatically rebuild the extension when changes are made:

```bash
npm run watch
# or
yarn watch
# or
pnpm watch
```

## 🧱 Building the Extension

To build the extension for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The different icon sizes and extension files will be generated in the `dist/` folder.

## 📦 Packaging the Extension

To package the extension for distribution (e.g., for GitHub releases), run:

```bash
npm run package
# or
yarn package
# or
pnpm package
```

This will:
1. Build the extension
2. Create a ZIP file in the `dist-zip` folder with the format `sismo-web-extension-v{version}.zip`

The packaged ZIP file can be uploaded to browser extension stores or attached to GitHub releases.

## 🖼️ Generating Icons

The extension requires icons of different sizes. You can automatically generate them from the source PNG file:

```bash
# Generate the icons
npm run generate-icons
# or
yarn generate-icons
# or
pnpm generate-icons
```

This will automatically generate all required icon sizes (16, 32, 48, 96, 128 pixels) in the `public/icon/` folder.

## 📦 Manual Installation of the Extension

### Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click on "Load unpacked extension"
4. Select the `dist/` folder generated after building or 

Alternatively, you can Drag and drop the the packaged extension (.zip file) into `chrome://extensions/`

### Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`
2. Click on "Load Temporary Add-on..."
3. Select the `manifest.json` file in the `dist/` folder after building or select the packaged extension (.zip file)

## 🏗 Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vite](https://vitejs.dev/) - Build tool

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" width="150">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" width="150">
<img src="https://vitejs.dev/logo.svg" width="150">
</p>

## 😸 Maintainers

This project is maintained by:

- [Baptiste LECHAT](https://github.com/baptistelechat)

## 👨‍💻👩‍💻 Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push your branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 📝 License

[MIT](LICENSE)

## 😂 Gitmoji

This project uses Gitmoji: "An emoji guide for your commit messages".

<p align="left">
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://cloud.githubusercontent.com/assets/7629661/20073135/4e3db2c2-a52b-11e6-85e1-661a8212045a.gif" width="250" alt="gitmoji">
	</a>
</p>
<p align="left">
	<a href="https://gitmoji.carloscuesta.me">
		<img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
			 alt="Gitmoji">
	</a>
</p>