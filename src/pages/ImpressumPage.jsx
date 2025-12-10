import React from 'react';
import {useLanguage} from '../contexts/LanguageContext';

const ImpressumPage = () => {
  const {t} = useLanguage();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {t('impressum.title')}
          </h1>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {t('impressum.tmgInfo')}
            </h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.company')}
              </h3>
              <p 
                className="text-gray-700" 
                dangerouslySetInnerHTML={{__html: t('impressum.companyDetails')}}
              />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.contact')}
              </h3>
              <p 
                className="text-gray-700" 
                dangerouslySetInnerHTML={{__html: t('impressum.contactDetails')}}
              />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.register')}
              </h3>
              <p 
                className="text-gray-700" 
                dangerouslySetInnerHTML={{__html: t('impressum.registerDetails')}}
              />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.vat')}
              </h3>
              <p 
                className="text-gray-700" 
                dangerouslySetInnerHTML={{__html: t('impressum.vatDetails')}}
              />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.responsible')}
              </h3>
              <p 
                className="text-gray-700" 
                dangerouslySetInnerHTML={{__html: t('impressum.responsibleDetails')}}
              />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.dispute')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('impressum.disputeDetails1')}{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  className="text-blue-600 hover:underline ml-1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-700">
                {t('impressum.disputeDetails2')}
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.liabilityContent')}
              </h3>
              <p className="text-gray-700">
                {t('impressum.liabilityContentText')}
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.liabilityLinks')}
              </h3>
              <p className="text-gray-700">
                {t('impressum.liabilityLinksText')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {t('impressum.copyright')}
              </h3>
              <p className="text-gray-700">
                {t('impressum.copyrightText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;