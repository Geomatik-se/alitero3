import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiSend } = FiIcons;

const RequestForm = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage].requestForm;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    location: '',
    status: '',
    websiteLink: '',
    scope: [],
    scopeOther: '',
    goals: '',
    languages: [],
    languageOther: '',
    budget: '',
    timeline: '',
    support: [],
    notes: '',
    privacy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'privacy') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else if (name === 'scope' || name === 'languages' || name === 'support') {
        const currentArray = formData[name];
        let newArray;
        if (checked) {
          newArray = [...currentArray, value];
        } else {
          newArray = currentArray.filter(item => item !== value);
        }
        setFormData(prev => ({ ...prev, [name]: newArray }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="bg-green-50 rounded-xl p-10 text-center border border-green-200 shadow-sm">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <SafeIcon icon={FiCheck} className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.success}</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 md:p-10 space-y-10">
        
        {/* Contact Details */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            1. {t.sections.contact}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.name} *</label>
              <input type="text" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.email} *</label>
              <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.phone}</label>
              <input type="tel" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.company}</label>
              <input type="text" name="company" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            2. {t.sections.company}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.industry}</label>
              <input type="text" name="industry" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.location}</label>
              <input type="text" name="location" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* Website Status */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            3. {t.sections.website}
          </h3>
          <div className="space-y-4">
            {Object.entries(t.options.status).map(([key, label]) => (
              <label key={key} className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="status" value={key} className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300" onChange={handleChange} />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
            {formData.status !== 'none' && formData.status !== '' && (
               <div className="pt-2">
                 <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.websiteLink}</label>
                 <input type="url" name="websiteLink" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
               </div>
            )}
          </div>
        </section>

        {/* Scope */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            4. {t.sections.scope}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {Object.entries(t.options.scope).map(([key, label]) => (
              <label key={key} className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" name="scope" value={key} className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={handleChange} />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>
          {formData.scope.includes('other') && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.otherScope}</label>
              <input type="text" name="scopeOther" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange} />
            </div>
          )}
          
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-3">{t.options.languages.other}</h4>
            <div className="flex flex-wrap gap-4">
              {['de', 'en', 'sv', 'hu'].map((lang) => (
                <label key={lang} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="languages" value={lang} className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={handleChange} />
                  <span className="text-gray-700">{t.options.languages[lang]}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.goals}</label>
            <textarea name="goals" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange}></textarea>
          </div>
        </section>

        {/* Budget & Timeline */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            5. {t.sections.budget}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3">{t.options.budget.label}</h4>
              <div className="space-y-3">
                {['unknown', 'small', 'medium', 'large'].map((key) => (
                  <label key={key} className="flex items-start space-x-3 cursor-pointer">
                    <input type="radio" name="budget" value={key} className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300" onChange={handleChange} />
                    <span className="text-gray-700 text-sm">{t.options.budget[key]}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-3">{t.options.timeline.label}</h4>
              <div className="space-y-3">
                {['asap', 'months', 'later'].map((key) => (
                  <label key={key} className="flex items-start space-x-3 cursor-pointer">
                    <input type="radio" name="timeline" value={key} className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300" onChange={handleChange} />
                    <span className="text-gray-700 text-sm">{t.options.timeline[key]}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cooperation */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">
            6. {t.sections.cooperation}
          </h3>
          <div className="space-y-3 mb-6">
            {Object.entries(t.options.support).map(([key, label]) => (
              <label key={key} className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" name="support" value={key} className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={handleChange} />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.notes}</label>
            <textarea name="notes" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" onChange={handleChange}></textarea>
          </div>
        </section>

        {/* Privacy & Submit */}
        <section className="bg-gray-50 p-6 rounded-lg">
          <p className="text-sm text-gray-600 mb-4">{t.privacy.text}</p>
          <label className="flex items-start space-x-3 cursor-pointer mb-6">
            <input type="checkbox" name="privacy" required checked={formData.privacy} className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" onChange={handleChange} />
            <span className="text-sm font-medium text-gray-900">{t.privacy.checkbox} *</span>
          </label>
          <button
            type="submit"
            disabled={!formData.privacy}
            className={`w-full md:w-auto px-8 py-4 rounded-lg font-bold text-white shadow-lg transition-all duration-200 flex items-center justify-center ${
              formData.privacy 
                ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {t.submit}
            <SafeIcon icon={FiSend} className="ml-2 h-5 w-5" />
          </button>
        </section>

      </div>
    </form>
  );
};

export default RequestForm;