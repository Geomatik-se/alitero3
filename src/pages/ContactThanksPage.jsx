import React from 'react';
import { Link } from 'react-router-dom';

function ContactThanksPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6 text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Vielen Dank!</h1>
      <p className="text-gray-700 mb-6">Ihre Anfrage wurde erfolgreich versendet. Wir melden uns so schnell wie möglich bei Ihnen.</p>
      <Link to="/" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">Zur Startseite</Link>
    </div>
  );
}

export default ContactThanksPage;
