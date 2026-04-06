
const allImages = import.meta.glob(
  '/public/imagenes/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);


export function buildCatalog() {
  const catalog = {};

  for (const path in allImages) {
    const publicPath = path.replace('/public', '');

    const parts = publicPath.split('/');
    if (parts.length < 4) continue;

    const category = parts[2];           // "manga"
    const filename  = parts[parts.length - 1]; // "Ranma .jpeg"

    const productName = filename
      .replace(/\.[^/.]+$/, '')          // quita extensión
      .trim()
      .toLowerCase()                     // todo a minúsculas primero
      .replace(/(?:^|\s)\S/g, (c) => c.toUpperCase()); // primera letra de cada palabra

    if (!catalog[category]) catalog[category] = [];
    catalog[category].push({ src: publicPath, name: productName });
  }

  return catalog;
}

// Catálogo listo para consumir en cualquier componente
export const catalog = buildCatalog();

// Lista de categorías disponibles (para menú/nav)
export const categoryList = Object.keys(catalog).sort();