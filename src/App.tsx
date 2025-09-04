import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-aged-paper">
      {/* Header */}
      <header className="relative bg-gradient-to-r from-sky-blue via-vintage-gold to-vintage-brown shadow-2xl ornate-corner">
        <div className="absolute inset-0 bg-paper-texture opacity-40"></div>
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/src/assets/El postrecito logo sin fondo.png" 
                alt="El Postrecito de Isabel Logo" 
                className="w-20 h-20 object-contain"
              />
              <div>
                <h1 className="text-5xl font-dancing text-antique-white vintage-text-shadow">
                  El Postrecito de Isabel
                </h1>
                <p className="text-antique-white/90 font-crimson italic text-lg">Dulces tradiciones desde 1975</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-6">
            <ul className="flex space-x-8 justify-center">
              {['Inicio', 'Sobre Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-antique-white font-playfair text-xl hover:text-vintage-gold transition-all duration-300 relative group vintage-text-shadow"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-vintage-gold rounded-full transition-all duration-300 group-hover:w-full shadow-lg"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App