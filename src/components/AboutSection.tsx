import React from 'react';
import rb8 from '../assets/rb8.jpg';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-gradient-to-b from-sky-blue/8 to-aged-paper relative overflow-hidden vintage-stain">
      {/* Lace pattern background */}
      <div className="absolute inset-0 lace-pattern opacity-30"></div>
      
      {/* Decorative floral elements */}
      <div className="absolute top-12 left-12 w-40 h-40 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-vintage-gold">
          <path d="M50,10 C60,20 80,30 70,50 C80,70 60,80 50,90 C40,80 20,70 30,50 C20,30 40,20 50,10 Z" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 w-32 h-32 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-sepia">
          <path d="M50,15 C65,25 75,40 65,55 C75,70 65,85 50,85 C35,85 25,70 35,55 C25,40 35,25 50,15 Z" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-dancing text-sepia mb-8 vintage-text-shadow">
              Nuestra Historia
            </h2>
            <div className="w-32 h-2 bg-vintage-gold mx-auto mb-8 rounded-full shadow-lg"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Ornate frame */}
              <div className="absolute -inset-8 bg-vintage-brown rounded-lg transform rotate-3 ornate-border"></div>
              <div className="absolute -inset-6 bg-vintage-gold/40 rounded-lg transform -rotate-2"></div>
              <div className="absolute -inset-4 bg-sky-blue/60 rounded-lg transform rotate-1"></div>
              <div className="relative bg-aged-paper p-6 rounded-lg shadow-2xl ornate-corner">
                <img 
                  src={rb8}
                  alt="Nuestra historia"
                  className="w-full h-96 object-cover rounded-lg sepia-enhanced"
                />
                <div className="absolute -bottom-3 -right-3 bg-aged-paper p-3 rounded-lg shadow-xl border-2 border-vintage-gold">
                  <p className="text-sm font-dancing text-sepia vintage-text-shadow">El Postrecito</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="aged-paper p-10 rounded-lg shadow-2xl ornate-corner">
                <h3 className="text-4xl font-dancing text-sepia mb-6 vintage-text-shadow">
                  Una Tradición Familiar
                </h3>
                <p className="font-crimson text-sepia leading-relaxed mb-6 text-lg">
                  Isabel abrió las puertas de su pequeña pastelería con un sueño: 
                  crear momentos dulces que perduraran en la memoria de las familias. 
                  Con recetas heredadas de su abuela y una pasión inquebrantable por la repostería, 
                  comenzó esta hermosa aventura.
                </p>
                <p className="font-crimson text-sepia leading-relaxed mb-6 text-lg">
                  Cada pastel que sale de nuestro horno lleva consigo 25 años de experiencia, 
                  amor y dedicación. Utilizamos solo ingredientes naturales y técnicas artesanales 
                  que han sido perfeccionadas a lo largo de las décadas.
                </p>
                <p className="font-crimson text-sepia leading-relaxed text-lg">
                  Hoy continuamos esta tradición, manteniendo vivo el espíritu 
                  vintage que nos caracteriza y la calidad que nos ha convertido en el corazón 
                  dulce de nuestra comunidad.
                </p>
              </div>

              {/* Decorative vintage elements */}
              <div className="flex justify-center space-x-12 mt-10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-vintage-brown rounded-full flex items-center justify-center mb-4 shadow-2xl ornate-border">
                    <span className="text-3xl font-dancing text-vintage-gold vintage-text-shadow">30</span>
                  </div>
                  <p className="text-base font-crimson text-sepia font-semibold">Años de tradición</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-vintage-gold rounded-full flex items-center justify-center mb-4 shadow-2xl ornate-border">
                    <span className="text-3xl font-dancing text-sepia vintage-text-shadow">+</span>
                  </div>
                  <p className="text-base font-crimson text-sepia font-semibold">Miles de momentos dulces</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vintage lace border */}
          <div className="mt-20 border-t-4 border-b-4 border-vintage-gold border-opacity-60 py-12 lace-pattern">
            <div className="text-center">
              <p className="text-3xl font-dancing text-sepia italic vintage-text-shadow mb-4">
                "Cada pastel cuenta una historia, cada bocado es un recuerdo"
              </p>
              <p className="text-xl font-crimson text-sepia font-semibold">- Isabel Miñor, Fundadora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;