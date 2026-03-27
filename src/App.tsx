import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ICONS, TRANSLATIONS, PROGRAM_DATA, Language, SOCIAL_LINKS, LOGO_URL, PARTNERS_LOGOS } from './constants';

const getTypeStyles = (t: string) => {
  const type = t.toUpperCase();
  if (type.includes('INTERVALO')) return 'bg-red-600 text-white';
  if (type.includes('PAINEL 1')) return 'bg-black text-white';
  if (type.includes('PAINEL 2')) return 'bg-blue-600 text-white';
  if (type.includes('DEBATE')) return 'bg-black text-white';
  if (type.includes('OFICINA')) return 'bg-energy-orange text-white';
  if (type.includes('PALESTRA DE ABERTURA')) return 'bg-amazon-green text-white';
  if (type.includes('CREDENCIAMENTO')) return 'bg-amazon-green text-white';
  if (type.includes('SESSÃO DE ABERTURA')) return 'bg-[#FDF5E6] text-energy-orange font-bold border-b border-energy-orange/10';
  if (type.includes('ABERTURA')) return 'bg-[#FDF5E6] text-energy-orange font-bold border-b border-energy-orange/10';
  if (type.includes('TEMÁTICA')) return 'bg-entrepreneur-green text-white';
  return 'bg-amazon-green text-white';
};

const PROGRAM_IMAGES: Record<string, string> = {
  'PALESTRA DE ABERTURA': 'https://i.pinimg.com/1200x/c9/45/0d/c9450dbfdda1bbd3c6a718252c4a5b4c.jpg',
  'PALESTRA TEMÁTICA': 'https://i.pinimg.com/736x/63/9f/e6/639fe6a146f9fa15045e2f2fbd4baa35.jpg',
  'SESSÃO DE ABERTURA': 'https://i.pinimg.com/1200x/a1/c1/11/a1c111fb375cb5f22033724c4e5f718f.jpg',
  'PAINEL 1': 'https://i.pinimg.com/1200x/b2/4d/96/b24d96200dbaa54307e2e51e32dccebb.jpg',
  'PAINEL 2': 'https://i.pinimg.com/1200x/ec/9d/d4/ec9dd4543eadca319aaa5be4304df295.jpg',
  'INTERVALO_ALMOÇO': 'https://i.pinimg.com/1200x/d7/1c/ba/d71cba205df2a7c5188b6784e2e3173c.jpg',
  'INTERVALO': 'https://i.pinimg.com/1200x/3e/5d/ea/3e5dea473ecd4ee25c19c35a32481bd9.jpg',
  'CREDENCIAMENTO': 'https://i.pinimg.com/1200x/80/17/98/801798e667ba7ba01784f92719204b34.jpg',
  'OFICINA': 'https://i.pinimg.com/1200x/4b/f8/9c/4bf89c17879bde1bbf093cec81e62256.jpg',
};

const getProgramImage = (item: any): string | null => {
  if (item.workshopImage) {
    return item.workshopImage;
  }
  if (item.type === 'INTERVALO' && item.activity?.includes('Almoço')) {
    return PROGRAM_IMAGES['INTERVALO_ALMOÇO'];
  }
  if (PROGRAM_IMAGES[item.type]) {
    return PROGRAM_IMAGES[item.type];
  }
  return null;
};

