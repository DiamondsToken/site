import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './translations/LanguageSwitcher';
import {
  ChevronDown,
  Zap,
  Coins,
  Users,
  Layers,
  Globe2,
  UserCheck,
  MonitorSmartphone,
  Cpu,
  DollarSign,
} from 'lucide-react';

import ParticlesBackground from './components/ParticlesBackground';
import AnimatedSection from './components/AnimatedSection';
import TechnicalSpecs from './components/TechnicalSpecs';
import AirdropSection from './components/AirdropSection';
import WP4 from './images/WP4.png';
import Logo from './images/logonuovo.png';
import WP5 from './images/WP5.png';
import RaydiumLogo from "./images/logoRaydium.png";

import LogoAcademy from './images/Logo_Academy.svg';
import LogoCommerce from './images/LogoCommerce.svg';
import logoDexDao from './images/LogoDEX_DAO.svg';
import LogoPay from './images/LogoPay.svg';
import LogoSocial from './images/LogoSocial.svg';

import CookieBanner from './components/CookieBanner';
const App = () => {
  const { t } = useTranslation();

  return (
    <div className="gradient-bg min-h-screen text-white relative">
    {/* Effetto Particelle sullo Sfondo */}
      <ParticlesBackground />
      

      <header className="container mx-auto px-4 py-6 relative z-50">

        <nav className="flex items-center justify-between">
          {/* LanguageSwitcher (SINISTRA) */}
          <LanguageSwitcher />
          {/* Bottone GitBook (DESTRA) */}
          <a
            href="https://diamonds-group.gitbook.io/diamonds-group"
            className="relative inline-flex items-center justify-start px-5 py-3 
                       overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]" />
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 
                             ease-in-out rotate-45 -translate-x-56 -translate-y-24 
                             bg-white opacity-100 group-hover:-translate-x-8" 
            />
            <span className="relative w-full text-left text-white transition-colors 
                             duration-200 ease-in-out group-hover:text-gray-900"
            >
              GitBook
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full" />
          </a>
        </nav>
      </header>
      {/* HERO SECTION */}
      <section className="container mx-auto px-4 pt-12 pb-20 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <img src={Logo} alt="DMNS" className="mx-auto mb-6 w-80" />
          <h1
            className="text-3xl md:text-5xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: t('hero.welcome') }}
          />
          <p className="text-xl max-w-3xl mx-auto text-white/80 mb-8" dangerouslySetInnerHTML={{ __html: t('hero.description') }} />
          <div className="flex justify-center gap-4">
  <button
    onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })}
    className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
  >
    {t('hero.roadmapButton')}
  </button>

  <button
    onClick={() => document.getElementById('purchase')?.scrollIntoView({ behavior: 'smooth' })}
    className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
  >
    {t('hero.purchaseButton')}
  </button>
