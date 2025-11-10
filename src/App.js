import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollDirection = scrollPosition > lastScrollY ? 'down' : 'up';
      const letters = document.querySelectorAll(".floating-letter");
      const subtitle = document.querySelector(".subtitle-text");
      
      // Detección de sección activa
      const sections = document.querySelectorAll('section[id], div[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });
      
      // Actualizar nav links activos
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
      
      letters.forEach((letter) => {
        if (scrollPosition > 10) {
          if (!letter.classList.contains("exit")) {
            letter.classList.remove("enter");
            letter.classList.add("exit");
          }
        } else {
          if (letter.classList.contains("exit")) {
            letter.classList.remove("exit");
            letter.classList.add("enter");
          }
        }
      });

      if (subtitle) {
        if (scrollPosition > 150) {
          if (!subtitle.classList.contains("subtitle-exit")) {
            subtitle.classList.remove("subtitle-enter");
            subtitle.classList.add("subtitle-exit");
          }
        } else {
          if (subtitle.classList.contains("subtitle-exit")) {
            subtitle.classList.remove("subtitle-exit");
            subtitle.classList.add("subtitle-enter");
          }
        }
      }

      const socialContainer = document.querySelector(".social-media-container");
      if (socialContainer) {
        if (scrollPosition > 10) {
          if (scrollDirection === 'down' && !socialContainer.classList.contains("social-slide-right")) {
            socialContainer.classList.remove("social-slide-left");
            socialContainer.classList.add("social-slide-right");
          }
          else if (scrollDirection === 'up' && !socialContainer.classList.contains("social-slide-left")) {
            socialContainer.classList.remove("social-slide-right");
            socialContainer.classList.add("social-slide-left");
          }
        } 
      }

      lastScrollY = scrollPosition;
    };

    setTimeout(() => {
      const letters = document.querySelectorAll(".floating-letter");
      const subtitle = document.querySelector(".subtitle-text");
      
      letters.forEach((letter) => {
        letter.classList.add("enter");
      });
      
      if (subtitle) {
        subtitle.classList.add("subtitle-enter");
      }
      
      // Establecer nav activo inicial
      const inicioNav = document.querySelector('a[href="#inicio"]');
      if (inicioNav) {
        inicioNav.classList.add('active');
      }
    }, 100);

    // Carrusel de valores
    let currentIndex = 0;
    const valuesCarousel = document.querySelector('.values-carousel');

    const slideCarousel = () => {
      if (valuesCarousel) {
        currentIndex = currentIndex === 0 ? 1 : 0; // Alterna entre 0 (primeros 3) y 1 (últimos 3)
        const translateX = -(currentIndex * 50); // 50% para mostrar los segundos 3 valores
        valuesCarousel.style.transform = `translateX(${translateX}%)`;
      }
    };

    const carouselInterval = setInterval(slideCarousel, 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(carouselInterval);
    };
  }, []);

  return (
    <div className="App">
      <header className="landing-header">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src="logo.png"
              alt="Lumina Logo"
              className="logo-image"
              width={40}
              height={40}
            />
            <span className="logo-text">LUMINA</span>
          </div>
          <nav className="navbar-nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#inicio" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#productos" className="nav-link">
                  Nuestra Esencia
                </a>
              </li>
              {/* <li className="nav-item">
                <a href="#beneficios" className="nav-link">
                  Beneficios
                </a>
              </li>
              <li className="nav-item">
                <a href="#contacto" className="nav-link">
                  Contacto
                </a>
              </li> */}
            </ul>
          </nav>
          {/* <div className="navbar-cta">
            <button className="cta-button">Comprar Ahora</button>
          </div> */}
        </div>
      </header>
      <div className="landing-title" id="inicio">
        <h1 className="animated-title">
          <span className="floating-letter floating-letter-L">L</span>
          <span className="floating-letter floating-letter-U">U</span>
          <span className="floating-letter floating-letter-M">M</span>
          <span className="floating-letter floating-letter-I">I</span>
          <span className="floating-letter floating-letter-N">N</span>
          <span className="floating-letter floating-letter-A">A</span>
        </h1>
        <h2 className="subtitle-text">Poder de limpieza</h2>
      </div>
      <main className="main-content">
        <div className="bubbles-background">
          <div className="bubble-bg bubble-bg-1"></div>
          <div className="bubble-bg bubble-bg-2"></div>
          <div className="bubble-bg bubble-bg-3"></div>
          <div className="bubble-bg bubble-bg-4"></div>
          <div className="bubble-bg bubble-bg-5"></div>
          <div className="bubble-bg bubble-bg-6"></div>
          <div className="bubble-bg bubble-bg-7"></div>
          <div className="bubble-bg bubble-bg-8"></div>
          <div className="bubble-bg bubble-bg-9"></div>
          <div className="bubble-bg bubble-bg-10"></div>
          <div className="bubble-bg bubble-bg-11"></div>
          <div className="bubble-bg bubble-bg-12"></div>
          <div className="bubble-bg bubble-bg-13"></div>
          <div className="bubble-bg bubble-bg-14"></div>
          <div className="bubble-bg bubble-bg-15"></div>
          <div className="bubble-bg bubble-bg-16"></div>
          <div className="bubble-bg bubble-bg-17"></div>
          <div className="bubble-bg bubble-bg-18"></div>
          <div className="bubble-bg bubble-bg-19"></div>
          <div className="bubble-bg bubble-bg-20"></div>
        </div>
        <div className="lumina-container">
          <img src="lumina_b.jpg" className="lumina" alt="Lumina" />
        </div>
      </main>
      <section className="mission-vision-section" id="productos">
        <div className="mission-vision-container">
          <div className="section-header">
            <h2 className="section-title">Nuestra Esencia</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon mission-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="card-title">Nuestra Misión</h3>
              <p className="card-description">
                Fabricar y ofrecer un detergente en polvo accesible y efectivo que cuide las manos de las familias, utilice ingredientes responsables y demuestre que los productos de limpieza pueden ser seguros para las personas y el planeta.
              </p>
            </div>
    
            <div className="vision-card">
              <div className="card-icon vision-icon">
                <svg viewBox="0 0 24 24" className="icon">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <h3 className="card-title">Nuestra Visión</h3>
              <p className="card-description">
                Ser la marca de detergente de referencia para hogares que buscan una limpieza consciente, reconocida por devolver a lo esencial: eficacia sin químicos agresivos, precios justos y un compromiso auténtico con la sostenibilidad.
              </p>
            </div>
          </div>
          
          <div className="values-section">
            <p className="values-title">Nuestros Valores</p>
            <div className="values-carousel-container">
              <div className="values-carousel">
                <div className="value-item">
                  <span className="value-icon">🛡️</span>
                  <span className="value-text">Integridad</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">💎</span>
                  <span className="value-text">Honestidad</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">💡</span>
                  <span className="value-text">Innovación</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🎨</span>
                  <span className="value-text">Creatividad</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <span className="value-text">Orientación al cliente</span>
                </div>
                <div className="value-item">
                  <span className="value-icon">⚖️</span>
                  <span className="value-text">Responsabilidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="social-media-container">
        <a href="https://www.facebook.com/share/19p7kraMyz/" className="social-link facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" className="social-icon">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        
        <a href="https://wa.link/tbhz98" className="social-link whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" className="social-icon">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
          </svg>
        </a>
        
        <a href="https://www.tiktok.com/@lumina_oficial10?is_from_webapp=1&sender_device=pc" className="social-link tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" className="social-icon">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
