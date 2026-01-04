import { useState, useEffect, useRef } from 'react';
import { 
  Code, Cloud, Zap, Brain, Bug, Shield, Server, MessageSquare, 
  Palette, Layout, Database, GraduationCap, Users, ArrowRight,
  Menu, X, Sparkles, ChevronRight, Globe, Rocket, Star, Check
} from 'lucide-react';

const services = [
  { icon: Code, title: "Frontend & Backend", desc: "Apps web next-gen performantes", color: "from-blue-500 to-cyan-500", delay: 0 },
  { icon: Cloud, title: "DevOps", desc: "Infrastructure cloud moderne", color: "from-purple-500 to-pink-500", delay: 0.1 },
  { icon: Zap, title: "Automatisation", desc: "Workflows intelligents", color: "from-yellow-500 to-orange-500", delay: 0.2 },
  { icon: Brain, title: "Intégration IA", desc: "Intelligence artificielle avancée", color: "from-green-500 to-emerald-500", delay: 0.3 },
  { icon: Bug, title: "Testeur QA", desc: "Qualité irréprochable", color: "from-red-500 to-rose-500", delay: 0.4 },
  { icon: Shield, title: "Bug Bounty", desc: "Sécurité maximale", color: "from-indigo-500 to-violet-500", delay: 0.5 },
  { icon: Server, title: "Pterodactyl Panels", desc: "Gestion serveurs pro", color: "from-teal-500 to-cyan-500", delay: 0.6 },
  { icon: MessageSquare, title: "Bots Messaging", desc: "WhatsApp & Telegram pro", color: "from-pink-500 to-purple-500", delay: 0.7 },
  { icon: Palette, title: "Graphisme", desc: "Identité visuelle unique", color: "from-orange-500 to-red-500", delay: 0.8 },
  { icon: Layout, title: "UI/UX Design", desc: "Expériences inoubliables", color: "from-blue-500 to-purple-500", delay: 0.9 },
  { icon: Database, title: "VPS Hosting", desc: "Performance ultime", color: "from-green-500 to-teal-500", delay: 1.0 },
  { icon: GraduationCap, title: "Formation", desc: "Expertise tech garantie", color: "from-yellow-500 to-pink-500", delay: 1.1 },
  { icon: Users, title: "Accompagnement", desc: "Support dédié 24/7", color: "from-cyan-500 to-blue-500", delay: 1.2 }
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
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden relative">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 opacity-40">
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />
        <div 
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${-mousePosition.y * 0.025}px)`
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-noise mix-blend-overlay" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div 
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl rotate-12 group-hover:rotate-180 transition-all duration-700 shadow-lg shadow-purple-500/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  WEMOVE
                </span>
                <div className="text-[10px] text-white/40 font-medium tracking-widest">DIGITAL AGENCY</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['services', 'expertise', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-sm font-semibold uppercase tracking-wider text-white/60 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 group-hover:w-full transition-all duration-500" />
                </button>
              ))}
              <button className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-sm overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
                <span className="relative z-10">Commencer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-xl transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10`}>
          <div className="px-4 py-6 space-y-2">
            {['services', 'expertise', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
        {/* Animated grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
          }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Floating badge */}
            <div 
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-500/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="relative">
                <Sparkles size={16} className="text-purple-400 animate-pulse" />
                <div className="absolute inset-0 blur-md bg-purple-400 animate-pulse" />
              </div>
              <span className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Startup Tech • Innovation • Excellence
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            </div>
            
            {/* Main Title with stagger animation */}
            <div className="space-y-4">
              <h1 
                className={`text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '0.2s' }}
              >
                <span className="block bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                  WE MOVE
                </span>
              </h1>
              <h2 
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient-x">
                  TO THE WORLD
                </span>
              </h2>
            </div>
            
            {/* Subtitle */}
            <p 
              className={`text-xl sm:text-2xl md:text-3xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Des solutions digitales <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold">sur-mesure</span> pour propulser votre business.
              <br className="hidden sm:block" />
              Du code à l'infra, de l'IA au design.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center pt-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Explorer nos services
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl animate-pulse" />
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-2xl font-bold text-lg hover:border-purple-500/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Discuter du projet
                  <Rocket size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            {/* Stats with stagger */}
            <div 
              className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 max-w-5xl mx-auto transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-110 overflow-hidden"
                  style={{ 
                    transitionDelay: `${1 + idx * 0.1}s`,
                    animation: isVisible ? `fadeInUp 0.6s ease-out ${1 + idx * 0.1}s both` : 'none'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-8 h-14 border-2 border-white/20 rounded-full flex justify-center pt-3 animate-bounce">
            <div className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-transparent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section with cards animation */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8 hover:bg-purple-500/20 transition-all duration-300">
              <Star size={16} className="text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-bold text-purple-400">13 Services Premium</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              NOS EXPERTISES
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
              Une gamme complète de services pour transformer vos idées en réalité digitale
            </p>
          </div>

          {/* Modern card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-700 cursor-pointer overflow-hidden hover:scale-105 hover:-translate-y-2 ${
                  idx === 0 ? 'lg:col-span-2 lg:row-span-2 p-12' : ''
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${service.delay}s both`
                }}
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 -z-10`} />
                
                {/* Animated icon */}
                <div className="relative z-10">
                  <div className={`inline-flex p-5 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <service.icon size={idx === 0 ? 48 : 32} className="text-white" />
                  </div>
                  
                  <h3 className={`font-black mb-3 group-hover:text-white transition-colors duration-300 ${idx === 0 ? 'text-4xl' : 'text-2xl'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-white/60 group-hover:text-white/80 mb-6 transition-colors duration-300 ${idx === 0 ? 'text-lg' : 'text-base'}`}>
                    {service.desc}
                  </p>
                  
                  {/* Animated CTA */}
                  <div className="flex items-center gap-2 text-sm font-bold text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 group-hover:translate-x-2">
                    <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Découvrir</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-full blur-3xl group-hover:blur-2xl transition-all duration-700`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Showcase with parallax effect */}
      <section id="expertise" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full hover:bg-blue-500/20 transition-all duration-300">
                <Globe size={16} className="text-blue-400" />
                <span className="text-sm font-bold text-blue-400">Innovation Mondiale</span>
              </div>
              <h2 className="text-5xl sm:text-6xl font-black leading-tight">
                Une équipe d'<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">experts passionnés</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Nous combinons expertise technique, créativité et vision stratégique pour 
                créer des solutions qui marquent les esprits et transforment les business.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Code de qualité production-ready",
                  "Architecture scalable et moderne", 
                  "Support réactif et accompagnement",
                  "Livraison dans les délais"
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300"
                    style={{
                      animation: `fadeInLeft 0.6s ease-out ${idx * 0.1}s both`
                    }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-purple-500/30">
                      <Check size={20} className="text-white" />
                    </div>
                    <span className="text-lg text-white/80 group-hover:text-white font-medium transition-colors duration-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Technologies", value: "50+", icon: Code },
                  { label: "Années d'exp", value: "15+", icon: Rocket },
                  { label: "Pays", value: "25+", icon: Globe },
                  { label: "Satisfaction", value: "98%", icon: Star }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group relative p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl hover:border-purple-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 overflow-hidden"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${0.2 + idx * 0.1}s both`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10" />
                    
                    <div className="relative z-10">
                      <item.icon size={24} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.value}
                      </div>
                      <div className="text-sm text-white/60 font-medium">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with 3D effect */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Animated gradient orb */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 rounded-full blur-[120px] animate-pulse" />
          </div>
          
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 sm:p-20 hover:border-white/20 transition-all duration-700 group overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex p-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Rocket size={56} className="text-white" />
              </div>
              
              <h2 className="text-5xl sm:text-7xl font-black leading-tight">
                Prêt à <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">bouger</span> ?
              </h2>
              
              <p className="text-2xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
                Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
              </p>
              
              <button className="group relative px-14 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-black text-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Démarrer maintenant
                  <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl animate-pulse" />
                </div>
              </button>

              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50 pt-6">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-400" />
                  <span>Réponse sous 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-400" />
                  <span>Devis gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-400" />
                  <span>Consultation offerte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl rotate-12 group-hover:rotate-180 transition-all duration-700 shadow-xl shadow-purple-500/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  WEMOVE
                </div>
                <div className="text-xs text-white/40 font-medium tracking-widest">WE MOVE TO THE WORLD</div>
              </div>
            </div>
            
            <div className="flex gap-8 text-base text-white/50">
              {['LinkedIn', 'Twitter', 'GitHub', 'Contact'].map((link, idx) => (
                <a 
                  key={link}
                  href="#" 
                  className="hover:text-white transition-all duration-300 hover:scale-110 font-medium relative group"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both`
                  }}
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/40 font-light">
              © 2024 WEMOVE. Tous droits réservés. Fait avec{' '}
              <span className="text-pink-400 animate-pulse">❤️</span> par notre équipe.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
