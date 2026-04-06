import { useEffect } from 'react';
import CatalogPage from './CatalogPage';

// ==========================================
// CONFIGURACIÓN
// ==========================================
const WHATSAPP_NUMBER = "5213320479915";

const createWhatsAppLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

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

      {/* ── CATÁLOGO DINÁMICO ── */}
      {/*
        CatalogPage tiene su propio layout interno (sidebar + grid).
        El wrapper #catalogo solo sirve como ancla para el scroll del nav.
        padding-top: 0 anula el que CatalogPage se pone a sí misma,
        porque aquí no está flotando sola — está dentro del flujo normal de App.
      */}
      <div id="catalogo" style={{ paddingTop: 0 }}>
        <CatalogPage />
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
                  <a
                    href={createWhatsAppLink(customSearchMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Búsqueda personalizada
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <ul>
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
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