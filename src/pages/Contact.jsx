// import React, { useState } from 'react';
// import JivoChat from '../JivoChat';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setErrors({
//       ...errors,
//       [e.target.name]: '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.message) newErrors.message = 'Message is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       setErrors({});
//       setSubmitted(true);
//     }
//   };

//   return (
//     <>
//     <div className="min-h-screen bg-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex mt-10">
//         <div className="w-1/2 hidden md:block">
//           <img
//             src="https://img.freepik.com/free-photo/happy-young-asian-business-woman-call-center-welcome-female-operator-put-smalltalk-headphone-standing-isolated-white-background_74952-3394.jpg?t=st=1718865010~exp=1718868610~hmac=09007b1ecd88176252b71e9297b95c6cecbef592cf0b2cf5635013edbd7aa606&w=826"
//             alt="Contact Us"
//             className="w-full h-full object-cover rounded-l-lg"
//           />
//         </div>
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-3xl font-extrabold text-teal-700">Contact Us</h2>
//           <p className="mt-4 text-gray-600">
//             We'd love to hear from you! Please fill out the form below and we
//             will get in touch with you shortly.
//           </p>
//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div>
//                 <label htmlFor="name" className="sr-only">
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Full Name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="email" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="message" className="sr-only">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Your message"
//                   rows="5"
//                 ></textarea>
//                 {errors.message && (
//                   <p className="text-red-500 text-xs mt-1">{errors.message}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//           {submitted && (
//             <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//               Your response has been submitted!
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     <JivoChat/>
//     </>
//   );
// };

// export default ContactPage;



// import React, { useState } from 'react';
// import JivoChat from '../JivoChat';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setErrors({
//       ...errors,
//       [e.target.name]: '',
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.phone) newErrors.phone = 'Phone number is required';
//     if (!formData.message) newErrors.message = 'Message is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       setErrors({});
//       setSubmitted(true);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-teal-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex mt-10">
//           <div className="w-1/2 hidden md:block">
//             <img
//               src="https://img.freepik.com/free-photo/happy-young-asian-business-woman-call-center-welcome-female-operator-put-smalltalk-headphone-standing-isolated-white-background_74952-3394.jpg?t=st=1718865010~exp=1718868610~hmac=09007b1ecd88176252b71e9297b95c6cecbef592cf0b2cf5635013edbd7aa606&w=826"
//               alt="Contact Us"
//               className="w-full h-full object-cover rounded-l-lg"
//             />
//           </div>

//           <div className="w-full md:w-1/2 p-8">
//             <h2 className="text-3xl font-extrabold text-teal-700">Contact Us</h2>
//             <p className="mt-4 text-gray-600">
//               We'd love to hear from you! Please fill out the form below and we
//               will get in touch with you shortly.
//             </p>

//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               <div className="rounded-md shadow-sm -space-y-px">
//                 {/* Name */}
//                 <div>
//                   <label htmlFor="name" className="sr-only">Full Name</label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Full Name"
//                   />
//                   {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label htmlFor="email" className="sr-only">Email address</label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Email address"
//                   />
//                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label htmlFor="phone" className="sr-only">Phone Number</label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Phone Number"
//                   />
//                   {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label htmlFor="message" className="sr-only">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Your message"
//                     rows="5"
//                   ></textarea>
//                   {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//                 </div>
//               </div>

//               {/* Submit button */}
//               <div>
//                 <button
//                   type="submit"
//                   className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Send Message
//                 </button>
//               </div>

//               {/* Consent message */}
              
//             </form>

//             {submitted && (
//               <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                 Your response has been submitted!
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <JivoChat />
//     </>
//   );
// };

// export default ContactPage;

import React, { useState } from 'react';
import JivoChat from '../JivoChat';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [agreedToSMS, setAgreedToSMS] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!agreedToSMS) newErrors.sms = 'SMS consent is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 mt-[60px]">
        <div className="max-w-3xl w-full bg-white shadow-xl rounded-xl flex transform hover:shadow-2xl transition-all duration-300">
          <div className="w-1/2 hidden md:block">
            <img
              src="https://img.freepik.com/free-photo/happy-young-asian-business-woman-call-center-welcome-female-operator-put-smalltalk-headphone-standing-isolated-white-background_74952-3394.jpg?t=st=1718865010~exp=1718868610~hmac=09007b1ecd88176252b71e9297b95c6cecbef592cf0b2cf5635013edbd7aa606&w=826"
              alt="Contact Us"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>

          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-teal-800 mb-1">Contact Us</h2>
            <p className="text-sm text-gray-600 mb-4">
              We'd love to hear from you! Please fill out the form below and we
              will get in touch with you shortly.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-3">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 text-sm"
                    placeholder="Full Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 text-sm"
                    placeholder="Email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 text-sm"
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 text-sm"
                    placeholder="Your message"
                    rows="3"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                </div>
              </div>

              {/* SMS Consent Section */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 space-y-2">
                <p className="text-xs text-gray-700 leading-relaxed">
                  By submitting this form, I agree to receive service-related SMS/text messages from Hewlett Printers Solution LLC at the phone number provided. I understand that message frequency may vary and that message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. Consent is not a condition of purchase. View our Privacy Policy and Terms & Conditions for details.
                </p>
                
                <div className="flex items-start space-x-2">
                  <input
                    id="sms-consent"
                    name="sms-consent"
                    type="checkbox"
                    checked={agreedToSMS}
                    onChange={(e) => setAgreedToSMS(e.target.checked)}
                    className="mt-0.5 h-3 w-3 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label htmlFor="sms-consent" className="text-xs text-gray-700 flex-1">
                    <span className="font-medium">I agree to receive SMS/text messages from Hewlett Printers Solution LLC for service and support purposes. Reply STOP to unsubscribe. Message/data rates may apply.</span>
                  </label>
                </div>
                {errors.sms && <p className="text-red-500 text-xs mt-1 ml-1">{errors.sms}</p>}
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={!agreedToSMS}
                  className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-200 ${
                    agreedToSMS 
                      ? 'bg-teal-600 hover:bg-teal-700 transform hover:scale-[1.02]' 
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>

            {submitted && (
              <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center text-sm font-medium">
                Your response has been submitted!
              </div>
            )}
          </div>
        </div>
      </div>

      <JivoChat />
    </>
  );
};

export default ContactPage;