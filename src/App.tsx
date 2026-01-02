import { useState, useEffect, useRef } from 'react';
import { 
  Code, Cloud, Zap, Brain, Bug, Shield, Server, MessageSquare, 
  Palette, Layout, Database, GraduationCap, Users, ArrowRight,
  Menu, X, Sparkles, ChevronRight, Globe, Rocket, Star
} from 'lucide-react';

const services = [
  { icon: Code, title: "Frontend & Backend", desc: "Apps web next-gen performantes", color: "from-blue-500 to-cyan-500" },
  { icon: Cloud, title: "DevOps", desc: "Infrastructure cloud moderne", color: "from-purple-500 to-pink-500" },
  { icon: Zap, title: "Automatisation", desc: "Workflows intelligents", color: "from-yellow-500 to-orange-500" },
  { icon: Brain, title: "Intégration IA", desc: "Intelligence artificielle avancée", color: "from-green-500 to-emerald-500" },
  { icon: Bug, title: "Testeur QA", desc: "Qualité irréprochable", color: "from-red-500 to-rose-500" },
  { icon: Shield, title: "Bug Bounty", desc: "Sécurité maximale", color: "from-indigo-500 to-violet-500" },
  { icon: Server, title: "Pterodactyl Panels", desc: "Gestion serveurs pro", color: "from-teal-500 to-cyan-500" },
  { icon: MessageSquare, title: "Bots Messaging", desc: "WhatsApp & Telegram pro", color: "from-pink-500 to-purple-500" },
  { icon: Palette, title: "Graphisme", desc: "Identité visuelle unique", color: "from-orange-500 to-red-500" },
  { icon: Layout, title: "UI/UX Design", desc: "Expériences inoubliables", color: "from-blue-500 to-purple-500" },
  { icon: Database, title: "VPS Hosting", desc: "Performance ultime", color: "from-green-500 to-teal-500" },
  { icon: GraduationCap, title: "Formation", desc: "Expertise tech garantie", color: "from-yellow-500 to-pink-500" },
  { icon: Users, title: "Accompagnement", desc: "Support dédié 24/7", color: "from-cyan-500 to-blue-500" }
];

const stats = [
  { value: "500+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "24/7", label: "Support actif" },
  { value: "50+", label: "Experts tech" }
];

export default function WemoveLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-[128px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-lg rotate-45 group-hover:rotate-[405deg] transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                WEMOVE
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['services', 'expertise', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-sm font-medium uppercase tracking-wider text-white/60 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Commencer
              </button>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/90 backdrop-blur-2xl border-b border-white/5`}>
          <div className="px-4 py-6 space-y-3">
            {['services', 'expertise', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white/5 rounded-xl transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Startup Tech • Innovation • Excellence
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
            
            {/* Main Title with Gradient */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-pulse">
                WE MOVE
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                TO THE WORLD
              </span>
            </h1>
            
            {/* Subtitle with Typewriter Effect */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Des solutions digitales <span className="text-purple-400 font-bold">sur-mesure</span> pour propulser votre business.
              <br className="hidden sm:block" />
              Du code à l'infra, de l'IA au design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explorer nos services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 border-2 border-white/20 rounded-full font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-xl hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  Discuter du projet
                  <Rocket size={20} className="group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section with Bento Grid */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Star size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-purple-400">13 Services Premium</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              NOS EXPERTISES
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Une gamme complète de services pour transformer vos idées en réalité digitale
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative p-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/[0.05] transition-all duration-500 cursor-pointer overflow-hidden ${
                  idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                } ${idx === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/10 group-hover:border-white/30 transition-colors rounded-tr-2xl" />
                
                {/* Icon with Gradient */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={idx === 0 ? 40 : 28} className="text-white" />
                </div>
                
                <h3 className={`font-bold mb-3 ${idx === 0 ? 'text-3xl' : 'text-xl'}`}>
                  {service.title}
                </h3>
                <p className={`text-white/50 mb-6 ${idx === 0 ? 'text-lg' : 'text-sm'}`}>
                  {service.desc}
                </p>
                
                {/* Hover CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Découvrir
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-20 blur-xl`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Showcase */}
      <section id="expertise" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Globe size={16} className="text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Innovation Mondiale</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6">
                Une équipe d'<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">experts passionnés</span>
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Nous combinons expertise technique, créativité et vision stratégique pour 
                créer des solutions qui marquent les esprits et transforment les business.
              </p>
              <div className="space-y-4">
                {[
                  "Code de qualité production-ready",
                  "Architecture scalable et moderne", 
                  "Support réactif et accompagnement",
                  "Livraison dans les délais"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ChevronRight size={14} className="text-white" />
                    </div>
                    <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Technologies", value: "50+" },
                  { label: "Années d'exp", value: "15+" },
                  { label: "Pays", value: "25+" },
                  { label: "Satisfaction", value: "98%" }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                      {item.value}
                    </div>
                    <div className="text-sm text-white/60">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl -z-10" />
          
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 sm:p-16">
            <Rocket size={48} className="mx-auto mb-6 text-purple-400" />
            <h2 className="text-4xl sm:text-6xl font-black mb-6">
              Prêt à <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">bouger</span> ?
            </h2>
            <p className="text-xl text-white/60 mb-10 leading-relaxed">
              Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
            </p>
            
            <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-black text-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center justify-center gap-3">
                Démarrer maintenant
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <p className="text-sm text-white/40 mt-8">
              Réponse sous 24h • Devis gratuit • Consultation offerte
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg rotate-45" />
              <div>
                <div className="text-xl font-black">WEMOVE</div>
                <div className="text-xs text-white/40">We move to the world</div>
              </div>
            </div>
            
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-white/30">
            © 2024 WEMOVE. Tous droits réservés. Fait avec ❤️ par notre équipe.
          </div>
        </div>
      </footer>
    </div>
  );
}