const getSpeakerObjectPosition = (name: string) => {
  if (name?.includes('Suzane')) return 'object-center';
  if (name?.includes('Thalita')) return 'object-center';
  if (name?.includes('Rosângela')) return 'object-center';
  if (name?.includes('Amanda')) return 'object-top';
  return 'object-[center_25%]';
};

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null);
  const [showUpdates, setShowUpdates] = useState(false);
  const [vagas, setVagas] = useState(135);
  const t = TRANSLATIONS[lang];

  const carouselRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isCarouselPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 5) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isCarouselPaused, activeTab]);

  useEffect(() => {
    if (activeTab === 'day2' && carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 'day2' && carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const NavItem = ({ label, subItems, id }: { label: string, subItems?: any[], id: string }) => {
    const [nestedOpen, setNestedOpen] = useState<string | null>(null);

    return (
      <div className="relative group">
        <button 
          onClick={() => setActiveDropdown(activeDropdown === id ? null : id)}
          className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-all py-2 px-3 rounded-lg ${
            activeDropdown === id ? 'bg-white text-menu-green shadow-lg' : 'text-white hover:bg-white/10'
          }`}
        >
          {label}
          {subItems && <ICONS.ChevronRight size={12} className={`transition-transform ${activeDropdown === id ? 'rotate-90' : ''}`} />}
        </button>
        
        <AnimatePresence>
          {activeDropdown === id && subItems && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl overflow-visible dropdown-shadow z-50 p-2 border border-innovation-purple/10"
            >
              {subItems.map((item, idx) => (
                <div key={idx} className="relative group/nested">
                  {item.isNested ? (
                    <div className="relative">
                      <button 
                        onMouseEnter={() => setNestedOpen(item.label)}
                        onMouseLeave={() => setNestedOpen(null)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm text-innovation-purple hover:bg-innovation-purple hover:text-white rounded-xl transition-all font-bold"
                      >
                        {item.label}
                        <ICONS.ChevronRight size={14} />
                      </button>
                      
                      <AnimatePresence>
                        {nestedOpen === item.label && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="absolute left-full top-0 ml-2 w-64 bg-white rounded-2xl dropdown-shadow p-2 border border-innovation-purple/10"
                            onMouseEnter={() => setNestedOpen(item.label)}
                            onMouseLeave={() => setNestedOpen(null)}
                          >
                            {item.items.map((sub, sIdx) => (
                              <a 
                                key={sIdx}
                                href={sub.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 text-sm text-innovation-purple hover:bg-innovation-purple hover:text-white rounded-xl transition-all font-bold"
                                onClick={() => {
                                  setActiveDropdown(null);
                                  setNestedOpen(null);
                                }}
                              >
                                {sub.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm text-innovation-purple hover:bg-innovation-purple hover:text-white rounded-xl transition-all font-bold"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav ref={navRef} className="fixed top-0 w-full z-50 bg-menu-green border-b border-white/10 shadow-lg">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={LOGO_URL} alt="FIEB Logo" className="h-14 w-14 object-cover object-left" referrerPolicy="no-referrer" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <a href="#" className="text-xs font-bold uppercase tracking-wider text-white hover:bg-innovation-purple/40 py-2 px-3 rounded-lg transition-colors">
              {t.nav.home}
            </a>
            <NavItem id="about" label={t.nav.about} subItems={t.nav.sub.about} />
            <NavItem id="program" label={t.nav.program} subItems={t.nav.sub.program} />
            <NavItem id="submissions" label={t.nav.submissions} subItems={t.nav.sub.submissions} />
            <a href="https://fieb.net.br/inscricoes/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-white bg-energy-orange hover:bg-white hover:text-energy-orange py-2 px-4 rounded-lg transition-colors shadow-lg">
              INSCRIÇÕES
            </a>
            <a href="#apoio" className="text-xs font-bold uppercase tracking-wider text-white hover:bg-innovation-purple/40 py-2 px-3 rounded-lg transition-colors">
              {t.nav.partners}
            </a>
            <NavItem id="useful" label={t.nav.useful} subItems={t.nav.sub.useful} />
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/20 gap-1">
              {(['pt', 'en', 'es'] as Language[]).map((l) => {
                const flagUrls = { 
                  pt: 'https://flagcdn.com/w40/br.png', 
                  en: 'https://flagcdn.com/w40/us.png', 
                  es: 'https://flagcdn.com/w40/es.png' 
                };
                return (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold uppercase transition-all ${
                      lang === l ? 'bg-white text-menu-green shadow-lg' : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <img src={flagUrls[l]} alt={l} className="w-5 h-auto rounded-sm object-cover" />
                    <span>{l}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <ICONS.X size={24} /> : <ICONS.Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-menu-green border-t border-white/10 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                <a href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-white uppercase">{t.nav.home}</a>
                
                {/* Mobile Accordions could be added here, but for now simple links */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.nav.about}</p>
                  {t.nav.sub.about.map((item, i) => (
                    <a key={i} href={item.href} className="block text-white/80 hover:text-white pl-4 py-1">{item.label}</a>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.nav.program}</p>
                  {t.nav.sub.program.map((item, i) => (
                    <a key={i} href={item.href} className="block text-white/80 hover:text-white pl-4 py-1">{item.label}</a>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.nav.submissions}</p>
                  {t.nav.sub.submissions.map((item, i) => (
                    <a key={i} href={item.href} className="block text-white/80 hover:text-white pl-4 py-1">{item.label}</a>
                  ))}
                </div>

                <a href="https://fieb.net.br/inscricoes/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 mt-2 bg-energy-orange text-white text-center rounded-xl font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                  INSCRIÇÕES
                </a>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t.nav.useful}</p>
                  {t.nav.sub.useful.map((item, i) => (
                    <a key={i} href={item.href} className="block text-white/80 hover:text-white pl-4 py-1">{item.label}</a>
                  ))}
                </div>

                {/* Mobile Social Links */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = ICONS[social.icon as keyof typeof ICONS];
                    return (
                      <a 
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-innovation-purple hover:bg-amazon-green transition-all duration-300"
                        title={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-auto min-h-[100svh] md:h-[calc(100vh-100px)] md:min-h-[600px] flex items-center pt-20 overflow-hidden group">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-deep-purple via-deep-purple/80 to-transparent z-10"></div>
          <img 
            src="assets/teatro.jpg" 
            alt="Teatro Amazonas" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Technological Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 z-20 mix-blend-overlay group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(211,105,62,0.1),transparent_70%)] animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative z-30 max-w-[1200px] mx-auto px-6 md:px-20 py-8 w-full flex flex-col md:flex-row items-start justify-between gap-12 pt-16 md:pt-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-left relative z-40"
          >
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              {t.hero.commemorative}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4 drop-shadow-2xl">
              {t.hero.title}
            </h1>
            <div className="mb-4 md:mb-8">
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-menu-green text-white text-base md:text-xl font-semibold rounded-md shadow-lg">
                {t.hero.subtitle}
              </span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-lavender-light mb-6 md:mb-8">
              <ICONS.Calendar size={20} className="text-energy-orange shrink-0" />
              <span className="text-sm md:text-lg font-bold">{t.hero.info}</span>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <motion.a 
                href="#inscricoes"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(211,105,62,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 md:px-12 md:py-5 bg-energy-orange hover:bg-white hover:text-energy-orange text-white rounded-full font-display font-bold text-base md:text-xl transition-all pill-shadow transform hover:scale-105 text-center w-full sm:w-auto flex items-center justify-center gap-3"
              >
                <ICONS.Menu size={20} className="rotate-90" />
                Inscrições Abertas
              </motion.a>
            </div>
          </motion.div>

          {/* Right Content - Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:mt-0 self-center md:self-end -mb-8 md:-mb-24 mt-8 md:mt-0"
          >
            <div className="relative z-10 w-[240px] sm:w-[300px] md:w-[500px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform translate-y-4 md:translate-y-12">
              <img 
                src="assets/mascote.png" 
                alt="FIEB Mascot" 
                className="w-full h-auto filter drop-shadow-2xl group-hover:brightness-110 transition-all duration-300"
              />
              {/* Technological details around mascot on hover */}
              <div className="absolute -inset-4 border-2 border-energy-orange/0 group-hover:border-energy-orange/30 rounded-full transition-all duration-500 scale-110 animate-spin-slow opacity-0 group-hover:opacity-100"></div>
              <div className="absolute -inset-8 border border-white/0 group-hover:border-white/10 rounded-full transition-all duration-700 scale-125 animate-reverse-spin opacity-0 group-hover:opacity-100"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Marquee Ticker - Positioned after the Hero to avoid overlapping and fit the 'white part' transition */}
      <section className="py-3 md:py-4 bg-[#0a0514] border-y border-white/5 overflow-hidden relative z-30">
        <div className="flex animate-marquee whitespace-nowrap items-center" style={{ animationDuration: '40s' }}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="flex items-center gap-6 md:gap-12 mx-6">
              {/* Compact Vacancies Display */}
              <div className="flex items-center gap-3 px-4 py-1.5 bg-black rounded-xl border border-energy-orange/40 shadow-xl">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] leading-none">Restam</span>
                <div className="bg-[#111] px-4 py-1.5 rounded-lg border border-energy-orange/60 flex items-center justify-center min-w-[60px] md:min-w-[90px]">
                  <span className="text-energy-orange font-mono font-black text-xl md:text-3xl leading-none pt-0.5" style={{ textShadow: '0 0 10px rgba(211,105,62,1)' }}>
                    {vagas}
                  </span>
                </div>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] leading-none">Vagas</span>
              </div>
              
              <span className="text-innovation-purple text-xl opacity-40">★</span>

              <a 
                href="#inscricoes" 
                className="flex items-center gap-3 group"
              >
                <span className="text-sm md:text-xl font-display font-black text-white uppercase tracking-wider group-hover:text-energy-orange transition-colors">Inscrições Abertas</span>
                <span className="px-3 py-1 bg-energy-orange text-white text-[10px] rounded-full font-black uppercase shadow-lg group-hover:bg-white group-hover:text-energy-orange transition-all">Inscreva-se</span>
              </a>

              <span className="text-innovation-purple text-xl opacity-40">★</span>

              <a 
                href="#programacao" 
                className="flex items-center gap-3 group"
              >
                <span className="text-sm md:text-xl font-display font-black text-white uppercase tracking-wider group-hover:text-innovation-purple transition-colors">Programação Completa</span>
                <span className="px-3 py-1 bg-innovation-purple text-white text-[10px] rounded-full font-black uppercase shadow-lg group-hover:bg-white group-hover:text-innovation-purple transition-all">Ver agora</span>
              </a>

              <span className="text-innovation-purple text-xl opacity-40">★</span>

              <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest whitespace-nowrap">Última Atualização</span>
                <span className="text-white font-bold text-sm">27.03.2026</span>
                <div className="w-1 h-1 bg-white/20 rounded-full mx-1"></div>
                <span className="text-amazon-green font-bold text-sm tracking-tight">Lotes CO disponíveis</span>
              </div>

              <span className="text-white/20 text-3xl font-black mx-10">/</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-innovation-purple mb-8 uppercase tracking-wider">
                {t.about.title}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>{t.about.text1}</p>
                <p>{t.about.text2}</p>
              </div>
              <div className="mt-10">
                <div className="p-6 bg-lavender-light rounded-2xl border border-innovation-purple/10 inline-block">
                  <div className="text-3xl font-display font-bold text-innovation-purple mb-2">{t.about.statYears}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-tighter">{t.about.statLabelYears}</div>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="assets/sobre_evento_2.webp" 
                alt="FIEB Edição Anterior" 
                className="rounded-3xl shadow-2xl w-full h-auto max-h-[600px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-innovation-purple text-white rounded-2xl shadow-xl hidden md:block">
                <ICONS.Award size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Marquee */}
      <section className="py-4 bg-innovation-purple border-y border-white/10 overflow-hidden relative z-20">
        <div className="flex animate-marquee whitespace-nowrap items-center" style={{animationDuration: '25s'}}>
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center">
              {t.registrations.table.categories.map((cat, cIdx) => (
                <div key={cIdx} className="flex items-center">
                  <span className="text-lg font-display font-bold text-white px-8 uppercase tracking-wider flex items-center gap-4">
                    {cat.name} 
                    <span className="bg-amazon-green text-white font-bold px-4 py-1.5 rounded-xl border border-white/10 shadow-lg">
                      {cat.prices ? cat.prices[0] : cat.special}
                    </span>
                  </span>
                  <span className="text-white/20 text-2xl">★</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Registration Section */}
      <section id="inscricoes" className="py-24 bg-lavender-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-energy-orange/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-innovation-purple/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-20 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-innovation-purple mb-4 uppercase tracking-widest"
            >
              {t.registrations.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 font-semibold max-w-2xl mx-auto"
            >
              {t.registrations.subtitle}
            </motion.p>
          </div>

          {/* Pricing Table/Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-innovation-purple/5 mb-16"
          >
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-4 bg-innovation-purple text-white p-6 md:p-8 hidden md:grid">
              <div className="font-display font-bold text-xl uppercase tracking-wider">{t.registrations.table.category}</div>
              <div className="text-center">
                <div className="font-display font-bold text-lg uppercase">{t.registrations.table.lot1}</div>
                <div className="text-[13px] opacity-80 font-bold tracking-widest mt-1">{t.registrations.table.dates1}</div>
              </div>
              <div className="text-center opacity-60">
                <div className="font-display font-bold text-lg uppercase">{t.registrations.table.lot2}</div>
                <div className="text-[13px] opacity-80 font-bold tracking-widest mt-1">{t.registrations.table.dates2}</div>
              </div>
              <div className="text-center opacity-40">
                <div className="font-display font-bold text-lg uppercase">{t.registrations.table.lot3}</div>
                <div className="text-[13px] opacity-80 font-bold tracking-widest mt-1">{t.registrations.table.dates3}</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-100">
              {t.registrations.table.categories.map((cat, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 p-6 md:p-8 items-center hover:bg-lavender-light/30 transition-colors group">
                  <div className="font-bold text-innovation-purple mb-4 md:mb-0 pr-4 group-hover:translate-x-1 transition-transform">{cat.name}</div>
                  {cat.special ? (
                    <div className="md:col-span-3 text-center md:text-left md:pl-8">
                      <span className="inline-block px-4 py-2 bg-energy-orange/10 text-energy-orange rounded-full font-display font-bold text-sm tracking-wider">
                        {cat.special}
                      </span>
                    </div>
                  ) : (
                    <>
                      {cat.prices.map((price, pIdx) => (
                        <div key={pIdx} className={`text-center flex md:block justify-between items-center mb-2 md:mb-0 ${pIdx === 0 ? 'bg-energy-orange/5 md:bg-transparent p-3 md:p-0 rounded-xl border border-energy-orange/10 md:border-none' : 'opacity-40'}`}>
                          <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            {pIdx === 0 ? t.registrations.table.lot1 : pIdx === 1 ? t.registrations.table.lot2 : t.registrations.table.lot3}
                          </span>
                          <span className={`font-display font-bold text-xl ${pIdx === 0 ? 'text-energy-orange' : 'text-gray-400'}`}>
                            {price}
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info area */}
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-6"
            >
              <h3 className="text-2xl font-display font-bold text-innovation-purple flex items-center gap-3 uppercase tracking-wider">
                <div className="w-10 h-10 bg-energy-orange rounded-xl flex items-center justify-center text-white shadow-lg">
                  <ICONS.FileText size={20} />
                </div>
                Informações Importantes
              </h3>
              <div className="grid gap-4">
                {t.registrations.info.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 p-4 bg-white/50 rounded-2xl border border-innovation-purple/5 hover:border-innovation-purple/20 transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-full bg-innovation-purple/10 flex items-center justify-center text-innovation-purple shrink-0 mt-0.5 group-hover:bg-innovation-purple group-hover:text-white transition-colors">
                      <span className="text-[10px] font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed font-semibold">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-gradient-to-br from-innovation-purple to-deep-purple p-10 rounded-[40px] shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-energy-orange/20 rounded-full -ml-16 -mb-16 blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-white mb-8 border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <ICONS.Users size={40} />
                </div>
                <h4 className="text-3xl font-display font-bold text-white mb-4 tracking-tight">Pronto para participar?</h4>
                <p className="text-lavender-light/70 mb-10 text-base leading-relaxed">
                  As vagas são limitadas pela capacidade do auditório. Garanta as melhores condições inscrevendo-se no lote atual!
                </p>
                <motion.a 
                  href="https://fieb.net.br/inscricoes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-deep-purple hover:bg-innovation-purple text-white rounded-2xl font-display font-bold text-xl uppercase tracking-widest shadow-[0_20px_40px_rgba(211,105,62,0.3)] transition-all flex items-center justify-center gap-4 group/btn"
                >
                  {t.registrations.cta}
                  <ICONS.ChevronRight className="group-hover/btn:translate-x-2 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="programacao" className="py-24 bg-innovation-purple relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              {t.program.title}
            </h2>
            <p className="text-lg text-lavender-light font-semibold">
              {t.program.subtitle}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-full shadow-lg flex gap-2 border border-innovation-purple/10">
              <button
                onClick={() => setActiveTab('day1')}
                className={`px-8 py-3 rounded-full font-display font-bold text-sm uppercase transition-all ${
                  activeTab === 'day1' ? 'bg-innovation-purple text-white' : 'text-innovation-purple hover:bg-lavender-light'
                }`}
              >
                {t.program.day1}
              </button>
              <button
                onClick={() => setActiveTab('day2')}
                className={`px-8 py-3 rounded-full font-display font-bold text-sm uppercase transition-all ${
                  activeTab === 'day2' ? 'bg-innovation-purple text-white' : 'text-innovation-purple hover:bg-lavender-light'
                }`}
              >
                {t.program.day2}
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative group/carousel">
            {/* Arrows */}
            <button 
              onClick={() => scrollCarousel('left')}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center text-innovation-purple shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-energy-orange hover:text-white"
            >
              <ICONS.ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scrollCarousel('right')}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center text-innovation-purple shadow-xl opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-energy-orange hover:text-white"
            >
              <ICONS.ChevronRight size={24} />
            </button>

            <div
              ref={carouselRef}
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => { setIsCarouselPaused(false); }}
              className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-4 md:px-8 snap-x snap-mandatory cursor-pointer"
            >
              {(() => {
                const processedItems: (typeof PROGRAM_DATA.day1[number] & { isPanel?: boolean; panelParticipants?: typeof PROGRAM_DATA.day1 })[] = [];
                const panelGroups: { [key: string]: typeof PROGRAM_DATA.day1 } = {};
                const processedPanelKeys = new Set<string>();
                
                PROGRAM_DATA[activeTab].forEach((item) => {
                  if (item.type?.startsWith('PAINEL')) {
                    const key = `${item.type}-${item.activity}`;
                    if (!panelGroups[key]) panelGroups[key] = [];
                    panelGroups[key].push(item);
                    
                    if (!processedPanelKeys.has(key)) {
                      processedPanelKeys.add(key);
                      processedItems.push({
                        ...item,
                        id: `panel-${item.type}` as any,
                        isPanel: true,
                        panelParticipants: panelGroups[key]
                      });
                    }
                  } else {
                    processedItems.push(item);
                  }
                });
                
                return processedItems.map((item: any) => {
                  const typeStyles = getTypeStyles(item.type);
                  const isLunch = item.activity?.toUpperCase().includes('ALMOÇO');
                  const isPanel = item.isPanel;
                  
                  const getBorderColor = (styles: string) => {
                    if (styles.includes('bg-amazon-green')) return 'border-[#0d5c3d]';
                    if (styles.includes('bg-energy-orange')) return 'border-[#d35400]';
                    if (styles.includes('bg-red-600')) return 'border-red-700';
                    if (styles.includes('bg-black')) return 'border-black';
                    if (styles.includes('bg-blue-600')) return 'border-blue-700';
                    if (styles.includes('bg-entrepreneur-green')) return 'border-[#10b981]';
                    if (styles.includes('bg-[#FDF5E6]')) return 'border-[#d35400]';
                    return 'border-[#0d5c3d]';
                  };

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`min-w-[320px] max-w-[320px] bg-deep-purple rounded-xl overflow-hidden shadow-xl snap-center flex flex-col border-4 ${getBorderColor(typeStyles)}`}
                    >
                      {/* Faixa Superior */}
                      <div className={`px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.2em] shadow-inner ${typeStyles}`}>
                        {item.type}
                      </div>

                      {/* Photo or Logo */}
                      <div className="w-full h-48 overflow-hidden mb-4 bg-white/5 flex items-center justify-center relative">
                        {getProgramImage(item) ? (
                          <img 
                            src={getProgramImage(item)!} 
                            alt={item.activity} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.activity} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="flex flex-col items-center gap-2">
                            <img src={LOGO_URL} alt="FIEB" className="h-16 w-16 opacity-40 grayscale" referrerPolicy="no-referrer" />
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">{item.type}</span>
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col h-full">
                        {/* Activity Name - Emphasized */}
                        <div className={`rounded-xl overflow-hidden shadow-md mb-4 ${typeStyles.split(' ')[0]}`}>
                          <p className={`font-bold p-4 leading-tight text-center text-lg ${typeStyles.includes('bg-[#FDF5E6]') ? 'text-energy-orange' : typeStyles.includes('text-black') ? 'text-black' : 'text-white'}`}>
                            {item.activity}
                          </p>
                        </div>

                        {isLunch ? (
                          <div className="pt-4 border-t border-white/10">
                            <a 
                              href="https://fieb.net.br/restaurantes/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-3 bg-energy-orange hover:bg-innovation-purple text-white rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg"
                            >
                              Restaurantes Recomendados
                              <ICONS.ChevronRight size={14} />
                            </a>
                          </div>
                        ) : (
                          <>
                            <div className="pt-4 border-t border-white/10">
                              <div className="flex items-center gap-2 text-sm font-bold text-white/80 tracking-tighter mb-2">
                                <ICONS.Clock size={14} className="text-energy-orange" />
                                <span>{item.date} • {item.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs font-bold text-white/60 uppercase tracking-tighter mb-3">
                                <ICONS.MapPin size={14} className="text-energy-orange" />
                                <span>{item.location}</span>
                              </div>
                              {item.registrationUrl ? (
                                <a
                                  href={item.registrationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full py-2 bg-menu-green hover:bg-innovation-purple text-white text-center rounded-lg font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
                                >
                                  Inscreva-se
                                </a>
                              ) : item.upcomingRegistration && (
                                <button
                                  disabled
                                  className="w-full py-2 bg-gray-500 text-white rounded-lg font-bold text-xs uppercase tracking-wider shadow-md cursor-not-allowed opacity-80"
                                >
                                  Inscrições em Breve
                                </button>
                              )}

                              {item.locationUrl && (
                                <a
                                  href={item.locationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block w-full mt-2 py-2 bg-amazon-green hover:bg-innovation-purple text-white text-center rounded-lg font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                  <ICONS.MapPin size={12} />
                                  Como chegar
                                </a>
                              )}

                              {(item.name === 'Suzane Lima' || item.name === 'Jorge Cativo') && (
                                <button
                                  onClick={() => setSelectedWorkshop(item)}
                                  className="w-full mt-2 py-2 bg-innovation-purple text-white rounded-lg font-bold text-xs uppercase tracking-wider shadow-md hover:bg-amazon-green transition-all"
                                >
                                  EMENTA
                                </button>
                              )}
                            </div>

                            {isPanel && (
                              <div className="pt-3 space-y-2">
                                {item.panelParticipants?.map((p: any, idx: number) => (
                                  <div key={idx} className="border-b border-white/10 last:border-0 pb-2 last:pb-0">
                                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider">
                                      {p.role}
                                    </div>
                                    <div className="flex items-center gap-3">
                                      {p.image && (
                                        <img 
                                          src={p.image} 
                                          alt={p.name} 
                                          className={`w-10 h-10 rounded-full border-2 border-white/20 object-cover ${getSpeakerObjectPosition(p.name)}`}
                                          referrerPolicy="no-referrer"
                                        />
                                      )}
                                      <div className="text-base font-semibold text-white/90 leading-tight">
                                        {p.name}
                                      </div>
                                    </div>
                                    <div className="text-xs text-white/50 uppercase">
                                      {p.institution}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                            {!isPanel && !item.isGeneral && (
                              <div className="pt-3">
                                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                                  {item.role}
                                </div>
                                <div className="flex items-center gap-3">
                                  {item.image && (
                                    <img 
                                      src={item.image} 
                                      alt={item.name} 
                                      className={`w-12 h-12 rounded-full border-2 border-white/20 object-cover ${getSpeakerObjectPosition(item.name)}`}
                                      referrerPolicy="no-referrer"
                                    />
                                  )}
                                  <div className="text-base font-semibold text-white/90 leading-tight">
                                    {item.name}
                                  </div>
                                </div>
                                <div className="text-xs text-white/50 uppercase">
                                  {item.institution}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Ementa Modal */}
      <AnimatePresence>
        {selectedWorkshop && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWorkshop(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
            >
              <div className="p-8 bg-innovation-purple text-white flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wider leading-tight">
                    {selectedWorkshop.activity}
                  </h3>
                  <div className="flex items-center gap-2 text-sm opacity-90 font-bold">
                    <span className="bg-white/20 px-2 py-0.5 rounded">Facilitador(a): {selectedWorkshop.name}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedWorkshop(null)}
                  className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all text-white font-bold text-xl ml-4"
                >
                  <ICONS.X size={20} />
                </button>
              </div>
              <div className="p-8 overflow-y-auto text-innovation-purple">
                <div className="space-y-6">
                  {selectedWorkshop.name === 'Suzane Lima' ? (
                    <>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">Apresentação e contextualização</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Quem é o profissional da informação no contexto digital</li>
                          <li>Por que profissionais da informação têm vantagem competitiva no mercado de infoprodutos</li>
                          <li>Panorama do mercado de educação online no Brasil</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">Posicionamento e Nicho</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>O que é nicho e por que ele importa</li>
                          <li>Como identificar a interseção entre conhecimento técnico + demanda de mercado + perfil pessoal</li>
                          <li>Exemplos práticos de nichos para profissionais da informação</li>
                          <li>Atividade rápida: mapeamento individual do nicho</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">O que vender: escolha do produto digital</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Tipologia de produtos e serviços digitais: cursos, e-books, mentorias, consultorias, afiliação</li>
                          <li>Critérios de escolha: investimento de tempo, ticket médio, escalabilidade e perfil do criador</li>
                          <li>Produtos de entrada vs. produtos de alto ticket</li>
                          <li>Como começar sem precisar ter tudo pronto</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">Modelagem do negócio</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Introdução ao Business Model Canvas adaptado para infoprodutores</li>
                          <li>Os blocos mais críticos para quem está começando: proposta de valor, segmento de clientes, canais e fontes de receita</li>
                          <li>Exercício: preenchimento simplificado do Canvas</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">Presença digital e primeiros passos</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Qual plataforma escolher (Instagram, YouTube, TikTok, etc) e por quê não precisa estar em todas</li>
                          <li>A lógica de conteúdo que vende: autoridade antes de oferta</li>
                          <li>Ferramentas básicas para começar (Hotmart, Eduzz Kiwify etc.)</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">Encerramento e próximos passos</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Checklist de ação: o que fazer nos próximos 7 dias</li>
                          <li>Dúvidas e troca entre participantes</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">1. Contexto estratégico e mentalidade digital</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Papel das redes sociais como canal de aquisição, relacionamento e vendas</li>
                          <li>Uso da IA para melhorar a produção de conteúdo em negócios locais</li>
                          <li>Erros comuns na gestão de redes sociais sem estratégia</li>
                          <li>Diferença entre postar conteúdo e construir presença digital</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">2. Posicionamento estratégico com IA</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Definição de nicho, valores e crenças como base do conteúdo</li>
                          <li>Identificação de público, persona e dores reais</li>
                          <li>Níveis de consciência do público e impacto na comunicação</li>
                          <li>Uso de IA para mapear dores, desejos e dúvidas</li>
                        </ul>
                        <div className="bg-innovation-purple/5 p-4 rounded-xl border-l-4 border-energy-orange">
                          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-energy-orange">Atividade 1: Posicionando seu negócio nas redes sociais com IA a partir da:</p>
                          <ul className="text-xs font-bold space-y-1">
                            <li>• Definição de nicho</li>
                            <li>• Definição de público</li>
                            <li>• Identificação das principais dores</li>
                            <li>• Construção da promessa central</li>
                          </ul>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">3. Planejamento de conteúdo</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>O que postar e por que postar no contexto do negócio</li>
                          <li>10 Tipos de editorias de conteúdo</li>
                          <li>Benchmarking inteligente com apoio de IA</li>
                          <li>Aplicação da técnica das ideias que colam</li>
                        </ul>
                        <div className="bg-innovation-purple/5 p-4 rounded-xl border-l-4 border-amazon-green">
                          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-amazon-green">Atividade 2: Criação de um Calendário editorial validado</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">4. Produção de conteúdo com IA</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Estrutura de conteúdos que geram engajamento</li>
                          <li>Técnicas de escrita de legendas para redes sociais</li>
                          <li>Criação de roteiros de ideias virais</li>
                          <li>Transformação de um tema em múltiplos conteúdos</li>
                        </ul>
                        <div className="bg-innovation-purple/5 p-4 rounded-xl border-l-4 border-innovation-purple">
                          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-innovation-purple">Atividade 3: Desenvolvimento de conteúdo com uma das editorias</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-lg border-b border-innovation-purple/10 pb-2">5. Automação e plataformas de criação com IA</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm font-medium opacity-80">
                          <li>Introdução à automação de conteúdo</li>
                          <li>Princípios de UX e UI para criadores de conteúdo</li>
                          <li>Ferramentas de IA para design e produção</li>
                          <li>Construção de fluxo prático da ideia ao post com IA</li>
                        </ul>
                        <div className="bg-energy-orange/10 p-4 rounded-xl border border-energy-orange/20">
                          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-energy-orange leading-tight">Atividade final: Desenvolvimento de carrossel automatizado estilo tweet com legenda</p>
                        </div>
                        <div className="bg-energy-orange/10 p-4 rounded-xl border border-energy-orange/20">
                          <p className="font-bold text-xs uppercase tracking-widest mb-2 text-energy-orange leading-tight">Entrega do participante</p>
                          <ul className="text-xs font-bold space-y-1">
                            <li>• Gerador de carrossel configurado</li>
                            <li>• Texto, estrutura e design gerados com IA</li>
                            <li>• Conteúdo pronto para download e publicação</li>
                          </ul>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="p-6 bg-lavender-light/30 border-t border-innovation-purple/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <a 
                  href="https://tally.so/r/LZGy81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 bg-menu-green text-white rounded-xl font-bold uppercase text-sm shadow-lg hover:bg-innovation-purple transition-all flex items-center justify-center gap-2"
                >
                  Quero me inscrever
                  <ICONS.ChevronRight size={16} />
                </a>
                <button 
                  onClick={() => setSelectedWorkshop(null)}
                  className="w-full sm:w-auto px-8 py-3 bg-energy-orange text-white rounded-xl font-bold uppercase text-sm shadow-lg hover:bg-innovation-purple transition-all"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Videos Section */}
      <section className="py-24 bg-amazon-green">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 uppercase tracking-widest">
              ASSISTA | IV FIEB FLORIANÓPOLIS
            </h2>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/Kpk8QDUoXBI?si=aGXpantwfYCwccvm" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Speakers Grid */}
      <section id="pessoas-convidadas" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-innovation-purple mb-4 uppercase tracking-widest">
              {t.speakers.title}
            </h2>
            <p className="text-lg text-gray-600 font-semibold">
              {t.speakers.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...PROGRAM_DATA.day1, ...PROGRAM_DATA.day2].filter(s => !s.isGeneral).map((speaker: any) => {
              const borderColors: Record<string, string> = {
                'energy-orange': 'border-energy-orange',
                'entrepreneur-green': 'border-entrepreneur-green',
                'innovation-purple': 'border-innovation-purple',
                'amazon-green': 'border-amazon-green',
                'black': 'border-black sm:border-t-black',
                'blue': 'border-blue-600',
                'red': 'border-red-600',
                'beige': 'border-[#FDF5E6]',
              };
              const borderColor = borderColors[speaker.color] || 'border-gray-200';
              
              return (
                <motion.div
                  key={speaker.id}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-deep-purple rounded-3xl overflow-hidden shadow-xl border-2 ${borderColor} transition-all duration-300`}
                >
                  <div className="h-72 overflow-hidden relative">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className={`w-full h-full object-cover transition-all hover:scale-110 ${getSpeakerObjectPosition(speaker.name)}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {speaker.lattes && (
                      <a 
                        href={speaker.lattes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-innovation-purple hover:bg-innovation-purple hover:text-white transition-all"
                        title="Lattes"
                      >
                        <ICONS.GraduationCap size={14} />
                      </a>
                    )}
                    {speaker.instagram && (
                      <a 
                        href={speaker.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-innovation-purple hover:bg-[#E1306C] hover:text-white transition-all"
                        title="Instagram"
                      >
                        <ICONS.Instagram size={14} />
                      </a>
                    )}
                    {speaker.website && (
                      <a 
                        href={speaker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-innovation-purple hover:bg-amazon-green hover:text-white transition-all"
                        title="Website"
                      >
                        <ICONS.Globe size={14} />
                      </a>
                    )}
                    {speaker.youtube && (
                      <a 
                        href={speaker.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-innovation-purple hover:bg-red-600 hover:text-white transition-all"
                        title="YouTube"
                      >
                        <ICONS.Youtube size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between bg-deep-purple">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{speaker.name}</h3>
                    <div className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mb-2">
                      {speaker.institution}
                    </div>
                  </div>
                  
                  <div className={`rounded-xl overflow-hidden shadow-md ${getTypeStyles(speaker.type)}`}>
                    <p className="text-xs font-bold text-white p-4 leading-tight">
                      {speaker.activity}
                    </p>
                  </div>
                </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Support Section */}
      <section id="apoio" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-innovation-purple mb-6 uppercase tracking-widest">
              {t.support.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.support.text}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ouro */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedTier('gold')}
              className={`p-8 bg-deep-purple rounded-[32px] text-white shadow-2xl transition-all cursor-pointer border-4 ${
                selectedTier === 'gold' ? 'border-[#FFD700] scale-[1.03]' : 'border-white/10'
              }`}
            >
              <div className="text-sm font-bold text-[#FFD700] uppercase tracking-widest mb-4">{t.support.gold}</div>
              <div className="text-4xl font-display font-bold mb-8">R$ 5000</div>
              <ul className="space-y-4 mb-10 text-sm text-lavender-light/80">
                {(t.support.benefits?.gold || []).map((benefit, i) => (
                  <li key={i} className="flex gap-2">
                    <ICONS.Award size={18} className="text-[#FFD700] shrink-0" /> 
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://tally.so/r/gDGyvd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-energy-orange hover:bg-energy-orange/80 rounded-full font-display font-bold transition-all text-center"
              >
                {t.support.cta}
              </a>
            </motion.div>

            {/* Prata */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedTier('silver')}
              className={`p-8 bg-deep-purple rounded-[32px] text-white shadow-xl transition-all cursor-pointer border-4 ${
                selectedTier === 'silver' ? 'border-[#C0C0C0] scale-[1.03]' : 'border-white/10'
              }`}
            >
              <div className="text-sm font-bold text-[#C0C0C0] uppercase tracking-widest mb-4">{t.support.silver}</div>
              <div className="text-4xl font-display font-bold mb-8">R$ 3000</div>
              <ul className="space-y-4 mb-10 text-sm text-lavender-light/80">
                {(t.support.benefits?.silver || []).map((benefit, i) => (
                  <li key={i} className="flex gap-2">
                    <ICONS.Award size={18} className="text-[#C0C0C0] shrink-0" /> 
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://tally.so/r/gDGyvd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-energy-orange hover:bg-energy-orange/80 rounded-full font-display font-bold transition-all text-center"
              >
                {t.support.cta}
              </a>
            </motion.div>

            {/* Bronze */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedTier('bronze')}
              className={`p-8 bg-deep-purple rounded-[32px] text-white shadow-xl transition-all cursor-pointer border-4 ${
                selectedTier === 'bronze' ? 'border-[#CD7F32] scale-[1.03]' : 'border-white/10'
              }`}
            >
              <div className="text-sm font-bold text-[#CD7F32] uppercase tracking-widest mb-4">{t.support.bronze}</div>
              <div className="text-4xl font-display font-bold mb-8">R$ 1500</div>
              <ul className="space-y-4 mb-10 text-sm text-lavender-light/80">
                {(t.support.benefits?.bronze || []).map((benefit, i) => (
                  <li key={i} className="flex gap-2">
                    <ICONS.Award size={18} className="text-[#CD7F32] shrink-0" /> 
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://tally.so/r/gDGyvd"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-energy-orange hover:bg-energy-orange/80 rounded-full font-display font-bold transition-all text-center"
              >
                {t.support.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section id="local" className="py-24 bg-innovation-purple relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 uppercase tracking-widest">
              {t.location.title}
            </h2>
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/10">
              <p className="text-lg text-white/90 font-medium leading-relaxed">
                Auditório Samaúma - UFAM
              </p>
              <p className="text-base text-white/70 mt-2">
                Av. Jauary Marinho, Via de Acesso ao Setor Sul - UFAM - Coroado, Manaus - AM
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group"
            >
              <div className="absolute inset-0 bg-innovation-purple/20 group-hover:bg-transparent transition-all duration-500 z-10 pointer-events-none"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.7234580990171!2d-59.97556782883606!3d-3.100222419536266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b2b6a48c3e5%3A0x91aeec80d21e90d0!2sFaculdade%20de%20Ci%C3%AAncias%20Agr%C3%A1rias%20-%20FCA%2001!5e1!3m2!1spt-BR!2sbr!4v1773335183386!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-0"
              ></iframe>
              
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-energy-orange/30 rounded-full z-20 pointer-events-none"
              ></motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-energy-orange rounded-full z-30 shadow-[0_0_20px_rgba(211,105,62,0.8)] pointer-events-none"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-black/90 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl group transition-all duration-300 hover:border-energy-orange/50">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-energy-orange/20 rounded-2xl flex items-center justify-center text-energy-orange shrink-0">
                    <ICONS.MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Endereço</h3>
                    <p className="text-2xl text-white font-semibold leading-relaxed">
                      {t.location.address}
                    </p>
                  </div>
                </div>
                <a 
                  href="https://maps.app.goo.gl/91aeec80d21e90d0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-white text-black hover:bg-energy-orange hover:text-white rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-2 group"
                >
                  {t.location.cta}
                  <ICONS.ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/90 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center shadow-2xl transition-all duration-300 hover:border-energy-orange/50">
                  <ICONS.Clock className="text-energy-orange mx-auto mb-4" size={32} />
                  <h4 className="text-white font-bold text-lg mb-1">Credenciamento</h4>
                  <p className="text-energy-orange font-bold text-xl">8h às 9h</p>
                </div>
                <div className="bg-black/90 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center shadow-2xl transition-all duration-300 hover:border-energy-orange/50">
                  <ICONS.Users className="text-energy-orange mx-auto mb-4" size={32} />
                  <h4 className="text-white font-bold text-lg mb-1">Inscrições disponíveis</h4>
                  <p className="text-energy-orange font-bold text-xl uppercase">150</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 md:px-20 mb-12">
          
          {/* Realização Section */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-innovation-purple mb-4 uppercase tracking-widest">
                Realização
              </h2>
              <div className="h-1.5 w-32 bg-energy-orange mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32 animate-fade-in">
              {PARTNERS_LOGOS.filter(p => p.category === 'Realização').map((partner, idx) => (
                <div key={`${partner.name}-realizacao-${idx}`} className="flex flex-col items-center">
                  <div className="h-40 w-40 md:h-56 md:w-56 flex items-center justify-center mb-6 transition-all duration-300 transform hover:scale-105">
                    {partner.src ? (
                      <img 
                        src={partner.src} 
                        alt={partner.name} 
                        className="max-h-full max-w-full object-contain drop-shadow-md"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="text-4xl font-display font-black text-innovation-purple tracking-tighter uppercase italic">
                        {partner.name}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border-t-2 border-gray-100 mb-20"></div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-innovation-purple mb-4 uppercase tracking-widest">
              Nossos Parceiros e Apoiadores
            </h2>
            <div className="h-1.5 w-24 bg-energy-orange mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="relative flex overflow-hidden group py-10 bg-lavender-light/10 border-y border-gray-100">
          <motion.div 
            className="flex whitespace-nowrap gap-16 items-center"
            animate={{ x: [0, -1680] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear"
            }}
          >
            {(() => {
              const carouselLogos = PARTNERS_LOGOS.filter(p => p.category !== 'Realização' && p.category !== 'Financiamento');
              return [...carouselLogos, ...carouselLogos, ...carouselLogos].map((partner, idx) => (
              <div 
                key={`${partner.name}-${idx}`} 
                className="flex flex-col items-center justify-center min-w-[280px] px-8"
              >
                <div className="h-32 w-full flex items-center justify-center mb-6 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                  {partner.src ? (
                    <img 
                      src={partner.src} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-2xl font-display font-black text-innovation-purple/20 tracking-tighter uppercase italic">
                      {partner.name}
                    </div>
                  )}
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border shadow-sm ${
                  partner.category === 'Realização' ? 'bg-innovation-purple text-white border-innovation-purple shadow-innovation-purple/20' :
                  partner.category === 'Instituição Parceira' ? 'bg-amazon-green text-white border-amazon-green shadow-amazon-green/20' :
                  partner.category === 'Instituição Apoiadora' ? 'bg-energy-orange text-white border-energy-orange shadow-energy-orange/20' :
                  partner.category === 'Apoio Ouro' ? 'bg-yellow-500 text-black border-yellow-500 font-black' :
                  partner.category === 'Financiamento' ? 'bg-blue-600 text-white border-blue-600 shadow-blue-600/20' :
                  'bg-gray-500 text-white border-gray-500'
                }`}>
                  {partner.category}
                </div>
              </div>
            ))})()}
          </motion.div>
        </div>

        {/* Financiamento Section */}
        <div className="max-w-[1240px] mx-auto px-6 md:px-20 mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-innovation-purple mb-4 uppercase tracking-widest">
              Financiamento
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-32 animate-fade-in">
            {PARTNERS_LOGOS.filter(p => p.category === 'Financiamento').map((partner, idx) => (
              <div key={`${partner.name}-financiamento-${idx}`} className="flex flex-col items-center">
                <div className="h-40 w-auto md:h-64 md:w-[600px] flex items-center justify-center mb-6 transition-all duration-300 transform hover:scale-105">
                  {partner.src ? (
                    <img 
                      src={partner.src} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain drop-shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-2xl font-display font-black text-innovation-purple tracking-tighter uppercase italic">
                      {partner.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-purple text-white pt-20 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <img src={LOGO_URL} alt="FIEB Logo" className="h-20 w-20 object-cover object-left" referrerPolicy="no-referrer" />
              </div>
              <p className="text-lavender-light/60 max-w-md leading-relaxed">
                Palestras, paineis temáticos, oficinas e visitas técnicas chegando na quinta edição do evento na UFAM em Manaus.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest text-energy-orange">{t.footer.contact}</h4>
              <ul className="space-y-4 text-lavender-light/60 text-center md:text-left">
                <li className="flex items-center justify-center md:justify-start gap-2"><ICONS.Globe size={16} /> contato@fieb.net.br</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><ICONS.MapPin size={16} /> Manaus, Amazonas</li>
                <li className="flex items-center justify-center md:justify-start gap-2"><ICONS.Clock size={16} /> 14 e 15 de Maio de 2026</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="font-display font-bold text-lg mb-6 uppercase tracking-widest text-energy-orange">{t.footer.social}</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = ICONS[social.icon as keyof typeof ICONS];
                  return (
                    <a 
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-innovation-purple rounded-full flex items-center justify-center hover:bg-amazon-green transition-all duration-300 text-white"
                      title={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-4 text-[10px] text-white/50 uppercase font-bold tracking-[0.2em] relative">
            <p>© 2026 V FIEB. {t.footer.rights}.</p>
            <div className="flex items-center gap-3">
              <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-white/30">
                Última Atualização em: 25.03.2026
              </div>
              <button 
                onClick={() => setShowUpdates(!showUpdates)}
                className="w-8 h-8 rounded-full bg-energy-orange text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-energy-orange/20"
                title="Ver atualizações"
              >
                <ICONS.FileText size={14} />
              </button>
            </div>

            {/* Floating Updates Card */}
            <AnimatePresence>
              {showUpdates && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  className="absolute bottom-full mb-4 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-innovation-purple/10 text-left z-50 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-energy-orange to-innovation-purple"></div>
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="text-innovation-purple text-xs font-black tracking-widest uppercase">Novidades</h5>
                    <button onClick={() => setShowUpdates(false)} className="text-gray-400 hover:text-innovation-purple">
                      <ICONS.X size={14} />
                    </button>
                  </div>
                  <ul className="space-y-3 normal-case tracking-normal">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-energy-orange mt-1.5 shrink-0"></div>
                      <p className="text-gray-600 text-xs font-bold leading-relaxed">Ementa das 2 Oficinas</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-innovation-purple mt-1.5 shrink-0"></div>
                      <p className="text-gray-600 text-xs font-bold leading-relaxed">Lote de Inscrições para SISTEBIB</p>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-[8px] text-gray-400 font-bold italic">
                    <ICONS.Calendar size={10} />
                    <span>Publicado hoje</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </footer>
    </div>
  );
}
