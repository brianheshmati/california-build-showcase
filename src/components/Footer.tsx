
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">CaliBuild Pro</h3>
            <p className="text-gray-300 mb-4">
              Your trusted construction partner in California. We deliver quality craftsmanship 
              and exceptional service for residential and commercial projects.
            </p>
            <p className="text-gray-300">
              Licensed • Bonded • Insured
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-amber-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>(555) 123-4567</p>
              <p>info@calibuildpro.com</p>
              <p>San Francisco Bay Area</p>
              <p>California, USA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CaliBuild Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
