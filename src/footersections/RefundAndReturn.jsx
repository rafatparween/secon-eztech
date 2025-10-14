import React from 'react';

const ReturnRefundPolicy= () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F766E] to-black text-white mt-[60px]">
      {/* Header */}
      <header className="bg-[#0F766E] border-b border-teal-700">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Refund & Cancellation Policy – Hewlett Printers Solution LLC</h1>
          <div className="text-lg text-teal-100 space-y-2">
            <p>Effective Date: January 2025</p>
            <p>Last Updated: January 2025</p>
            <p className="mt-4">This Refund & Cancellation Policy applies to all services provided by Hewlett Printers Solution LLC, including one-time technical support, remote support sessions, printer services, software setup, and subscription service plans.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 1. Service Eligibility */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">1. Service Eligibility</h2>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">1.1</span>
              <p>All services provided by Hewlett Printers Solution LLC are remote technical support services delivered via secure remote tools.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">1.2</span>
              <p>By purchasing a service, the customer acknowledges they have read and agreed to this Refund & Cancellation Policy.</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 2. Refund Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">2. Refund Policy</h2>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">2.1</span>
              <p>We follow a 7-Day Limited Refund Policy. Refunds may be approved only if all the following conditions are met:</p>
            </div>
            <div className="ml-8 space-y-2">
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>No service was delivered by our technician</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>No remote access or technical work was performed</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>No software/license/subscription was activated</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Duplicate payment was made</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>The purchase was made by mistake and no service was used</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">2.2</span>
              <p>To request a refund, customers must contact us at support@hewlettprinterssolution.com with:</p>
            </div>
            <div className="ml-8 space-y-2">
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Full name</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Email used at purchase</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Invoice/transaction ID</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Reason for refund request</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 3. Strict No-Refund Situations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">3. Strict No-Refund Situations</h2>
          <div className="text-gray-200">
            <p className="mb-4">Once any service has been delivered or started, no refund will be issued under any circumstances. This includes (but is not limited to):</p>
            <div className="grid md:grid-cols-2 gap-2 ml-4">
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Service session already started</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Remote access connected</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Technician time or diagnosis provided</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Issue caused by customer hardware failure</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Customer internet/network issues blocking support</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Customer refuses troubleshooting steps</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Customer unresponsive after starting support</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Service delays caused by third-party software/hardware</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Antivirus or software product key already activated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 4. Cancellation Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">4. Cancellation Policy</h2>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">4.1</span>
              <p>Customers may cancel a service only before service has started.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">4.2</span>
              <p>Once a service session has begun, cancellations are no longer accepted.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">4.3</span>
              <p>Subscription plans must be canceled at least 3 days before the renewal date to avoid the next billing cycle.</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 5. Service Non-Transferability */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">5. Service Non-Transferability</h2>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">5.1</span>
              <p>Services purchased are for one customer and one device only unless otherwise mentioned.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">5.2</span>
              <p>Service plans are non-transferable and cannot be shared, resold, or reassigned.</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 6. Chargeback & Fraud Prevention Policy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">6. Chargeback & Fraud Prevention Policy</h2>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">6.1</span>
              <p>Filing a false chargeback after receiving service is considered fraud.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">6.2</span>
              <p>If a chargeback is filed after successful service delivery:</p>
            </div>
            <div className="ml-8 space-y-2">
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>All service documentation will be submitted as evidence</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Service logs and recordings may be used</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Unpaid balances may be sent to collections</p>
              </div>
              <div className="flex items-start">
                <span className="text-teal-400 mr-3 mt-1">•</span>
                <p>Service access will be permanently terminated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 7. Refund Processing Time */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">7. Refund Processing Time</h2>
          <div className="space-y-4 text-gray-200">
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">7.1</span>
              <p>Approved refunds are processed to the original payment method only.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">7.2</span>
              <p>Refund processing time: 5–10 business days.</p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-400 font-semibold mr-3 mt-1">7.3</span>
              <p>We do not issue cash refunds, third-party refunds, or refunds to other accounts.</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 8. Contact Information for Refund Requests */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">8. Contact Information for Refund Requests</h2>
          <div className="bg-teal-800/30 p-6 rounded-lg border border-teal-600">
            <p className="text-gray-200 mb-4">For refund support, email:</p>
            <div className="space-y-3 text-gray-200">
              <p className="flex items-center text-lg">
                <span className="mr-3">📧</span>
                support@hewlettprinterssolution.com
              </p>
              <p className="flex items-center text-lg">
                <span className="mr-3">📞</span>
                (866) 866-6257
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* 9. Agreement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">9. Agreement</h2>
          <p className="text-gray-200 text-lg">By purchasing from Hewlett Printers Solution LLC, you acknowledge and agree to this Refund & Cancellation Policy.</p>
        </section>

        {/* Divider */}
        <div className="border-t border-teal-600 my-8"></div>

        {/* Footer */}
        <section className="text-center py-8">
          <div className="bg-teal-800/30 p-6 rounded-lg border border-teal-600">
            <p className="text-xl font-semibold text-teal-300 mb-4">Hewlett Printers Solution LLC</p>
            <div className="text-gray-200 space-y-2">
              <p>3550 Gila Bnd, Casper, WY 82604, United States</p>
              <p>support@hewlettprinterssolution.com | (866) 866-6257</p>
              <p>www.hewlettprinterssolution.com</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReturnRefundPolicy;