// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0f766e] text-gray-100 py-10">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
//             <ul>
//               <li>
//                 <Link to="/" className="hover:text-teal-200">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="hover:text-teal-200">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/service" className="hover:text-teal-200">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-teal-200">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Customer Services */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-4">
//               Customer Services
//             </h3>
//             <ul>
//               <li>
//                 <Link to="/disclaimer" className="hover:text-teal-200">
//                   Disclaimer
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/privacypolicy" className="hover:text-teal-200">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/return-refundpolicy" className="hover:text-teal-200">
//                   Return & Refund Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/terms-conditions" className="hover:text-teal-200">
//                   Terms and Conditions
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           {/* Get in Touch */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
//             <p> (866) 866-6257</p>
//             <p>3550 Gila Bnd, Casper, WY 82604</p>
//             <p>
//               <a
//                 href="mailto:support@microsonicrepair.com"
//                 className="hover:text-teal-200"
//               >
//                support@hewlettprinterssolution.com
//               </a>
//             </p>
//           </div>
//           {/* Newsletter */}
//           <div>
//             <h3 className="text-2xl font-bold text-white mb-4">Newsletter</h3>
//             <p>Free Delivery on your first order!</p>
//             <form className="mt-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
//               />
//               <button
//                 type="submit"
//                 className="w-full text-[#0f766e] bg-white py-2 rounded-md hover:bg-teal-200 transition duration-300"
//               >
//                 GO
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="text-center text-gray-100 mt-8">
//           &copy; {new Date().getFullYear()} © 2025 Hewlett Printers Solution LLC. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="w-full bg-gradient-to-b from-black to-gray-900 py-6 px-4 border-t border-amber-500/20">
    <div className="max-w-7xl mx-auto text-left">
      <p className="text-lg font-mono text-slate-200 tracking-wide">
        <span className="text-amber-400 font-bold glow">&#169; 2025</span> Hewlett Printers Solution LLC
        <span className="mx-3 text-amber-500/50">|</span>
        <span className="text-amber-400 font-semibold">3550</span> Gila Bnd, Casper, WY 82604, United States
      </p>
      
      <div className="flex flex-wrap items-center gap-x-4 text-lg font-mono text-slate-200 mt-3">
        <Link to="/privacypolicy" className="hover:text-amber-400 transition-all duration-300 hover:scale-105">Privacy Policy</Link>
        <span className="text-amber-500/50">|</span>
        <Link to="/terms-conditions" className="hover:text-amber-400 transition-all duration-300 hover:scale-105">Terms &amp; Conditions</Link>
        <span className="text-amber-500/50">|</span>
        <Link to="/return-refundpolicy" className="hover:text-amber-400 transition-all duration-300 hover:scale-105">Refund Policy</Link>
        <span className="text-amber-500/50">|</span>
        <Link to="/disclaimer" className="hover:text-amber-400 transition-all duration-300 hover:scale-105">Disclaimer</Link>
        <span className="text-amber-500/50">|</span>
        <Link to="/sms-tcpa" className="hover:text-amber-400 transition-all duration-300 hover:scale-105">SMS &amp; TCPA Compliance</Link>
        <span className="text-amber-500/50">|</span>
        <a
          href="mailto:support@hewlettprinterssolution.com"
          className="text-lime-300 hover:text-lime-200 transition-all duration-300 hover:scale-105 font-semibold"
        >
          support@hewlettprinterssolution.com
        </a>
        <span className="text-amber-500/50">|</span>
        <span className="text-amber-400 font-bold text-xl">(866) 866-6257</span>
      </div>

      <p className="text-lg font-mono text-slate-300 mt-4 leading-relaxed bg-gray-800/30 px-4 py-3 rounded-lg border border-gray-700">
        We are an independent service provider and are not affiliated with any brand or manufacturer. All trademarks are the property of their respective owners.
      </p>

      <p className="text-lg font-mono text-slate-200 mt-4 flex flex-wrap items-center gap-2">
        <span className="bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">Trusted Remote Technical Support Services</span>
        <span className="text-amber-500/50 mx-1">|</span>
        <span className="bg-lime-500/10 px-3 py-1 rounded-full border border-lime-500/30">Secure Payment Protection</span>
        <span className="text-amber-500/50 mx-1">|</span>
        <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/30">U.S. Based Business</span>
      </p>
    </div>
  </footer>
);

export default Footer;
