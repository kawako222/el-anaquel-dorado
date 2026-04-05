import { useEffect } from 'react';

// ==========================================
// CONFIGURACIÓN
// ==========================================
const WHATSAPP_NUMBER = "5213320479915"; 

const createWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// ==========================================
// DATOS
// ==========================================
const categories = [
  { id: "01", title: "Investigación Académica", desc: "Letras, Filosofía y ensayos.",      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=75&auto=format" },
  { id: "02", title: "Juveniles",               desc: "Sagas y nuevas lecturas.",           img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=75&auto=format" },
  { id: "03", title: "Novelas y Poesía",        desc: "Literatura universal y versos.",     img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=75&auto=format" },
  { id: "04", title: "Ciencia Ficción",         desc: "Otros mundos y realidades.",         img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=75&auto=format" },
  { id: "05", title: "Clásicos de Colección",   desc: "Ediciones especiales y antiguas.",   img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=75&auto=format" },
  { id: "06", title: "Mitología",               desc: "Relatos épicos y deidades.",         img: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=600&q=75&auto=format" },
  { id: "07", title: "Mangas",                  desc: "Cómics japoneses populares.",        img: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=600&q=75&auto=format" },
  { id: "08", title: "Novelas Gráficas",        desc: "Historias ilustradas complejas.",    img: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=600&q=75&auto=format" },
  { id: "09", title: "Medicina",                desc: "Textos técnicos y de estudio.",      img: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?w=600&q=75&auto=format" },
  { id: "10", title: "Arte y Pintura",          desc: "Historia, técnicas y museos.",       img: "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=600&q=75&auto=format" },
  { id: "11", title: "Infantil",                desc: "Para los más pequeños.",             img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75&auto=format" },
  { id: "12", title: "Superación Personal",     desc: "Crecimiento y bienestar.",           img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=75&auto=format" },
];

const bookImages = [
  "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=300&q=70&auto=format",
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&q=70&auto=format",
];

// ==========================================
// COMPONENTES
// ==========================================

const CategoryCard = ({ id, title, desc, img }) => {
  const msg = `Hola El Anaquel Dorado, vengo de la página web. Quiero saber qué libros de "${title}" tienen disponibles.`;
  return (
    <a
      href={createWhatsAppLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className="cat-card"
    >
      <img src={img} alt={title} loading="lazy" />
      <div className="cat-overlay" />
      <div className="cat-info">
        <span className="cat-number">{id}</span>
        <span className="cat-title">{title}</span>
        <span className="cat-desc">{desc}</span>
        <span className="cat-cta">Consultar</span>
      </div>
    </a>
  );
};

// ==========================================
// APP PRINCIPAL
// ==========================================

export default function App() {
  // Navbar scroll effect
  useEffect(() => {
    const nav = document.getElementById('navbar');
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const customSearchMsg = "Hola, busco un libro específico (autor/título) y no lo vi en el catálogo visual. ¿Me ayudan a buscarlo?";
  const sellBooksMsg    = "Hola El Anaquel Dorado, me interesa vender algunos libros de segunda mano. ¿Me podrían dar información?";

  return (
    <div className="page-root">

      {/* ── NAV ── */}
      <nav id="navbar">
        <a className="nav-logo" href="#">El Anaquel Dorado</a>
        <ul className="nav-links">
          <li><a href="#catalogo">Catálogo</a></li>
          <li><a href="#buscador">Búsqueda</a></li>
          <li><a href="#vender">Vender</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Librería de Segunda Mano — Guadalajara</p>
          <h1>El <em>Anaquel</em><br />Dorado</h1>
          <p className="hero-sub">
            Donde los libros encuentran una segunda vida y tú, una nueva historia.
          </p>
          <div className="hero-actions">
            <a href="#catalogo" className="btn-primary">Explorar Catálogo</a>
            <a
              href={createWhatsAppLink(customSearchMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Búsqueda Personalizada
            </a>
          </div>
        </div>
      </header>

      {/* ── INTRO STRIP ── */}
      <div className="intro-strip">
        <div className="intro-strip-text">
          <p className="section-label">Nuestra historia</p>
          <h2>Un acervo vivo,<br />renovado cada día</h2>
          <p>
            Somos una librería virtual con un inventario físico en Guadalajara en constante
            movimiento. Cada semana llegan nuevas piezas — desde ediciones de colección hasta
            textos académicos y novelas olvidadas que esperan ser redescubiertas.
          </p>
        </div>
        <div className="intro-strip-image" />
      </div>

      {/* ── CATÁLOGO ── */}
      <section id="catalogo" className="catalog-section">
        <div className="catalog-header">
          <div className="catalog-header-left">
            <p className="section-label">Nuestras colecciones</p>
            <h2>Estantes Digitales</h2>
          </div>
          <div className="catalog-header-right">
            12 categorías<span className="divider" />Envíos a todo México
          </div>
        </div>

        <div className="cat-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </section>

      {/* ── VITRINA DE LIBROS ── */}
      <div className="books-row">
        <p className="books-row-label">Títulos recientes</p>
        <div className="books-track">
          {bookImages.map((src, i) => (
            <div key={i} className="book-item">
              <img src={src} alt="libro" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS ── */}
      <section className="services-section">
        <div className="service-block dark" id="buscador">
          <p className="section-label gold">Servicio personalizado</p>
          <h2>¿No encuentras lo que buscas?</h2>
          <p>
            Nuestro acervo físico supera lo que mostramos en línea. Si buscas una edición
            específica, un autor particular o un título descatalogado, pregúntanos — somos
            tu buscador humano.
          </p>
          <a
            href={createWhatsAppLink(customSearchMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Consultar por WhatsApp
          </a>
        </div>

        <div className="service-block light" id="vender">
          <p className="section-label">Segunda mano</p>
          <h2>¿Quieres vender tus libros?</h2>
          <p>
            Ayudamos a que tus libros encuentren un nuevo hogar. Cuéntanos qué tienes y
            platicamos el proceso sin compromiso.
          </p>
          <a
            href={createWhatsAppLink(sellBooksMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            Comenzar el proceso
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <h3>El Anaquel Dorado</h3>
            <p>Guadalajara, Jalisco — Envíos a todo México</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Catálogo</h4>
              <ul>
                <li><a href="#catalogo">Todas las categorías</a></li>
                <li>
                  <a href={createWhatsAppLink(customSearchMsg)} target="_blank" rel="noopener noreferrer">
                    Búsqueda personalizada
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <ul>
                <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} El Anaquel Dorado<span className="dot">·</span>Hecho en Zapopan</p>
          <p>Librería Virtual de Segunda Mano</p>
        </div>
      </footer>

    </div>
  );
}