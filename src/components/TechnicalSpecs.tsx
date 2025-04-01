// src/components/TechnicalSpecs.tsx
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import WP3 from '../images/WP3.png';
import { useTranslation } from 'react-i18next';

const TechnicalSpecs: React.FC = () => {
  const { t } = useTranslation();
  const specs = t('techSpecs.items', { returnObjects: true }) as string[];
  const leftSpecs = specs.slice(0, 5);
  const rightSpecs = specs.slice(5);

  return (
    <AnimatedSection className="relative container mx-auto px-4 py-16">
      {/* Sfondo: WP3 */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${WP3})` }}
      />
      {/* Contenitore contenuto */}
      <div className="relative z-10 card-gradient p-8 rounded-xl">
        <h2 className="text-4xl font-bold mb-8 text-yellow-400 text-center">
          {t('techSpecs.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonna Sinistra */}
          <div className="space-y-4">
            {leftSpecs.map((spec, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <p className="text-lg text-gray-200">{spec}</p>
              </div>
            ))}
          </div>
          {/* Colonna Destra */}
          <div className="space-y-4">
            {rightSpecs.map((spec, index) => (
              <div key={index} className="flex items-start gap-4">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <p className="text-lg text-gray-200">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TechnicalSpecs;
