




// TermsAndConditions.jsx
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F766E] rounded-full mb-6 mt-[60px]">
            <span className="text-2xl">⚖️</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
            <p className="text-lg">Effective Date: October 2025</p>
            <span className="hidden sm:block">•</span>
            <p className="text-lg font-medium text-[#0F766E]">Hewlett Printers Solution LLC</p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          
          {/* General Section */}
          <section className="p-8 border-b border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms and Conditions (<span className="font-medium text-[#0F766E]">"Terms"</span>) govern your use of our website and services. By engaging our services, you agree to these Terms in full.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="p-8 border-b border-gray-100 bg-gray-50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  We provide remote printer setup, troubleshooting, installation, and related support. Our technicians operate under scheduled sessions agreed upon with the customer.
                </p>
              </div>
            </div>
          </section>

          {/* Payments Section */}
          <section className="p-8 border-b border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Payments</h2>
                <p className="text-gray-700 leading-relaxed">
                  All payments must be made in advance or as agreed upon via invoice. We accept secure payments through approved gateways such as Stripe, PayPal, or Square.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Policy Section */}
          <section className="p-8 border-b border-gray-100 bg-gray-50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Refund and Cancellation Policy</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We strive for customer satisfaction.
                </p>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#0F766E] mr-3 mt-1">•</span>
                      <span>Customers may request a refund within 7 days only if no service has been delivered or initiated.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0F766E] mr-3 mt-1">•</span>
                      <span>Once service work begins (diagnostics, installation, or troubleshooting), the transaction becomes non-refundable.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0F766E] mr-3 mt-1">•</span>
                      <span>Refund requests must be sent to <span className="text-[#0F766E] font-medium">support@hewlettprinterssolution.com</span> with proof of purchase.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0F766E] mr-3 mt-1">•</span>
                      <span>Approved refunds are processed to the original payment method within 5–10 business days.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* SMS Consent Section */}
          <section className="p-8 border-b border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. SMS Consent</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  By submitting your phone number, you agree to receive service-related text messages.
                </p>
                <div className="bg-gradient-to-r from-[#0F766E]/5 to-[#0F766E]/10 rounded-xl p-6 border border-[#0F766E]/20">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-gray-900 sm:w-32">Opt-Out:</span>
                      <span>Reply <span className="font-mono bg-white px-2 py-1 rounded border">STOP</span> to unsubscribe.</span>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:items-center">
                      <span className="font-medium text-gray-900 sm:w-32">Help:</span>
                      <span>Reply <span className="font-mono bg-white px-2 py-1 rounded border">HELP</span> or call <span className="text-[#0F766E] font-medium">(866) 866-6257</span>.</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-6 leading-relaxed">
                  We do not send spam or promotional texts without prior consent.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability Section */}
          <section className="p-8 border-b border-gray-100 bg-gray-50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Hewlett Printers Solution LLC shall not be liable for indirect, incidental, or consequential damages arising from service use, system malfunction, or unauthorized access.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property Section */}
          <section className="p-8 border-b border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, text, logos, and graphics on this website are the property of Hewlett Printers Solution LLC. Unauthorized use is strictly prohibited.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law Section */}
          <section className="p-8 border-b border-gray-100 bg-gray-50">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of the State of Wyoming, USA. Any disputes shall be resolved in courts located in Wyoming.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-[#0F766E] rounded-lg p-3 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg font-medium text-gray-900">Hewlett Printers Solution LLC</p>
                    <p className="flex items-start">
                      <span className="text-gray-500 mr-3">📍</span>
                      <span>3550 Gila Bnd, Casper, WY 82604, USA</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-gray-500 mr-3">📧</span>
                      <a href="mailto:support@hewlettprinterssolution.com" className="text-[#0F766E] hover:underline font-medium">
                        support@hewlettprinterssolution.com
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="text-gray-500 mr-3">📞</span>
                      <a href="tel:8668666257" className="text-[#0F766E] hover:underline font-medium">
                        (866) 866-6257
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;