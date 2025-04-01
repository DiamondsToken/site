import React, { useState } from 'react';
import i18n from './i18n';

// Icona, se usi Lucide React
import { ChevronDown } from 'lucide-react';

// Import delle bandiere
import itFlag from './flags/it.png';
import enFlag from './flags/uk.png';
import esFlag from './flags/es.png';

// Array con info sulle lingue disponibili
const LANGUAGES = [
  { code: 'it', label: 'Italiano', flag: itFlag },
  { code: 'en', label: 'English',  flag: enFlag },
  { code: 'es', label: 'Español',  flag: esFlag },
];

const LanguageSwitcher = () => {
  // Tracciamo lingua selezionata e stato del dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]); 
  // Se vuoi un’altra lingua iniziale, cambialo qui o imposta 
  // in base a i18n.language corrente.

  // Apri/chiudi il dropdown
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Cambia lingua quando si clicca su una voce del menu
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.code);
    setSelectedLang(lang);
    setIsOpen(false); // Chiudiamo il menu
  };

  return (
    <div className="relative inline-block text-left">
      {/* Bottone che apre/chiude il dropdown */}
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-3 py-2 rounded-md
                   text-sm font-medium bg-gray-800 text-white
                   hover:bg-gray-700 transition focus:outline-none"
      >
        <img
          src={selectedLang.flag}
          alt={selectedLang.label}
          className="w-5 h-5 mr-2"
        />
        {selectedLang.label}
        <ChevronDown className="w-4 h-4 ml-2" />
      </button>

      {/* Menu a tendina */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-36 bg-white rounded-md 
                     shadow-lg z-[999]"
        >
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className="flex w-full items-center px-4 py-2 text-sm 
                           text-gray-700 hover:bg-gray-100 
                           focus:outline-none"
              >
                <img
                  src={lang.flag}
                  alt={lang.label}
                  className="w-5 h-5 mr-2"
                />
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
