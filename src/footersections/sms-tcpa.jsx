import React from 'react';

const SmsTcpa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 to-black text-white">
      {/* Header */}
      <header className="bg-teal-900 border-b border-teal-700">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4 mt-[60px]">SMS & TCPA Compliance Policy</h1>
          <p className="text-xl text-teal-200">
            Hewlett Printers Solution LLC
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-gray-300">
            This SMS & TCPA Compliance Policy explains how Hewlett Printers Solution LLC communicates via text message (SMS) with customers in a lawful, respectful, and secure manner in accordance with the Telephone Consumer Protection Act (TCPA) and carrier messaging guidelines.
          </p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* SMS Consent & Messaging Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">SMS Consent & Messaging Policy</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>By contacting us or submitting your phone number on our website, you consent to receive service-related SMS messages only from Hewlett Printers Solution LLC.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>We do not send spam, mass marketing, or promotional SMS without prior consent.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>Message frequency varies and depends on your service request or account activity.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>Message and data rates may apply based on your mobile carrier plan.</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* Purpose of Messages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Purpose of Messages</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center">
              <span className="text-teal-400 mr-3">●</span>
              <p>Appointment confirmations</p>
            </div>
            <div className="flex items-center">
              <span className="text-teal-400 mr-3">●</span>
              <p>Service updates and support responses</p>
            </div>
            <div className="flex items-center">
              <span className="text-teal-400 mr-3">●</span>
              <p>Account or billing notifications</p>
            </div>
            <div className="flex items-center">
              <span className="text-teal-400 mr-3">●</span>
              <p>Security verification messages</p>
            </div>
            <div className="flex items-center">
              <span className="text-teal-400 mr-3">●</span>
              <p>Customer service communication</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* Opt-Out Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Opt-Out Policy</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>You may unsubscribe from SMS communication at any time by replying STOP</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>After you reply STOP, you will receive a confirmation message and no further texts will be sent</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>You may re-subscribe later by contacting us again or replying START</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* Help & Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Help & Support</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>For assistance with SMS messages, reply HELP at any time</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>You may also contact us directly at:</p>
            </div>
            <div className="ml-6 space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                support@hewlettprinterssolution.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                (866) 866-6257
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* Consent Terms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Consent Terms</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>SMS consent is not required to purchase or use our services</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>By providing your number, you confirm it belongs to you and is accurate</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>You agree not to provide a number that is not legally yours</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* Privacy & Data Security */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Privacy & Data Security</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>We do not sell or share phone numbers with third-party marketers</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>SMS communication is used solely for customer support and service purposes</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>Your data will be handled in accordance with our Privacy Policy</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* Carrier Compliance Notice */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Carrier Compliance Notice</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>Carriers are not liable for delayed or undelivered messages</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>Delivery depends on your mobile carrier network availability</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* TCPA Compliance Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">TCPA Compliance Statement</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>We comply with the Telephone Consumer Protection Act (TCPA)</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>We send SMS only to customers who have given direct consent</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 mr-3 mt-1">●</span>
              <p>We maintain proof of customer opt-in documentation</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-700 my-8"></div>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact Information</h2>
          <div className="bg-teal-800/30 p-6 rounded-lg border border-teal-700">
            <p className="text-gray-300 mb-4">For questions regarding this SMS & TCPA Policy, contact us:</p>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold">Hewlett Printers Solution LLC</p>
              <p>3550 Gila Bnd, Casper, WY 82604, United States</p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                support@hewlettprinterssolution.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                (866) 866-6257
              </p>
              <p className="flex items-center">
                <span className="mr-2">🌐</span>
                www.hewlettprinterssolution.com
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SmsTcpa;