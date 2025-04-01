// src/components/AirdropSection.tsx
import React from 'react';
import { Gift } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Trans, useTranslation } from 'react-i18next';
import gift from '../images/gift.png';
const AirdropSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection className="container mx-auto px-4 py-16">
      <div className="card-gradient p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Colonna Sinistra: Testo e Call To Action */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gradient">
              <Trans i18nKey="airdrop.title" />
            </h2>
            <p className="text-lg text-gray-200 mb-4">
              <Trans
                i18nKey="airdrop.description1"
                components={{ strong: <strong className="text-white" /> }}
              />
            </p>
            <p className="text-lg text-gray-200 mb-6">
              <Trans
                i18nKey="airdrop.description2"
                components={{ strong: <strong className="text-white" /> }}
              />
            </p>
            <a
              href="https://t.me/dmnsairdrop_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:opacity-90 transition"
            >
              <Gift className="w-6 h-6 mr-2" />
              <Trans i18nKey="airdrop.cta" />
            </a>
          </div>
          {/* Colonna Destra: Icona decorativa */}
          <div className="flex justify-center">
            <div className="p-8 border-4 border-yellow-400 rounded-full">
              <img src={gift} />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AirdropSection;
