
const allImages = import.meta.glob(
  '/public/imagenes/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}',
  { eager: true }
);

// Convertir el objeto plano en un mapa por categoría:

export function buildCatalog() {
  const catalog = {};

  for (const path in allImages) {
    const publicPath = path.replace('/public', '');

    const parts = publicPath.split('/');
    if (parts.length < 4) continue;

    const category = parts[2];           
    const filename  = parts[parts.length - 1];

    const productName = filename
      .replace(/\.[^/.]+$/, '')          
      .trim();

    if (!catalog[category]) catalog[category] = [];
    catalog[category].push({ src: publicPath, name: productName });
  }

  return catalog;
}

// Catálogo listo
export const catalog = buildCatalog();

// Lista de categorías disponibles 
export const categoryList = Object.keys(catalog).sort();