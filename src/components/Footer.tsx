import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-vintage-brown via-sepia to-vintage-brown text-antique-white relative overflow-hidden">
      {/* Retro pattern background */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="retro-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="4" fill="#D4AF37" opacity="0.6" />
              <circle cx="5" cy="5" r="2" fill="#D4AF37" opacity="0.4" />
              <circle cx="15" cy="15" r="2" fill="#D4AF37" opacity="0.4" />
              <rect x="8" y="8" width="4" height="4" fill="#8B4513" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#retro-pattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-aged-paper rounded-full flex items-center justify-center border-4 border-vintage-gold shadow-2xl ornate-border">
                <span className="text-3xl font-dancing text-sepia vintage-text-shadow">I</span>
              </div>
              <div>
                <h3 className="text-4xl font-dancing vintage-text-shadow">El Postrecito de Isabel</h3>
                <p className="text-antique-white/90 font-crimson italic text-lg">Dulces tradiciones desde 1975</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-sepia transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-sepia transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center hover:bg-vintage-gold hover:text-sepia transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-playfair font-semibold mb-8 relative vintage-text-shadow">
              Enlaces Rápidos
              <div className="absolute -bottom-3 left-0 w-16 h-1 bg-vintage-gold rounded-full shadow-lg"></div>
            </h4>
            <ul className="space-y-4 font-crimson text-lg">
              <li><a href="#inicio" className="hover:text-vintage-gold transition-colors duration-300">Inicio</a></li>
              <li><a href="#productos" className="hover:text-vintage-gold transition-colors duration-300">Productos</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-vintage-gold transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-vintage-gold transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-playfair font-semibold mb-8 relative vintage-text-shadow">
              Contacto
              <div className="absolute -bottom-3 left-0 w-16 h-1 bg-vintage-gold rounded-full shadow-lg"></div>
            </h4>
            <div className="space-y-5 font-crimson text-lg">
              <div className="flex items-start space-x-4">
                <span className="text-vintage-gold mt-1 text-xl">📍</span>
                <div>
                  <p className="leading-relaxed"></p>
                  <p>Contactar para más información</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-vintage-gold text-xl">📞</span>
                <p>+34 699990552</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-vintage-gold text-xl">✉️</span>
                <p>elpostrecitodeisabel@gmail.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-vintage-gold mt-1 text-xl">🕐</span>
                <div>
                  <p className="leading-relaxed">Lun-Vie: 8:00-20:00</p>
                  <p>Sáb: 9:00-21:00</p>
                  <p>Dom: 10:00-18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative vintage border */}
        <div className="mt-16 pt-12 border-t-2 border-vintage-gold/40">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-1 bg-vintage-gold/60 rounded-full"></div>
              <div className="w-4 h-4 border-2 border-vintage-gold/60 rounded-full shadow-lg"></div>
              <div className="w-32 h-1 bg-vintage-gold/60 rounded-full"></div>
              <div className="w-6 h-6 bg-vintage-gold rounded-full shadow-lg"></div>
              <div className="w-32 h-1 bg-vintage-gold/60 rounded-full"></div>
              <div className="w-4 h-4 border-2 border-vintage-gold/60 rounded-full shadow-lg"></div>
              <div className="w-20 h-1 bg-vintage-gold/60 rounded-full"></div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-crimson text-antique-white/90 mb-4 text-lg">
              © 2025 El Postrecito de Isabel. Todos los derechos reservados.
            </p>
            <p className="font-dancing text-2xl text-vintage-gold italic vintage-text-shadow">
              "Endulzando vidas desde 2000"
            </p>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-vintage-gold">
          <path d="M0,0 Q50,25 100,0 Q75,50 100,100 Q50,75 0,100 Q25,50 0,0 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10 transform rotate-180">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-vintage-gold">
          <path d="M0,0 Q50,25 100,0 Q75,50 100,100 Q50,75 0,100 Q25,50 0,0 Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;