import React from 'react';
import { 
  Code2, 
  Shield, 
  Terminal, 
  Globe, 
  ShoppingCart, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Smartphone,
  Instagram,
  Menu,
  X,
  TrendingUp,
  Target,
  Rocket,
  Phone,
  Mail,
  Clock,
  Send,
  Gauge
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import Header from './components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

function App() {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Restaurante Sabor & Arte",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=75&w=100&h=100",
      testimonial: "Desde que lançamos nosso site com a iDeaz, nossas reservas online aumentaram 300%. O retorno sobre o investimento foi impressionante!"
    },
    {
      name: "Ana Beatriz",
      company: "Studio de Beleza AB",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=75&w=100&h=100",
      testimonial: "Meu site ficou incrível! Profissional, moderno e fácil de atualizar. Minhas clientes adoraram e agora marco muito mais horários online."
    },
    {
      name: "Roberto Santos",
      company: "RS Engenharia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=75&w=100&h=100",
      testimonial: "A equipe da iDeaz entendeu perfeitamente nossas necessidades. O site trouxe mais credibilidade para nossa empresa e novos projetos."
    }
  ];

  const statistics = [
    { number: "93%", description: "dos consumidores pesquisam online antes de comprar" },
    { number: "75%", description: "julgam a credibilidade pela qualidade do site" },
    { number: "24/7", description: "seu negócio disponível o tempo todo" },
    { number: "46%", description: "mais vendas com presença digital profissional" }
  ];

  const MemoizedTestimonialCard = React.memo(TestimonialCard);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 font-sans antialiased">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[85vh] flex items-center overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16">
        {/* Background principal com gradiente animado */}
        <div className="absolute inset-0 bg-hero-gradient"></div>
        
        {/* Grid tecnológico animado */}
        <div className="absolute inset-0">
          <div className="tech-grid"></div>
        </div>

        {/* Efeito de partículas flutuantes */}
        <div className="absolute inset-0">
          <div className="tech-particles"></div>
        </div>

        {/* Círculos de luz com blur */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="glow-circle top-0 -left-1/4"></div>
          <div className="glow-circle bottom-0 -right-1/4"></div>
        </div>

        {/* Linhas de conexão */}
        <div className="absolute inset-0">
          <div className="connection-lines"></div>
        </div>

        <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Coluna de texto */}
              <div className="text-left lg:text-left space-y-4 sm:space-y-6">
                {/* Badge visível apenas em desktop */}
                <div className="hidden sm:inline-block mb-4">
                  <span className="text-sm sm:text-base font-semibold px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 animate-pulse flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-[#ff4d6d]" />
                    Desenvolvedor Web Certificado
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 leading-tight">
                    Transforme sua 
                    <span className="text-gradient block text-[3.25rem] sm:text-5xl lg:text-6xl xl:text-7xl mt-2 mb-2" style={{ lineHeight: '1.2', paddingBottom: '0.1em' }}>
                      Presença Digital
                    </span>
                    em Resultados
                  </h1>
                  <p className="text-lg sm:text-lg lg:text-xl text-white/90 max-w-xl pr-8">
                    Criamos sites profissionais que destacam seu negócio no mundo digital
                  </p>

                  {/* Badge visível apenas em mobile */}
                  <div className="sm:hidden flex justify-start">
                    <span className="text-sm font-semibold px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 animate-pulse flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-[#ff4d6d]" />
                      Desenvolvedor Web Certificado
                    </span>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 mt-8 lg:mt-0">
                {/* Primeira coluna - visível em todas as telas */}
                <div>
                  <div className="group bg-black/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 sm:duration-500 animate-float sm:animate-float-slow h-full">
                    <Code2 className="h-8 w-8 text-[#ff4d6d] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg sm:text-lg lg:text-xl text-white font-bold group-hover:text-[#ff4d6d] transition-colors">Código Limpo</h3>
                    <p className="text-sm sm:text-base text-white/90">
                      Desenvolvimento profissional e otimizado
                    </p>
                  </div>
                </div>

                {/* Segunda coluna - visível em todas as telas */}
                <div>
                  <div className="group bg-black/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 sm:duration-500 animate-float sm:animate-float-slow h-full">
                    <Smartphone className="h-8 w-8 text-[#ff4d6d] mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg sm:text-lg lg:text-xl text-white font-bold group-hover:text-[#ff4d6d] transition-colors">100% Responsivo</h3>
                    <p className="text-sm sm:text-base text-white/90">
                      Perfeito em todos os dispositivos
                    </p>
                  </div>
                </div>

                {/* Cards adicionais - visíveis apenas em tablets e desktop */}
                <div className="hidden sm:block">
                  <div className="group bg-black/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 sm:duration-500 animate-float sm:animate-float-slow h-full" style={{animationDelay: '0.4s'}}>
                    <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-[#ff4d6d] mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base sm:text-lg lg:text-xl text-white font-bold group-hover:text-[#ff4d6d] transition-colors">Site Protegido</h3>
                    <p className="text-sm sm:text-base text-white/90">
                      Ajuda técnica quando precisar
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="group bg-black/20 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 sm:duration-500 animate-float sm:animate-float-slow h-full" style={{animationDelay: '0.6s'}}>
                    <Terminal className="h-6 sm:h-8 w-6 sm:w-8 text-[#ff4d6d] mb-2 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base sm:text-lg lg:text-xl text-white font-bold group-hover:text-[#ff4d6d] transition-colors">Atualize Quando Quiser</h3>
                    <p className="text-sm sm:text-base text-white/90">
                      Controle total do seu conteúdo
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-start pt-4 sm:pt-6">
                <a 
                  href="https://wa.me/5541987002441?text=Olá! Gostaria de criar um site profissional." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#ff4d6d] to-[#c7173b] sm:bg-gradient-to-r sm:from-[#ff4d6d] sm:via-[#e63b5d] sm:to-[#c7173b] text-white rounded-full transition-all shadow-lg hover:scale-105 text-base sm:text-lg relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    Comece Agora
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff3d5d] to-[#b31535] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 lg:mb-16">
            Transforme seu Negócio com um Site Profissional
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-[#ff4d6d]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Aumente suas Vendas</h3>
              <p className="text-gray-300">
                Multiplique suas vendas com uma presença online profissional e estratégias de marketing digital eficientes.
              </p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-[#ff4d6d]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Alcance seu Público</h3>
              <p className="text-gray-300">
                Apareça para quem realmente importa com SEO otimizado e estratégias de marketing direcionadas.
              </p>
            </div>
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg border border-white/10">
              <div className="w-12 h-12 bg-[#ff4d6d]/20 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-[#ff4d6d]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cresça Rapidamente</h3>
              <p className="text-gray-300">
                Expanda seu negócio com ferramentas automatizadas e integrações que facilitam sua gestão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#ff4d6d] mb-2">{stat.number}</div>
                <p className="text-white/80 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c7173b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 text-shadow">
            Por que escolher a iDeaz?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Smartphone className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">100% Responsivo</h3>
              <p className="text-white/90">Perfeito em todos os dispositivos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Gauge className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">Alta Performance</h3>
              <p className="text-white/90">Carregamento ultrarrápido</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="h-12 w-12 text-white mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-2">100% Seguro</h3>
              <p className="text-white/90">Proteção e monitoramento 24/7</p>
            </div>
          </div>
          <button 
            onClick={() => window.open('https://wa.me/5541987002441?text=Olá! Gostaria de informações sobre criação de sites profissionais.', '_blank')}
            className="group bg-white text-[#c7173b] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center mx-auto shadow-lg font-semibold"
          >
            Solicitar Orçamento Gratuito
            <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Nossos Serviços</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Soluções completas para todos os tipos de negócios. Escolha o plano ideal para sua empresa e comece a vender mais hoje mesmo.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe />}
              title="Sites Institucionais"
              description="Sites profissionais com design exclusivo, otimizados para converter visitantes em clientes."
            />
            <ServiceCard
              icon={<ShoppingCart />}
              title="E-commerce"
              description="Lojas virtuais completas com gestão de produtos, pagamentos e entregas integrados."
            />
            <ServiceCard
              icon={<Terminal />}
              title="Landing Pages"
              description="Páginas de alta conversão para campanhas e lançamentos com foco em resultados."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nosso Portfólio
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Transformamos ideias em experiências digitais memoráveis. 
              Confira alguns dos projetos que desenvolvemos.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            watchSlidesProgress={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="portfolio-swiper"
            preloadImages={false}
            lazy={true}
          >
            {/* Projeto 1 - Site Institucional */}
            <SwiperSlide>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    loading="lazy"
                    decoding="async"
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=75&w=800" 
                    alt="Site Institucional Moderno"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Site Institucional</h3>
                      <p className="text-white/90 text-sm">
                        Design moderno e responsivo com foco em conversão
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Projeto 2 - E-commerce */}
            <SwiperSlide>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    loading="lazy"
                    decoding="async"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=75&w=800" 
                    alt="E-commerce Completo"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">E-commerce</h3>
                      <p className="text-white/90 text-sm">
                        Loja virtual completa com gestão integrada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Projeto 3 - Landing Page */}
            <SwiperSlide>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    loading="lazy"
                    decoding="async"
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=75&w=800" 
                    alt="Landing Page de Alta Conversão"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">Landing Page</h3>
                      <p className="text-white/90 text-sm">
                        Página otimizada para conversão de leads
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Clientes Satisfeitos
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre os resultados alcançados com seus sites.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MemoizedTestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Vamos Conversar?</h2>
              <p className="text-gray-300 mb-8">
                Nossa equipe está pronta para transformar sua presença digital. Solicite um orçamento gratuito e ganhe uma consultoria especializada!
              </p>
              <div className="space-y-6">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(41) 98700-2441</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>Ideazbrasil@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Atendimento: Seg-Sex, 9h às 18h</span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* ... outros elementos do footer ... */}
            
            <div className="text-sm text-gray-400">
              <Link 
                to="/politica-de-privacidade"
                className="hover:text-white transition-colors mr-4"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos-de-uso"
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;