// PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-[#0F766E]  mt-[70px]">Privacy Policy</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Effective Date: October 2025
        </p>
      </div>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Introduction Section */}
        <section className="p-8 border-b border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="bg-[#0F766E] rounded-lg p-3 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Hewlett Printers Solution LLC (<span className="font-medium text-[#0F766E]">"we," "us," or "our"</span>) respects your privacy. This Privacy Policy explains how we collect, use, and protect information you provide when you visit our website, use our services, or communicate with us via SMS, phone, or email.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                By using our website or services, you agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect Section */}
        <section className="p-8 border-b border-gray-100 bg-gray-50">
          <div className="flex items-start space-x-4">
            <div className="bg-[#0F766E] rounded-lg p-3 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We collect the following types of information:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-2">•</span>
                  <span><span className="font-medium text-gray-900">Personal Information:</span> Name, phone number, email, billing address, and payment information when you request support or make a purchase.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-2">•</span>
                  <span><span className="font-medium text-gray-900">Technical Data:</span> IP address, browser type, and device information for analytics and security.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0F766E] mr-2">•</span>
                  <span><span className="font-medium text-gray-900">Communications:</span> Records of phone calls, SMS messages, and emails exchanged for service-related purposes.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SMS Policy Section with Highlight */}
        <section className="p-8 border-b border-gray-100 bg-gradient-to-r from-[#0F766E]/5 to-[#0F766E]/10">
          <div className="flex items-start space-x-4">
            <div className="bg-[#0F766E] rounded-lg p-3 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. SMS and Text Messaging Policy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                By submitting your phone number through our website or contacting us by phone, you consent to receive SMS messages related to your service request.
              </p>
              <div className="bg-white rounded-xl p-6 mt-6 shadow-sm border border-gray-200">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium text-gray-900 sm:w-40">Message Frequency:</span>
                    <span>Occasional, as needed for service updates or confirmations.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium text-gray-900 sm:w-40">Opt-Out:</span>
                    <span>Reply <span className="font-mono bg-gray-100 px-2 py-1 rounded">STOP</span> to unsubscribe.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-medium text-gray-900 sm:w-40">Help:</span>
                    <span>Reply <span className="font-mono bg-gray-100 px-2 py-1 rounded">HELP</span> or contact us at <span className="text-[#0F766E] font-medium">(866) 866-6257</span>.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-medium text-gray-900 sm:w-40">Carrier Disclaimer:</span>
                    <span>Message and data rates may apply.</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-700 mt-6 leading-relaxed">
                We do not share, sell, or lease customer phone numbers to third parties.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-[#0F766E] rounded-lg p-3 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For questions or concerns:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <p className="text-gray-900 font-medium">Hewlett Printers Solution LLC</p>
                <p className="text-gray-700">3550 Gila Bnd, Casper, WY 82604, USA</p>
                <p className="text-gray-700 flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:support@hewlettprinterssolution.com" className="text-[#0F766E] hover:underline">
                    support@hewlettprinterssolution.com
                  </a>
                </p>
                <p className="text-gray-700 flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:8668666257" className="text-[#0F766E] hover:underline">
                    (866) 866-6257
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Thank you for trusting Hewlett Printers Solution LLC with your privacy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;