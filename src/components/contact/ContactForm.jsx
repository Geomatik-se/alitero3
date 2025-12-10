import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiArrowLeft, FiUpload } = FiIcons;

// StaticForms Configuration
const STATICFORMS_ACCESS_KEY = 'sf_71gh85f781lfgmk6ifcj3ce7';

function ContactForm({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Organization
    organizationName: '',
    organizationType: '',
    activityAreas: [],
    existingWebsite: '',
    
    // Step 2: Project Scope
    projectType: '',
    pageCount: '',
    requiredFeatures: [],
    multilingual: false,
    
    // Step 3: Design & Requirements
    designPreference: '',
    colorPreferences: '',
    inspirations: '',
    accessibility: false,
    corporateDesign: false,
    
    // Step 4: Timeline & Budget
    projectStart: '',
    deadline: '',
    budgetRange: '',
    
    // Step 5: Contact
    contactPerson: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });

  const totalSteps = 5;

  const navigate = useNavigate();

  const organizationTypes = [
    'Eingetragener Verein (e.V.)',
    'Gemeinnützige GmbH (gGmbH)',
    'Stiftung',
    'Initiative/Bürgergruppe',
    'NGO/Non-Profit',
    'Sonstiges'
  ];

  const activityAreas = [
    'Umwelt- & Klimaschutz',
    'Soziale Hilfe',
    'Bildung & Erziehung',
    'Gesundheit & Pflege',
    'Kinder & Jugend',
    'Senioren',
    'Integration & Migration',
    'Kultur & Sport',
    'Tierschutz',
    'Entwicklungshilfe',
    'Menschenrechte'
  ];

  const requiredFeatures = [
    'Blog/News-Bereich',
    'Online-Spendenfunktion',
    'Mitgliederbereich',
    'Veranstaltungskalender',
    'Newsletter-Anmeldung',
    'Volunteer-Portal',
    'Online-Shop',
    'Mehrsprachigkeit',
    'Barrierefreiheit',
    'Social Media Integration'
  ];

  const budgetRanges = [
    'Unter 2.000€',
    '2.000€ - 5.000€',
    '5.000€ - 10.000€',
    '10.000€ - 20.000€',
    'Über 20.000€',
    'Noch nicht festgelegt'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    

    try {
      // Prepare data for StaticForms
      const staticFormsData = {
        accessKey: STATICFORMS_ACCESS_KEY,
        name: formData.contactPerson,
        email: formData.email,
        phone: formData.phone || 'Nicht angegeben',
        subject: `Neue Projektanfrage von ${formData.organizationName}`,
        message: `
=== ORGANISATION ===
Name: ${formData.organizationName}
Art: ${formData.organizationType}
Tätigkeitsbereiche: ${formData.activityAreas.join(', ') || 'Keine angegeben'}
Bestehende Website: ${formData.existingWebsite || 'Keine'}

=== PROJEKTUMFANG ===
Projektart: ${formData.projectType}
Seitenanzahl: ${formData.pageCount || 'Nicht angegeben'}
Benötigte Funktionen: ${formData.requiredFeatures.join(', ') || 'Keine ausgewählt'}
Mehrsprachigkeit: ${formData.multilingual ? 'Ja' : 'Nein'}

=== DESIGN & ANFORDERUNGEN ===
Design-Präferenz: ${formData.designPreference || 'Keine Präferenz'}
Farbwünsche: ${formData.colorPreferences || 'Keine angegeben'}
Inspirationen: ${formData.inspirations || 'Keine angegeben'}
Barrierefreiheit wichtig: ${formData.accessibility ? 'Ja' : 'Nein'}
Corporate Design vorhanden: ${formData.corporateDesign ? 'Ja' : 'Nein'}

=== TIMELINE & BUDGET ===
Gewünschter Start: ${formData.projectStart || 'Flexibel'}
Deadline: ${formData.deadline || 'Keine'}
Budgetrahmen: ${formData.budgetRange || 'Nicht angegeben'}

=== ZUSÄTZLICHE ANMERKUNGEN ===
${formData.additionalNotes || 'Keine'}
        `.trim(),
        replyTo: formData.email
      };

      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(staticFormsData)
      });

      const result = await response.json();

      if (result && result.success) {
        console.log('Form submitted successfully via StaticForms');
        setSubmitSuccess(true);
        setSubmitError(null);
        if (typeof onSubmit === 'function') onSubmit();
      } else {
        console.warn('StaticForms response indicates failure, continuing to thank-you page.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // Fehler nur im Log behalten; wir zeigen dem Nutzer keine rote Fehlermeldung mehr.
    } finally {
      setIsSubmitting(false);
      // Immer zur Dankeseite weiterleiten (keine rote Fehlermeldung angezeigt)
      try {
        navigate('/anfrage/danke');
      } catch (e) {
        // Fallback: direkte URL-Änderung
        window.location.href = '/anfrage/danke';
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name der Organisation *
              </label>
              <input
                type="text"
                required
                value={formData.organizationName}
                onChange={(e) => handleInputChange('organizationName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="z.B. Hilfe für Kinder e.V."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Art der Organisation *
              </label>
              <select
                required
                value={formData.organizationType}
                onChange={(e) => handleInputChange('organizationType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Bitte wählen...</option>
                {organizationTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tätigkeitsbereiche (Mehrfachauswahl möglich)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {activityAreas.map((area) => (
                  <label key={area} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.activityAreas.includes(area)}
                      onChange={() => handleArrayChange('activityAreas', area)}
                      className="rounded text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-sm text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aktuelle Website (falls vorhanden)
              </label>
              <input
                type="url"
                value={formData.existingWebsite}
                onChange={(e) => handleInputChange('existingWebsite', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="https://www.ihre-website.de"
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Art des Projekts *
              </label>
              <div className="space-y-2">
                {['Neue Website erstellen', 'Website-Relaunch', 'Bestehende Website optimieren'].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={formData.projectType === type}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className="text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Geschätzte Seitenanzahl
              </label>
              <select
                value={formData.pageCount}
                onChange={(e) => handleInputChange('pageCount', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Bitte wählen...</option>
                <option value="1-5">1-5 Seiten</option>
                <option value="6-15">6-15 Seiten</option>
                <option value="16-30">16-30 Seiten</option>
                <option value="30+">Mehr als 30 Seiten</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Benötigte Funktionen
              </label>
              <div className="grid grid-cols-2 gap-3">
                {requiredFeatures.map((feature) => (
                  <label key={feature} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.requiredFeatures.includes(feature)}
                      onChange={() => handleArrayChange('requiredFeatures', feature)}
                      className="rounded text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.multilingual}
                  onChange={(e) => handleInputChange('multilingual', e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-600"
                />
                <span className="text-gray-700">Mehrsprachigkeit erforderlich</span>
              </label>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Design-Präferenz
              </label>
              <div className="space-y-2">
                {['Modern & Minimalistisch', 'Klassisch & Seriös', 'Verspielt & Kreativ', 'Noch nicht sicher'].map((style) => (
                  <label key={style} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="designPreference"
                      value={style}
                      checked={formData.designPreference === style}
                      onChange={(e) => handleInputChange('designPreference', e.target.value)}
                      className="text-purple-600 focus:ring-purple-600"
                    />
                    <span className="text-gray-700">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Farbwünsche
              </label>
              <input
                type="text"
                value={formData.colorPreferences}
                onChange={(e) => handleInputChange('colorPreferences', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="z.B. Grün (Natur), Blau (Vertrauen), keine Präferenz..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vorbilder/Inspirationen
              </label>
              <textarea
                value={formData.inspirations}
                onChange={(e) => handleInputChange('inspirations', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Links zu Websites, die Ihnen gefallen..."
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.accessibility}
                  onChange={(e) => handleInputChange('accessibility', e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-600"
                />
                <span className="text-gray-700">Barrierefreiheit ist wichtig</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.corporateDesign}
                  onChange={(e) => handleInputChange('corporateDesign', e.target.checked)}
                  className="rounded text-purple-600 focus:ring-purple-600"
                />
                <span className="text-gray-700">Corporate Design ist vorhanden</span>
              </label>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gewünschter Projektstart
              </label>
              <input
                type="date"
                value={formData.projectStart}
                onChange={(e) => handleInputChange('projectStart', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deadline (falls vorhanden)
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => handleInputChange('deadline', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budgetrahmen
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="">Bitte wählen...</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ansprechpartner *
              </label>
              <input
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Vor- und Nachname"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail-Adresse *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="ihre@email.de"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Telefonnummer
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="+49 123 456 789"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zusätzliche Anmerkungen
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Haben Sie noch weitere Wünsche oder Fragen?"
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Schritt {currentStep} von {totalSteps}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((currentStep / totalSteps) * 100)}% abgeschlossen
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="progress-bar bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {currentStep === 1 && 'Ihre Organisation'}
          {currentStep === 2 && 'Projektumfang'}
          {currentStep === 3 && 'Design & Anforderungen'}
          {currentStep === 4 && 'Timeline & Budget'}
          {currentStep === 5 && 'Kontaktdaten'}
        </h2>
        <p className="text-gray-600">
          {currentStep === 1 && 'Erzählen Sie uns von Ihrer Organisation und Ihren Zielen.'}
          {currentStep === 2 && 'Welche Art von Website benötigen Sie?'}
          {currentStep === 3 && 'Wie soll Ihre Website aussehen und funktionieren?'}
          {currentStep === 4 && 'Wann soll das Projekt starten und welches Budget haben Sie?'}
          {currentStep === 5 && 'Wie können wir Sie erreichen?'}
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit}>
        {renderStep()}

        {/* Success Message */}
        {submitSuccess && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm">Vielen Dank — Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze.</p>
          </div>
        )}

        {/* Error Message (only show when no success) */}
        {submitError && !submitSuccess && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{submitError}</p>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1 || isSubmitting}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium ${
              currentStep === 1 || isSubmitting
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <SafeIcon icon={FiArrowLeft} />
            <span>Zurück</span>
          </button>

          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2"
            >
              <span>Weiter</span>
              <SafeIcon icon={FiArrowRight} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary text-white px-8 py-3 rounded-lg font-medium flex items-center space-x-2 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Wird gesendet...</span>
                </>
              ) : (
                <>
                  <span>Anfrage senden</span>
                  <SafeIcon icon={FiArrowRight} />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
