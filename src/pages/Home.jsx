import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CustomerReview from '../sections/CustomerReview';
import HelpPage from '../sections/HelpPage';
import PeaceOfMindGuarantee from '../sections/PeaceOfMindGuarantee';
import JivoChat from '../JivoChat';
import { Chat } from '@mui/icons-material';

const Home = () => {
  return (
    <>
      <div className="bg-teal-50 min-h-screen flex items-center justify-center">
        <div className=" min-h-screen flex items-center justify-center py-12 mt-[50px]">
  <div className="max-w-[1280px] mx-auto w-full p-6">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:shadow-3xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-teal-800 mb-6 leading-tight">
  Printer Not Working?<br />
  Computer Slow?<br />
  We Fix It Fast.
</h1>
          <p className="text-gray-700 text-lg lg:text-xl mb-8 leading-relaxed">
            We've helped thousands of users restore their printers and computers. We believe in honest service, real solutions, and long-term customer relationships.
            Professional Remote Printer & Computer Support – Fast, Secure & Trusted in the USA & Canada
          </p>
         <div className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white p-6 rounded-2xl text-center shadow-2xl transform hover:scale-[1.02] hover:shadow-3xl transition-all duration-300 border border-teal-400/30 relative overflow-hidden group">
  <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
  <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
    <div className="flex items-center gap-3">
      <div className="text-2xl animate-bounce">📞</div>
      <div className="text-left">
        <div className="text-teal-200 text-sm font-medium">Call Now</div>
        <div className="text-white text-[15px] font-bold tracking-wide">(866) 866-6257</div>
      </div>
    </div>
    
    <div className="hidden sm:block w-px h-8 bg-teal-400/50"></div>
    
    <div className="flex items-center gap-3">
      <div className="text-2xl">💬</div>
      <div className="text-left">
        <div className="text-teal-200 text-sm font-medium">Instant Support</div>
        <div className="text-white text-[15px] font-semibold">Remote Support Available</div>
      </div>
    </div>
  </div>
  
  {/* Shine effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
  
  {/* Bottom glow */}
  <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full"></div>
</div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
          <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://img.freepik.com/premium-photo/close-up-office-table-with-printer-it_93675-81686.jpg?w=826"
              alt="Professional Printer Support"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* ------------------- */}
      {/* CTA Section */}
<section className="bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 rounded-3xl p-8 text-center text-white shadow-2xl transform hover:shadow-3xl transition-all duration-300">
  <div className="max-w-3xl mx-auto">
    <div className="text-6xl font-extrabold mb-1 flex items-center justify-center gap-3">
      <span className="text-6xl animate-pulse">📞</span>
      Need Immediate Help?
    </div>
    
    <p className="text-teal-100 text-lg mb-3 font-semibold text-lg">
      We're here for you.
    </p>

    <h2 className="text-3xl font-bold mb-3">
      Ready to Get Your Printer Working?
    </h2>
    
    <p className="text-base mb-6 max-w-xl mx-auto text-teal-50">
      Our team of printer experts is ready to help you with all your printing needs
    </p>

    <div className="flex flex-col items-center gap-3">
      <p className="text-teal-100 text-sm font-medium">
        Click "Get Help Now" to start your support session.
      </p>
      
      <button className="bg-white text-teal-700 font-bold py-2 px-6 rounded-lg flex items-center justify-center hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white">
        <Chat className="mr-2 w-4 h-4" />
        Chat with an Expert
      </button>
    </div>
  </div>
</section>
      <PeaceOfMindGuarantee />
      <CustomerReview />
      <HelpPage />
      <JivoChat/>
    </>
  );
};

export default Home;
