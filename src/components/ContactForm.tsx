import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    occasion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <section id="contacto" className="py-24 bg-aged-paper relative vintage-stain">
      <div className="absolute inset-0 bg-vintage-pattern opacity-30"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-dancing text-sepia mb-6 vintage-text-shadow">
              Contáctanos
            </h2>
            <p className="text-xl font-crimson text-sepia leading-relaxed">
              Estamos aquí para hacer realidad tus sueños más dulces
            </p>
            <div className="flex justify-center mt-6">
              <div className="w-40 h-2 bg-gradient-to-r from-transparent via-vintage-gold to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-10">
              <div className="aged-paper p-10 rounded-lg shadow-2xl ornate-corner">
                <h3 className="text-4xl font-dancing text-sepia mb-8 vintage-text-shadow">
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center mt-1 shadow-lg">
                      <span className="text-sepia text-lg">📍</span>
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-sepia text-xl mb-2">Dirección</h4>
                      <p className="font-crimson text-sepia text-lg leading-relaxed"><br />Contactar para más información</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center mt-1 shadow-lg">
                      <span className="text-sepia text-lg">📞</span>
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-sepia text-xl mb-2">Teléfono</h4>
                      <p className="font-crimson text-sepia text-lg">+34 699990552</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center mt-1 shadow-lg">
                      <span className="text-sepia text-lg">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-sepia text-xl mb-2">Email</h4>
                      <p className="font-crimson text-sepia text-lg">elpostrecitodeisabel@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-vintage-gold rounded-full flex items-center justify-center mt-1 shadow-lg">
                      <span className="text-sepia text-lg">🕐</span>
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-sepia text-xl mb-2">Horarios</h4>
                      <p className="font-crimson text-sepia text-lg leading-relaxed">
                        Lunes - Viernes: 8:00 - 20:00<br />
                        Sábados: 9:00 - 21:00<br />
                        Domingos: 10:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative vintage element */}
              <div className="text-center p-8 aged-paper rounded-lg shadow-2xl ornate-corner">
                <p className="text-2xl font-dancing text-sepia italic mb-4 vintage-text-shadow">
                  "Los pedidos especiales requieren 48h de anticipación"
                </p>
                <div className="w-20 h-1 bg-vintage-gold mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="aged-paper p-10 rounded-lg shadow-2xl ornate-corner">
              <h3 className="text-4xl font-dancing text-sepia mb-8 vintage-text-shadow">
                Envíanos un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-playfair font-semibold text-sepia mb-3">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-vintage-gold/40 rounded-lg focus:border-vintage-gold focus:outline-none bg-aged-paper/70 font-crimson text-lg shadow-inner"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-lg font-playfair font-semibold text-sepia mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-vintage-gold/40 rounded-lg focus:border-vintage-gold focus:outline-none bg-aged-paper/70 font-crimson text-lg shadow-inner"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-lg font-playfair font-semibold text-sepia mb-3">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-vintage-gold/40 rounded-lg focus:border-vintage-gold focus:outline-none bg-aged-paper/70 font-crimson text-lg shadow-inner"
                      placeholder="+34 123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="occasion" className="block text-lg font-playfair font-semibold text-sepia mb-3">
                    Ocasión Especial
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-vintage-gold/40 rounded-lg focus:border-vintage-gold focus:outline-none bg-aged-paper/70 font-crimson text-lg shadow-inner"
                  >
                    <option value="">Selecciona una ocasión</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="boda">Boda</option>
                    <option value="bautizo">Bautizo</option>
                    <option value="comunion">Primera Comunión</option>
                    <option value="aniversario">Aniversario</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-playfair font-semibold text-sepia mb-3">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-vintage-gold/40 rounded-lg focus:border-vintage-gold focus:outline-none bg-aged-paper/70 font-crimson resize-none text-lg shadow-inner"
                    placeholder="Cuéntanos sobre tu pedido especial..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-vintage-brown text-vintage-gold py-5 px-8 rounded-lg font-playfair font-semibold text-xl hover:bg-sepia transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 ornate-border"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;