</div>
        </motion.div>
      </section>

      {/* SEZIONE INTRO / VISION & VALUES */}
      <AnimatedSection id="unique-id-1" className="container mx-auto px-4 py-16">
        <div className="relative z-10 card-gradient p-8 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-8">{t('vision.title')}</h2>
              <p className="text-lg text-gray-200 mb-6">{t('vision.description')}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>
                  <strong className="text-yellow-400">
                    {t('vision.list.innovation').split(':')[0]}:
                  </strong>{" "}
                  {t('vision.list.innovation').split(':')[1].trim()}
                </li>
                <li>
                  <strong className="text-yellow-400">
                    {t('vision.list.decentralization').split(':')[0]}:
                  </strong>{" "}
                  {t('vision.list.decentralization').split(':')[1].trim()}
                </li>
                <li>
                  <strong className="text-yellow-400">
                    {t('vision.list.transparency').split(':')[0]}:
                  </strong>{" "}
                  {t('vision.list.transparency').split(':')[1].trim()}
                </li>
                <li>
                  <strong className="text-yellow-400">
                    {t('vision.list.inclusivity').split(':')[0]}:
                  </strong>{" "}
                  {t('vision.list.inclusivity').split(':')[1].trim()}
                </li>
                <li>
                  <strong className="text-yellow-400">
                    {t('vision.list.sharedGrowth').split(':')[0]}:
                  </strong>{" "}
                  {t('vision.list.sharedGrowth').split(':')[1].trim()}
                </li>
              </ul>
            </div>
            <motion.div className="relative rounded-2xl overflow-hidden" initial={{ opacity: 0, x: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <img src={WP4} alt="Vision" className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* SEZIONE FEATURES UNICHE (PRIMA PARTE) */}
      <AnimatedSection id="unique-id-2" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-center">
          {t('features.primaryTitle', 'Caratteristiche Principali')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t('features.primary', { returnObjects: true }).map((feature, index) => (
            <div key={index} className="card-gradient p-8 rounded-xl text-center hover-scale">
              {index === 0 && <Coins className="w-12 h-12 mx-auto text-yellow-400 mb-4" />}
              {index === 1 && <Zap className="w-12 h-12 mx-auto text-yellow-400 mb-4" />}
              {index === 2 && <Users className="w-12 h-12 mx-auto text-yellow-400 mb-4" />}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <div className="container mx-auto px-4 py-16">
        <TechnicalSpecs />
      </div>

     {/* SEZIONE FEATURES UNICHE (SECONDA PARTE) */}
<AnimatedSection id="123455556" className="container mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold mb-12 text-gradient text-center">
    {t('features.extendedTitle', 'Più di una Cripto: Un Ecosistema')}
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {t('features.extended', { returnObjects: true }).map((feature: any, index: number) => {
      let Icon;
      switch (index) {
        case 0:
          Icon = LogoAcademy;
          break;
        case 1:
          Icon = LogoCommerce;
          break;
        case 2:
          Icon = logoDexDao;
          break;
        case 3:
          Icon = LogoPay;
          break;
        case 4:
          Icon = LogoSocial;
          break;
        default:
          Icon = LogoSocial; // Fallback in caso di più elementi
      }
      return (
        <div key={index} className="card-gradient p-8 rounded-xl text-center hover-scale">
          <img src={Icon} alt="Feature Icon" className="w-60 h-60  mb-4" />
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      );
    })}
  </div>
</AnimatedSection>

      {/* SEZIONE PERCHÈ SOLANA */}
      <AnimatedSection id="12344" className="py-24 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gradient">{t('solana.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {t('solana.cards', { returnObjects: true }).map((card, index) => (
                  <div key={index} className="card-gradient rounded-2xl p-6 hover-scale">
                    <h3 className="text-xl text-yellow-400 font-bold mb-2">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-300">{t('solana.description')}</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src={WP5} alt="Solana Ecosystem" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SEZIONE ROADMAP */}
      <AnimatedSection id="roadmap" className="container mx-auto px-4 py-24" >
        <h2 className="text-4xl font-bold mb-16 text-gradient text-center">
          {t('roadmap.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {t('roadmap.items', { returnObjects: true }).map((item, idx) => (
            <div key={idx} className="card-gradient rounded-2xl p-8 hover-scale flex flex-col">
              <div className="text-yellow-400 text-xl font-bold mb-4">{item.quarter}</div>
              {item.holdersTarget && (
                <div className="text-2xl font-bold mb-4">{item.holdersTarget}</div>
              )}
              <ul className="space-y-2 text-gray-300 flex-1">
                {item.milestones.map((milestone, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ChevronDown className="w-4 h-4 text-yellow-400 mt-1" />
                    <span>{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* SEZIONE COMMUNITY GROWTH */}
<AnimatedSection id="232323" className="relative py-24 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 gradient-bg2 opacity-60 z-10"></div>
  </div>
  <div className="container mx-auto px-4 relative z-20">
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">
        {t('community.title', 'La Nostra Community Sta Crescendo Rapidamente')}
      </h2>
      <p className="text-xl mb-8 text-white/90">
        {t(
          'community.description',
          'È il momento di agire. Seguici, iscriviti ai nostri canali e non perderti aggiornamenti, eventi e opportunità esclusive.'
        )}
      </p>

      {/* Pulsanti social: X, Telegram, WhatsApp */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* X */}
        <a
          href="https://x.com/DmnsGroup"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]" />
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Twitter / X
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-full" />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/dmnstoken"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
        >
          <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]" />
          <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8" />
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            Telegram
          </span>
          <span className="absolute inset-0 border-2 border-white rounded-full" />
        </a>

        {/* WhatsApp */}
        
      </div>
    </div>
  </div>
</AnimatedSection>


<AnimatedSection className="container mx-auto px-4 py-24" id="purchase">
      <div className="relative z-10 card-gradient p-8 rounded-xl">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400 text-center">
          {/* Titolo sezione tradotto */}
          {t('purchase.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Colonna sinistra: spiegazione esaustiva con menu a tendina */}
          <div>
            {/* Testo introduttivo multilingua */}
            <p className="text-lg text-gray-200 mb-6">
              {t('purchaseDetailed.introText')}
            </p>

            <div className="space-y-4">
              {/* Fase 1 */}
              <details className="bg-black/30 p-4 rounded-lg">
                <summary className="cursor-pointer font-bold text-yellow-400">
                  {t('purchaseDetailed.steps.step1.title')}
                </summary>
                <div className="mt-2 text-gray-200 space-y-2">
                  <p>
                    <strong>{t('purchaseDetailed.steps.step1.list.0.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step1.list.0.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step1.list.1.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step1.list.1.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step1.list.2.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step1.list.2.text')}
                  </p>
                </div>
              </details>

              {/* Fase 2 */}
              <details className="bg-black/30 p-4 rounded-lg">
                <summary className="cursor-pointer font-bold text-yellow-400">
                  {t('purchaseDetailed.steps.step2.title')}
                </summary>
                <div className="mt-2 text-gray-200 space-y-2">
                  <p>
                    <strong>{t('purchaseDetailed.steps.step2.list.0.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step2.list.0.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step2.list.1.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step2.list.1.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step2.list.2.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step2.list.2.text')}
                  </p>
                </div>
              </details>

              {/* Fase 3 */}
              <details className="bg-black/30 p-4 rounded-lg">
                <summary className="cursor-pointer font-bold text-yellow-400">
                  {t('purchaseDetailed.steps.step3.title')}
                </summary>
                <div className="mt-2 text-gray-200 space-y-2">
                  <p>
                    <strong>{t('purchaseDetailed.steps.step3.list.0.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step3.list.0.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step3.list.1.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step3.list.1.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step3.list.2.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step3.list.2.text')}
                  </p>
                </div>
              </details>

              {/* Fase 4 */}
              <details className="bg-black/30 p-4 rounded-lg">
                <summary className="cursor-pointer font-bold text-yellow-400">
                  {t('purchaseDetailed.steps.step4.title')}
                </summary>
                <div className="mt-2 text-gray-200 space-y-2">
                  <p>
                    <strong>{t('purchaseDetailed.steps.step4.list.0.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step4.list.0.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step4.list.1.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step4.list.1.text')}
                  </p>
                  <p>
                    <strong>{t('purchaseDetailed.steps.step4.list.2.label')}:</strong>{" "}
                    {t('purchaseDetailed.steps.step4.list.2.text')}
                  </p>
                </div>
              </details>
            </div>
          </div>

          {/* Colonna destra: collegamento wallet e acquisto diretto */}
          <div>
            <img 
              src={RaydiumLogo} 
              alt="Raydium Logo" 
              className="w-full h-full object-cover" 
            />
            
            <div className="text-center mt-4">
              <a
                href="https://raydium.io/swap/?inputMint=3cegQvfWj32SVViSRvYqeAxDxqqPAb4ud67EY75joMr5&outputMint=sol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
              >
                {t('purchaseDetailed.raydiumButton')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

      {/* SEZIONE AIRDROP */}
      <AirdropSection />

      {/* SEZIONE FAQ */}
      <AnimatedSection id="4384942" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-gradient text-center">{t('faq.title')}</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {t('faq.items', { returnObjects: true }).map((faq, index) => (
            <details key={index} className="p-4 bg-black/30 rounded-lg cursor-pointer hover:bg-black/40 transition">
              <summary className="marker:text-yellow-400 text-lg font-bold text-gray-300 mb-2 select-none">
                {faq.question}
              </summary>
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      {/* SEZIONE DISCLAIMER & CANALI UFFICIALI */}
      <AnimatedSection id="1223312" className="container mx-auto px-4 py-16">
        <div className="card-gradient p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gradient text-center">{t('disclaimer.title')}</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">{t('disclaimer.text')}</p>
          <h2 className="text-3xl font-bold mb-6 text-gradient text-center">{t('disclaimer.channelsTitle')}</h2>
          <ul className="space-y-3 text-gray-300 text-center text-lg">
            {t('disclaimer.channels', { returnObjects: true }).map((channel, index) => (
              <li key={index}>
                <strong className="text-yellow-400">{channel.name}</strong>:{" "}
                <a href={channel.url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover-scale">
                  {channel.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-2">{t('footer.text')}</p>
          <div className="flex justify-center space-x-6 mb-6"> 
          <a href="mailto:dmnstoken@gmail.com" className="text-yellow-400 hover:underline">
            dmnstoken@gmail.com
          </a>
        </div>

        </div>
      </footer>
      <CookieBanner />
    </div>
  );
};

export default App;
