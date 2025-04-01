// CookieBanner.tsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Preferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertisement: boolean;
}

const defaultPreferences: Preferences = {
  necessary: true, // Sempre attivo
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
};

const CookieBanner: React.FC = () => {
  const { t } = useTranslation(); // Hook per le traduzioni
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);

  useEffect(() => {
    const savedPrefs = localStorage.getItem('cookieConsent');
    if (savedPrefs) {
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allTrue: Preferences = {
      necessary: true,
      functional: true,
      analytics: true,
      performance: true,
      advertisement: true,
    };
    setPreferences(allTrue);
    localStorage.setItem('cookieConsent', JSON.stringify(allTrue));
    setIsBannerVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsBannerVisible(false);
  };

  const handleToggle = (category: keyof Preferences) => {
    if (category === 'necessary') return; // Non modificabile
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 p-4 z-50">
      <div className="max-w-3xl mx-auto card-gradient p-6">
        {/* Schermata iniziale (senza personalizzazione) */}
        {!showCustomize && (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="md:mr-4">
              <h2 className="font-bold text-lg mb-1 text-gradient">
                {t('cookieBanner.initialTitle')}
              </h2>
              <p className="text-sm">
                {t('cookieBanner.initialDescription')}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowCustomize(true)}
                className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 hover:text-white transition hover-scale"
              >
                {t('cookieBanner.customizeBtn')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-700 transition hover-scale"
              >
                {t('cookieBanner.acceptAllBtn')}
              </button>
            </div>
          </div>
        )}

        {/* Schermata di personalizzazione */}
        {showCustomize && (
          <div className="space-y-4">
            <h2 className="font-bold text-lg text-gradient">
              {t('cookieBanner.secondTitle')}
            </h2>
            <p className="text-sm">{t('cookieBanner.secondDescription1')}</p>
            <p className="text-sm">{t('cookieBanner.secondDescription2')}</p>
            <p className="text-sm">{t('cookieBanner.secondDescription3')}</p>
            <p className="text-sm">{t('cookieBanner.secondDescription4')}</p>

            <button
              onClick={() => setShowCustomize(false)}
              className="underline text-sm text-yellow-600 hover:text-yellow-800"
            >
              {t('cookieBanner.showLessBtn')}
            </button>

            <div className="border-t pt-4 space-y-4">
              {/* NECESSARY */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('cookieBanner.categories.necessary.title')}
                  </div>
                  <p className="text-xs">
                    {t('cookieBanner.categories.necessary.description')}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="cursor-not-allowed"
                />
              </div>

              {/* FUNCTIONAL */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('cookieBanner.categories.functional.title')}
                  </div>
                  <p className="text-xs">
                    {t('cookieBanner.categories.functional.description')}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => handleToggle('functional')}
                />
              </div>

              {/* ANALYTICS */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('cookieBanner.categories.analytics.title')}
                  </div>
                  <p className="text-xs">
                    {t('cookieBanner.categories.analytics.description')}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleToggle('analytics')}
                />
              </div>

              {/* PERFORMANCE */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('cookieBanner.categories.performance.title')}
                  </div>
                  <p className="text-xs">
                    {t('cookieBanner.categories.performance.description')}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.performance}
                  onChange={() => handleToggle('performance')}
                />
              </div>

              {/* ADVERTISEMENT */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {t('cookieBanner.categories.advertisement.title')}
                  </div>
                  <p className="text-xs">
                    {t('cookieBanner.categories.advertisement.description')}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.advertisement}
                  onChange={() => handleToggle('advertisement')}
                />
              </div>
            </div>

            <div className="flex space-x-2 pt-4">
              <button
                onClick={handleSavePreferences}
                className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 hover:text-white transition hover-scale"
              >
                {t('cookieBanner.savePreferencesBtn')}
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-yellow-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-700 transition hover-scale"
              >
                {t('cookieBanner.acceptAllBtn')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
