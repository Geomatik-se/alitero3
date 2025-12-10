import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import SafeIcon from '../components/common/SafeIcon';
import ConfirmationModal from '../components/common/ConfirmationModal';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiArrowRight, FiCheck } = FiIcons;

const InquiryPage = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    fieldOfActivity: [],
    website: '',
    projectType: '',
    numberOfPages: '',
    requiredFunctions: [],
    multilingualRequired: false,
    designPreferences: [],
    colorPreferences: '',
    references: '',
    accessibilityImportant: false,
    corporateDesignAvailable: false,
    projectStart: '',
    deadline: '',
    budgetRange: '',
    contactName: '',
    email: '',
    phone: '',
    additionalComments: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const totalSteps = 5;

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear validation error for this field when user updates it
    if (validationErrors[field]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleArrayUpdate = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const validateCurrentStep = () => {
    const errors = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.organizationName.trim()) {
          errors.organizationName = 'Organization name is required';
        }
        if (!formData.organizationType) {
          errors.organizationType = 'Organization type is required';
        }
        break;
      case 2:
        if (!formData.projectType) {
          errors.projectType = 'Project type is required';
        }
        break;
      case 5:
        if (!formData.contactName.trim()) {
          errors.contactName = 'Contact name is required';
        }
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
        break;
      default:
        break;
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Clear errors when going back
      setValidationErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all steps before submission
    if (!validateCurrentStep()) {
      return;
    }
    
    // Additional validation for required fields
    const errors = {};
    if (!formData.budgetRange) {
      errors.budgetRange = 'Budget range is required';
    }
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('accessKey', 'sf_71gh85f781lfgmk6ifcj3ce7');
    
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formDataToSend.append(key, value.join(', '));
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setFormData({
          organizationName: '',
          organizationType: '',
          fieldOfActivity: [],
          website: '',
          projectType: '',
          numberOfPages: '',
          requiredFunctions: [],
          multilingualRequired: false,
          designPreferences: [],
          colorPreferences: '',
          references: '',
          accessibilityImportant: false,
          corporateDesignAvailable: false,
          projectStart: '',
          deadline: '',
          budgetRange: '',
          contactName: '',
          email: '',
          phone: '',
          additionalComments: ''
        });
        setShowModal(true);
        setCurrentStep(1);
        setValidationErrors({});
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t('inquiry.error'));
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: 
        return (
          <OrganizationStep 
            formData={formData} 
            updateFormData={updateFormData} 
            handleArrayUpdate={handleArrayUpdate} 
            t={t}
            validationErrors={validationErrors}
          />
        );
      case 2: 
        return (
          <ProjectScopeStep 
            formData={formData} 
            updateFormData={updateFormData} 
            handleArrayUpdate={handleArrayUpdate} 
            t={t}
            validationErrors={validationErrors}
          />
        );
      case 3: 
        return (
          <DesignRequirementsStep 
            formData={formData} 
            updateFormData={updateFormData} 
            handleArrayUpdate={handleArrayUpdate} 
            t={t}
          />
        );
      case 4: 
        return (
          <TimelineBudgetStep 
            formData={formData} 
            updateFormData={updateFormData} 
            t={t}
            validationErrors={validationErrors}
          />
        );
      case 5: 
        return (
          <ContactDetailsStep 
            formData={formData} 
            updateFormData={updateFormData} 
            t={t}
            validationErrors={validationErrors}
          />
        );
      default: 
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('inquiry.title')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('inquiry.subtitle')}
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          {[...Array(totalSteps)].map((_, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-200 ${
                index + 1 < currentStep 
                  ? 'bg-blue-600 text-white' 
                  : index + 1 === currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
              }`}>
                {index + 1 < currentStep ? <SafeIcon icon={FiCheck} className="w-5 h-5" /> : index + 1}
              </div>
              {index < totalSteps - 1 && (
                <div className={`h-1 w-full mx-4 transition-all duration-200 ${
                  index + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mb-8">
          <span className="text-sm text-gray-500">{t('inquiry.step')} {currentStep} {t('inquiry.of')} {totalSteps}</span>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                currentStep === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
              {t('common.previous')}
            </button>
            
            {currentStep === totalSteps ? (
              <button
                type="submit"
                className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                {t('common.submit')}
                <SafeIcon icon={FiCheck} className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                {t('common.next')}
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={t('inquiry.success')}
        message={t('inquiry.successMessage')}
        type="success"
      />
    </div>
  );
};

const OrganizationStep = ({ formData, updateFormData, handleArrayUpdate, t, validationErrors }) => {
  const orgTypes = Object.entries(t('inquiry.options.orgTypes', { returnObjects: true }));
  const activityFields = Object.entries(t('inquiry.options.activities', { returnObjects: true }));

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inquiry.steps.org')}</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.orgName')} *
          </label>
          <input
            type="text"
            required
            value={formData.organizationName}
            onChange={(e) => updateFormData('organizationName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              validationErrors?.organizationName 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300'
            }`}
            placeholder={t('inquiry.placeholders.orgName')}
          />
          {validationErrors?.organizationName && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.organizationName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.orgType')} *
          </label>
          <select
            required
            value={formData.organizationType}
            onChange={(e) => updateFormData('organizationType', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              validationErrors?.organizationType 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300'
            }`}
          >
            <option value="">{t('inquiry.placeholders.selectType')}</option>
            {orgTypes.map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          {validationErrors?.organizationType && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.organizationType}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.activity')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {activityFields.map(([key, label]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.fieldOfActivity.includes(key)}
                  onChange={(e) => handleArrayUpdate('fieldOfActivity', key, e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.website')}
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => updateFormData('website', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t('inquiry.placeholders.website')}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectScopeStep = ({ formData, updateFormData, handleArrayUpdate, t, validationErrors }) => {
  const projectTypes = Object.entries(t('inquiry.options.projectTypes', { returnObjects: true }));
  const pageRanges = Object.entries(t('inquiry.options.pageRanges', { returnObjects: true }));
  const functions = Object.entries(t('inquiry.options.functions', { returnObjects: true }));

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inquiry.steps.scope')}</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.projectType')} *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projectTypes.map(([key, label]) => (
              <label 
                key={key} 
                className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                  validationErrors?.projectType && !formData.projectType
                    ? 'border-red-500' 
                    : 'border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="projectType"
                  value={key}
                  checked={formData.projectType === key}
                  onChange={(e) => updateFormData('projectType', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
          {validationErrors?.projectType && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.projectType}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.pages')}
          </label>
          <select
            value={formData.numberOfPages}
            onChange={(e) => updateFormData('numberOfPages', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">{t('inquiry.placeholders.selectRange')}</option>
            {pageRanges.map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.functions')}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {functions.map(([key, label]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.requiredFunctions.includes(key)}
                  onChange={(e) => handleArrayUpdate('requiredFunctions', key, e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.multilingualRequired}
              onChange={(e) => updateFormData('multilingualRequired', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t('inquiry.fields.multilingual')}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const DesignRequirementsStep = ({ formData, updateFormData, handleArrayUpdate, t }) => {
  const designStyles = Object.entries(t('inquiry.options.designStyles', { returnObjects: true }));

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inquiry.steps.design')}</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.designPrefs')}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {designStyles.map(([key, label]) => (
              <label key={key} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={formData.designPreferences.includes(key)}
                  onChange={(e) => handleArrayUpdate('designPreferences', key, e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.colorPrefs')}
          </label>
          <textarea
            value={formData.colorPreferences}
            onChange={(e) => updateFormData('colorPreferences', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t('inquiry.placeholders.colors')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium color-gray-700 mb-2">
            {t('inquiry.fields.references')}
          </label>
          <textarea
            value={formData.references}
            onChange={(e) => updateFormData('references', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t('inquiry.placeholders.references')}
          />
        </div>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.accessibilityImportant}
              onChange={(e) => updateFormData('accessibilityImportant', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t('inquiry.fields.accessibility')}</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.corporateDesignAvailable}
              onChange={(e) => updateFormData('corporateDesignAvailable', e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">{t('inquiry.fields.corporateDesign')}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const TimelineBudgetStep = ({ formData, updateFormData, t, validationErrors }) => {
  const budgetRanges = Object.entries(t('inquiry.options.budgetRanges', { returnObjects: true }));

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inquiry.steps.timeline')}</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.startDate')}
          </label>
          <input
            type="date"
            value={formData.projectStart}
            onChange={(e) => updateFormData('projectStart', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.deadline')}
          </label>
          <input
            type="date"
            value={formData.deadline}
            onChange={(e) => updateFormData('deadline', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.budget')} *
          </label>
          <div className="space-y-2">
            {budgetRanges.map(([key, label]) => (
              <label 
                key={key} 
                className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                  validationErrors?.budgetRange && !formData.budgetRange
                    ? 'border-red-500' 
                    : 'border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="budgetRange"
                  value={key}
                  checked={formData.budgetRange === key}
                  onChange={(e) => updateFormData('budgetRange', e.target.value)}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
          {validationErrors?.budgetRange && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.budgetRange}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const ContactDetailsStep = ({ formData, updateFormData, t, validationErrors }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('inquiry.steps.contact')}</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.contactName')} *
          </label>
          <input
            type="text"
            required
            value={formData.contactName}
            onChange={(e) => updateFormData('contactName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              validationErrors?.contactName 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300'
            }`}
            placeholder={t('inquiry.placeholders.name')}
          />
          {validationErrors?.contactName && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.contactName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.email')} *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              validationErrors?.email 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-300'
            }`}
            placeholder={t('inquiry.placeholders.email')}
          />
          {validationErrors?.email && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.phone')}
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t('inquiry.placeholders.phone')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('inquiry.fields.comments')}
          </label>
          <textarea
            value={formData.additionalComments}
            onChange={(e) => updateFormData('additionalComments', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={t('inquiry.placeholders.comments')}
          />
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">{t('inquiry.nextSteps.title')}</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• {t('inquiry.nextSteps.review')}</li>
            <li>• {t('inquiry.nextSteps.contact')}</li>
            <li>• {t('inquiry.nextSteps.consultation')}</li>
            <li>• {t('inquiry.nextSteps.proposal')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;