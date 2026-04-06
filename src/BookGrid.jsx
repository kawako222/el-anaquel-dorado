
import { useMemo } from 'react';
import { catalog } from './imageMap';

const WHATSAPP_NUMBER = "5213320479915"; // número

const toWhatsApp = (productName, category) => {
  const msg = `Hola El Anaquel Dorado, vengo de la página web. Me interesa el libro *"${productName}"* de la sección de *${category}*. ¿Está disponible?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

// Etiquetas legibles para cada slug de carpeta
const CATEGORY_LABELS = {
  'academicos e investigacion literaria': 'Académicos e Investigación Literaria',
  'antologias de novela':                 'Antologías de Novela',
  'arte':                                 'Arte y Pintura',
  'clasicos':                             'Clásicos',
  'clasicos coleccion':                   'Clásicos de Colección',
  'feminismos':                           'Feminismos',
  'infantiles':                           'Infantil',
  'manga':                                'Manga',
  'medicina':                             'Medicina',
  'novelas':                              'Novelas',
  'novelas juveniles':                    'Novelas Juveniles',
  'poesia de comunidades originarias':    'Poesía de Comunidades Originarias',
};

const label = (slug) => CATEGORY_LABELS[slug] ?? slug;

// ── Tarjeta individual ──────────────────────────────────────────────────────
function BookCard({ src, name, category }) {
  return (
    <a
      href={toWhatsApp(name, label(category))}
      target="_blank"
      rel="noopener noreferrer"
      className="book-card"
      title={name}
    >
      <div className="book-card-img-wrap">
        <img src={src} alt={name} loading="lazy" />
        <div className="book-card-overlay">
          <span className="book-card-cta">Consultar disponibilidad</span>
        </div>
      </div>
      <p className="book-card-name">{name}</p>
    </a>
  );
}

// ── Grid principal ──────────────────────────────────────────────────────────
export default function BookGrid({ category }) {
  const books = useMemo(() => catalog[category] ?? [], [category]);

  if (!category) {
    return (
      <div className="bookgrid-empty">
        <p>Selecciona una categoría para ver los libros disponibles.</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="bookgrid-empty">
        <p>No hay libros registrados en esta categoría aún.</p>
      </div>
    );
  }

  return (
    <section className="bookgrid-section">
      <div className="bookgrid-header">
        <p className="section-label">{books.length} títulos disponibles</p>
        <h2>{label(category)}</h2>
      </div>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard
            key={book.src}
            src={book.src}
            name={book.name}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}