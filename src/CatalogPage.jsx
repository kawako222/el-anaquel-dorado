
import { useState } from 'react';
import { categoryList } from './imageMap';
import BookGrid from './BookGrid';

const CATEGORY_LABELS = {
  'academicos e investigacion literaria': 'Académicos e Investigación',
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
  'poesia de comunidades originarias':    'Poesía Originaria',
};

const label = (slug) => CATEGORY_LABELS[slug] ?? slug;

export default function CatalogPage() {
  const [active, setActive] = useState(categoryList[0] ?? '');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="catalog-page">

      {/* ── Sidebar desktop / drawer móvil ── */}
      <aside className={`catalog-sidebar ${menuOpen ? 'open' : ''}`}>
        <p className="sidebar-eyebrow">Colecciones</p>
        <ul className="sidebar-list">
          {categoryList.map((cat) => (
            <li key={cat}>
              <button
                className={`sidebar-item ${active === cat ? 'active' : ''}`}
                onClick={() => { setActive(cat); setMenuOpen(false); }}
              >
                {label(cat)}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* ── Contenido principal ── */}
      <main className="catalog-main">
        {/* Botón móvil para abrir el menú */}
        <button
          className="catalog-menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? 'Cerrar' : `Colección: ${label(active)}`}
          <span className="toggle-icon">{menuOpen ? '✕' : '↓'}</span>
        </button>

        <BookGrid category={active} />
      </main>

    </div>
  );
}