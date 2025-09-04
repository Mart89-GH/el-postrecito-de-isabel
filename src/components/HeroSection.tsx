import React from 'react';
const pastelesClasicos = 'pasteles-clasicos.png';
const cupcakesArtesanales = 'cupcakes-artesanales.png';
const tartasEspeciales = 'tartas-especiales.jpg';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative py-24 bg-gradient-to-b from-sky-blue/15 to-aged-paper vintage-stain">
      <div className="absolute inset-0 bg-vintage-pattern opacity-40"></div>
      <div className="absolute inset-0 lace-pattern opacity-20"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-7xl font-dancing text-sepia mb-6 vintage-text-shadow">
            Servicio de Repostería Online a Demanda
          </h2>
          <p className="text-2xl font-crimson text-sepia max-w-3xl mx-auto leading-relaxed">
            Desde 1975, creamos momentos especiales con nuestros pasteles artesanales bajo pedido. 
            Contáctanos para solicitar tu dulce personalizado, elaborado con amor y las mejores tradiciones familiares.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Ornate Frame 1 */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-vintage-brown rounded-lg transform rotate-2 group-hover:rotate-0 transition-transform duration-500 ornate-border"></div>
            <div className="absolute -inset-4 bg-vintage-gold/30 rounded-lg transform -rotate-1 group-hover:rotate-0 transition-transform duration-400"></div>
            <div className="relative bg-aged-paper p-8 rounded-lg shadow-2xl aged-paper ornate-corner">
              <div className="aspect-square bg-gradient-to-br from-sky-blue/20 to-vintage-brown/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={pastelesClasicos} 
                  alt="Pasteles clásicos"
                  className="w-full h-full object-cover rounded-lg sepia-enhanced"
                />
              </div>
              <h3 className="text-3xl font-dancing text-sepia text-center mb-3 vintage-text-shadow">Pasteles Clásicos</h3>
              <p className="text-sepia font-crimson text-center text-lg leading-relaxed">Recetas tradicionales bajo pedido</p>
            </div>
          </div>

          {/* Ornate Frame 2 */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-sky-blue rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 ornate-border"></div>
            <div className="absolute -inset-4 bg-vintage-gold/30 rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-400"></div>
            <div className="relative bg-aged-paper p-8 rounded-lg shadow-2xl aged-paper ornate-corner">
              <div className="aspect-square bg-gradient-to-br from-vintage-brown/20 to-sky-blue/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={cupcakesArtesanales} 
                  alt="Cupcakes artesanales"
                  className="w-full h-full object-cover rounded-lg sepia-enhanced"
                />
              </div>
              <h3 className="text-3xl font-dancing text-sepia text-center mb-3 vintage-text-shadow">Cupcakes Artesanales</h3>
              <p className="text-sepia font-crimson text-center text-lg leading-relaxed">Pequeñas obras de arte personalizadas</p>
            </div>
          </div>

          {/* Ornate Frame 3 */}
          <div className="relative group">
            <div className="absolute -inset-6 bg-vintage-brown rounded-lg transform rotate-1 group-hover:rotate-0 transition-transform duration-500 ornate-border"></div>
            <div className="absolute -inset-4 bg-vintage-gold/30 rounded-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-400"></div>
            <div className="relative bg-aged-paper p-8 rounded-lg shadow-2xl aged-paper ornate-corner">
              <div className="aspect-square bg-gradient-to-br from-sky-blue/20 to-vintage-brown/20 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={tartasEspeciales} 
                  alt="Tartas especiales"
                  className="w-full h-full object-cover rounded-lg sepia-enhanced"
                />
              </div>
              <h3 className="text-3xl font-dancing text-sepia text-center mb-3 vintage-text-shadow">Tartas Especiales</h3>
              <p className="text-sepia font-crimson text-center text-lg leading-relaxed">Diseños únicos para tus celebraciones</p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-20">
          <div className="w-40 h-2 bg-gradient-to-r from-transparent via-vintage-gold to-transparent rounded-full"></div>
          <div className="mx-6 w-12 h-12 bg-vintage-brown rounded-full flex items-center justify-center shadow-lg ornate-border">
            <div className="w-6 h-6 bg-vintage-gold rounded-full"></div>
          </div>
          <div className="w-40 h-2 bg-gradient-to-r from-transparent via-vintage-gold to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;